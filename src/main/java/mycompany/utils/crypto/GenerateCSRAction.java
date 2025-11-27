package mycompany.utils.crypto;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import lsfusion.base.file.RawFileData;
import lsfusion.server.data.sql.exception.SQLHandledException;
import lsfusion.server.language.ScriptingErrorLog;
import lsfusion.server.language.ScriptingLogicsModule;
import lsfusion.server.logics.action.controller.context.ExecutionContext;
import lsfusion.server.logics.classes.ValueClass;
import lsfusion.server.logics.property.classes.ClassPropertyInterface;
import lsfusion.server.physics.dev.integration.internal.to.InternalAction;
import org.apache.commons.lang3.StringUtils;
import org.bouncycastle.asn1.ASN1Encoding;
import org.bouncycastle.asn1.x500.X500Name;
import org.bouncycastle.asn1.x500.X500NameBuilder;
import org.bouncycastle.asn1.x500.style.BCStyle;
import org.bouncycastle.operator.ContentSigner;
import org.bouncycastle.operator.OperatorCreationException;
import org.bouncycastle.operator.jcajce.JcaContentSignerBuilder;
import org.bouncycastle.pkcs.PKCS10CertificationRequest;
import org.bouncycastle.pkcs.jcajce.JcaPKCS10CertificationRequestBuilder;

import java.io.IOException;
import java.security.InvalidAlgorithmParameterException;
import java.security.KeyPair;
import java.security.KeyPairGenerator;
import java.security.NoSuchAlgorithmException;
import java.security.spec.ECGenParameterSpec;
import java.sql.SQLException;
import java.util.List;
import java.util.Objects;


public class GenerateCSRAction extends InternalAction {

    public GenerateCSRAction(ScriptingLogicsModule LM, ValueClass... classes) {
        super(LM, classes);
    }

    @Override
    protected void executeInternal(ExecutionContext<ClassPropertyInterface> context) throws SQLException, SQLHandledException {
        String certificateParams = (String)getParam(0, context);

        try {
            KeyPairGenerator kpg = KeyPairGenerator.getInstance("EC");
            kpg.initialize(new ECGenParameterSpec("secp256r1"));
            KeyPair keyPair = kpg.generateKeyPair();

            JcaPKCS10CertificationRequestBuilder csrBuilder = new JcaPKCS10CertificationRequestBuilder(getX500Name(certificateParams), keyPair.getPublic());

            ContentSigner signer = new JcaContentSignerBuilder("SHA256withECDSA")
                    .build(keyPair.getPrivate());

            PKCS10CertificationRequest csrRequest = csrBuilder.build(signer);

            byte[] csr = csrRequest.toASN1Structure().getEncoded(ASN1Encoding.DER);

            findProperty("generatedCSR[]").change(new RawFileData(csr), context);
            findProperty("generatedPrivateKey[]").change(new RawFileData(keyPair.getPrivate().getEncoded()), context);
        } catch (IOException | OperatorCreationException | InvalidAlgorithmParameterException |
                 NoSuchAlgorithmException | ScriptingErrorLog.SemanticErrorException e) {
            throw new RuntimeException("Generate CSR error", e);
        }
    }

    private X500Name getX500Name(String certificateParams) throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        JsonNode node = mapper.readTree(certificateParams);

        return new CertificateBuilders()
                .withCommonName(node.path("commonName").asText(""))
                .withSurname(node.path("surname").asText(""))
                .withOrganizationName(node.path("organizationName").asText(""))
                .withOrganizationIdentifier(node.path("organizationIdentifier").asText(""))
                .withCountryCode(node.path("countryName").asText(""))
                .withSerialNumber(node.path("serialNumber").asText(""))
                .withUniqueIdentifier(node.path("uniqueIdentifier").asText(""))
                .withGivenName(node.path("givenName").asText(""))
                .build();
    }

    public class CertificateBuilders {
        X500NameBuilder nameBuilder = new X500NameBuilder(BCStyle.INSTANCE);

        public CertificateBuilders withOrganizationName(String organizationName) {
            if (StringUtils.isNotBlank(organizationName)) {
                nameBuilder.addRDN(BCStyle.O, organizationName);
            }
            return this;
        }

        public CertificateBuilders withOrganizationIdentifier(String organizationIdentifier) {
            if (StringUtils.isNotBlank(organizationIdentifier)) {
                nameBuilder.addRDN(BCStyle.ORGANIZATION_IDENTIFIER, organizationIdentifier);
            }
            return this;
        }

        public CertificateBuilders withCommonName(String commonName) {
            if (StringUtils.isNotBlank(commonName)) {
                nameBuilder.addRDN(BCStyle.CN, commonName);
            }
            return this;
        }

        public CertificateBuilders withSerialNumber(String serialNumber) {
            if (StringUtils.isNotBlank(serialNumber)) {
                nameBuilder.addRDN(BCStyle.SERIALNUMBER, serialNumber);
            }
            return this;
        }

        public CertificateBuilders withGivenName(String givenName) {
            if (StringUtils.isNotBlank(givenName)) {
                nameBuilder.addRDN(BCStyle.GIVENNAME, givenName);
            }
            return this;
        }

        public CertificateBuilders withGivenNames(List<String> givenNames) {
            if (Objects.nonNull(givenNames)) {
                givenNames.stream()
                        .filter(StringUtils::isNotBlank)
                        .forEach(z -> nameBuilder.addRDN(BCStyle.GIVENNAME, z));
            }
            return this;
        }

        public CertificateBuilders withSurname(String surname) {
            if (StringUtils.isNotBlank(surname)) {
                nameBuilder.addRDN(BCStyle.SURNAME, surname);
            }
            return this;
        }

        public CertificateBuilders withUniqueIdentifier(String uniqueIdentifier) {
            if (StringUtils.isNotBlank(uniqueIdentifier)) {
                nameBuilder.addRDN(BCStyle.UNIQUE_IDENTIFIER, uniqueIdentifier);
            }
            return this;
        }

        public CertificateBuilders withCountryCode(String countryCode) {
            if (StringUtils.isNotBlank(countryCode)) {
                nameBuilder.addRDN(BCStyle.C, countryCode);
            }
            return this;
        }

        public X500Name build() {
            return nameBuilder.build();
        }
    }

}
