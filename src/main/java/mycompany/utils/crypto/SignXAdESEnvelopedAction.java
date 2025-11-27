package mycompany.utils.crypto;

import lsfusion.base.file.RawFileData;
import lsfusion.server.data.sql.exception.SQLHandledException;
import lsfusion.server.language.ScriptingLogicsModule;
import lsfusion.server.logics.action.controller.context.ExecutionContext;
import lsfusion.server.logics.classes.ValueClass;
import lsfusion.server.logics.property.classes.ClassPropertyInterface;
import lsfusion.server.physics.dev.integration.internal.to.InternalAction;
import org.w3c.dom.Document;
import org.w3c.dom.Element;

import javax.xml.crypto.dsig.CanonicalizationMethod;
import javax.xml.crypto.dsig.Reference;
import javax.xml.crypto.dsig.SignedInfo;
import javax.xml.crypto.dsig.Transform;
import javax.xml.crypto.dsig.XMLObject;
import javax.xml.crypto.dsig.XMLSignature;
import javax.xml.crypto.dsig.XMLSignatureFactory;
import javax.xml.crypto.dsig.dom.DOMSignContext;
import javax.xml.crypto.dsig.keyinfo.KeyInfo;
import javax.xml.crypto.dsig.keyinfo.KeyInfoFactory;
import javax.xml.crypto.dsig.keyinfo.X509Data;
import javax.xml.crypto.dsig.spec.C14NMethodParameterSpec;
import javax.xml.crypto.dsig.spec.TransformParameterSpec;
import javax.xml.crypto.dsig.spec.XPathFilterParameterSpec;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.transform.OutputKeys;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.dom.DOMSource;
import javax.xml.transform.stream.StreamResult;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.math.BigInteger;
import java.security.KeyFactory;
import java.security.MessageDigest;
import java.security.PrivateKey;
import java.security.cert.CertificateFactory;
import java.security.cert.X509Certificate;
import java.security.spec.PKCS8EncodedKeySpec;
import java.sql.SQLException;
import java.time.OffsetDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;

public class SignXAdESEnvelopedAction extends InternalAction {

    public SignXAdESEnvelopedAction(ScriptingLogicsModule LM, ValueClass... classes) {
        super(LM, classes);
    }

    @Override
    protected void executeInternal(ExecutionContext<ClassPropertyInterface> context) throws SQLException, SQLHandledException {
        // Params: 0 - XML RAWFILE, 1 - RAWFILE private key (PKCS#8 encoded), 2 - STRING certificate DER (Base64)
        RawFileData xmlFile = (RawFileData) getParam(0, context);
        RawFileData privKeyRaw = (RawFileData) getParam(1, context);
        String certDerBase64 = (String) getParam(2, context);

        if (xmlFile == null || privKeyRaw == null || certDerBase64 == null) return;

        try {
            byte[] xmlBytes = xmlFile.getBytes();
            byte[] pkcs8 = privKeyRaw.getBytes();
            X509Certificate certificate = loadCertificateFromBase64DER(certDerBase64);
            PrivateKey privateKey = loadPrivateKey(pkcs8);

            byte[] signed = signXAdESEnveloped(xmlBytes, privateKey, certificate);
            findProperty("signedXML[]").change(new RawFileData(signed), context);
        } catch (Exception e) {
            throw new RuntimeException("XAdES signing error", e);
        }
    }

    private static X509Certificate loadCertificateFromBase64DER(String base64DER) throws Exception {
        byte[] der = Base64.getDecoder().decode(base64DER.replace("\n", "").replace("\r", "").trim());
        CertificateFactory factory = CertificateFactory.getInstance("X.509");
        return (X509Certificate) factory.generateCertificate(new ByteArrayInputStream(der));
    }

    private static PrivateKey loadPrivateKey(byte[] pkcs8) throws Exception {
        Exception last = null;
        for (String alg : new String[]{"EC", "RSA"}) {
            try {
                return KeyFactory.getInstance(alg).generatePrivate(new PKCS8EncodedKeySpec(pkcs8));
            } catch (Exception e) {
                last = e;
            }
        }
        if (last != null) throw last;
        throw new RuntimeException("Unsupported private key algorithm");
    }

    private static byte[] signXAdESEnveloped(byte[] xml, PrivateKey privateKey, X509Certificate cert) throws Exception {
        String dsNS = "http://www.w3.org/2000/09/xmldsig#";
        String xadesNS = "http://uri.etsi.org/01903/v1.3.2#";
        String excC14N = "http://www.w3.org/2001/10/xml-exc-c14n#";
        String sha256 = "http://www.w3.org/2001/04/xmlenc#sha256";

        // Parse input XML
        DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();
        dbf.setNamespaceAware(true);
        DocumentBuilder db = dbf.newDocumentBuilder();
        Document doc = db.parse(new ByteArrayInputStream(xml));

        // Create signature factory
        XMLSignatureFactory fac = XMLSignatureFactory.getInstance("DOM");

        // Build Reference to the whole document using XPath transform to exclude the ds:Signature
        Map<String, String> ns = new HashMap<>();
        ns.put("ds", dsNS);
        Transform xpathTransform = fac.newTransform(Transform.XPATH, new XPathFilterParameterSpec("not(ancestor-or-self::ds:Signature)", ns));
        Reference docRef = fac.newReference(
                "",
                fac.newDigestMethod(sha256, null),
                Collections.singletonList(xpathTransform),
                null,
                null
        );

        // Prepare XAdES SignedProperties element
        String sigId = "Signature-" + UUID.randomUUID().toString();
        String xadesId = "xades-" + sigId;
        String qualPropsId = "QualifyingProps-" + sigId;
        String qualInfosId = "QualifyingInfos-" + sigId;
        String sigValueId = "value-" + sigId;

        Element qualifyingProperties = doc.createElementNS(xadesNS, "xades:QualifyingProperties");
        qualifyingProperties.setAttribute("Id", qualPropsId);
        qualifyingProperties.setIdAttribute("Id", true);
        qualifyingProperties.setAttribute("Target", "#" + sigId);

        Element signedProperties = doc.createElementNS(xadesNS, "xades:SignedProperties");
        signedProperties.setAttribute("Id", xadesId);
        signedProperties.setIdAttribute("Id", true);
        qualifyingProperties.appendChild(signedProperties);

        Element signedSignatureProperties = doc.createElementNS(xadesNS, "xades:SignedSignatureProperties");
        signedProperties.appendChild(signedSignatureProperties);

        // SigningTime
        Element signingTime = doc.createElementNS(xadesNS, "xades:SigningTime");
        signingTime.setTextContent(OffsetDateTime.now().format(DateTimeFormatter.ISO_OFFSET_DATE_TIME));
        signedSignatureProperties.appendChild(signingTime);

        // SigningCertificate with CertDigest and IssuerSerial
        Element signingCertificate = doc.createElementNS(xadesNS, "xades:SigningCertificate");
        Element certEl = doc.createElementNS(xadesNS, "xades:Cert");
        Element certDigest = doc.createElementNS(xadesNS, "xades:CertDigest");
        Element dm = doc.createElementNS(dsNS, "ds:DigestMethod");
        dm.setAttribute("Algorithm", sha256);
        Element dv = doc.createElementNS(dsNS, "ds:DigestValue");
        dv.setTextContent(base64(sha256(cert.getEncoded())));
        certDigest.appendChild(dm);
        certDigest.appendChild(dv);
        certEl.appendChild(certDigest);

        Element issuerSerial = doc.createElementNS(xadesNS, "xades:IssuerSerial");
        Element x509IssuerName = doc.createElementNS(dsNS, "ds:X509IssuerName");
        x509IssuerName.setTextContent(cert.getIssuerX500Principal().getName("RFC2253"));
        Element x509SerialNumber = doc.createElementNS(dsNS, "ds:X509SerialNumber");
        BigInteger serial = cert.getSerialNumber();
        x509SerialNumber.setTextContent(serial.toString());
        issuerSerial.appendChild(x509IssuerName);
        issuerSerial.appendChild(x509SerialNumber);
        certEl.appendChild(issuerSerial);

        signingCertificate.appendChild(certEl);
        signedSignatureProperties.appendChild(signingCertificate);

        // SignaturePolicyImplied
        Element sigPolicyId = doc.createElementNS(xadesNS, "xades:SignaturePolicyIdentifier");
        Element implied = doc.createElementNS(xadesNS, "xades:SignaturePolicyImplied");
        sigPolicyId.appendChild(implied);
        signedSignatureProperties.appendChild(sigPolicyId);

        // Build Reference to SignedProperties with Type and Exclusive C14N
        Transform c14nTransform = fac.newTransform(excC14N, (TransformParameterSpec) null);
        Reference propsRef = fac.newReference(
                "#" + xadesId,
                fac.newDigestMethod(sha256, null),
                Collections.singletonList(c14nTransform),
                "http://uri.etsi.org/01903#SignedProperties",
                null
        );

        // SignedInfo with Exclusive C14N and appropriate SignatureMethod
        String sigMethodUri = cert.getPublicKey().getAlgorithm().equalsIgnoreCase("EC")
                ? "http://www.w3.org/2001/04/xmldsig-more#ecdsa-sha256"
                : "http://www.w3.org/2001/04/xmldsig-more#rsa-sha256";

        SignedInfo si = fac.newSignedInfo(
                fac.newCanonicalizationMethod(CanonicalizationMethod.EXCLUSIVE, (C14NMethodParameterSpec) null),
                fac.newSignatureMethod(sigMethodUri, null),
                Arrays.asList(docRef, propsRef)
        );

        // KeyInfo with certificate
        KeyInfoFactory kif = fac.getKeyInfoFactory();
        X509Data x509Data = kif.newX509Data(Collections.singletonList(cert));
        KeyInfo ki = kif.newKeyInfo(Collections.singletonList(x509Data));

        // Wrap QualifyingProperties in ds:Object with Id
        XMLObject xadesObject = fac.newXMLObject(
                Collections.singletonList(new javax.xml.crypto.dom.DOMStructure(qualifyingProperties)),
                qualInfosId,
                null,
                null
        );

        // Sign
        DOMSignContext dsc = new DOMSignContext(privateKey, doc.getDocumentElement());
        dsc.setDefaultNamespacePrefix("ds");

        XMLSignature signature = fac.newXMLSignature(si, ki, Collections.singletonList(xadesObject), sigId, sigValueId);
        signature.sign(dsc);

        // Output
        TransformerFactory tf = TransformerFactory.newInstance();
        Transformer trans = tf.newTransformer();
        trans.setOutputProperty(OutputKeys.OMIT_XML_DECLARATION, "no");
        trans.setOutputProperty(OutputKeys.ENCODING, "UTF-8");
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        trans.transform(new DOMSource(doc), new StreamResult(baos));
        return baos.toByteArray();
    }

    private static String base64(byte[] data) {
        return Base64.getEncoder().encodeToString(data);
    }

    private static byte[] sha256(byte[] data) throws Exception {
        MessageDigest md = MessageDigest.getInstance("SHA-256");
        return md.digest(data);
    }
}
