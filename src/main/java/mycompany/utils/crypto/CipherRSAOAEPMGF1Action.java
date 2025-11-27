package mycompany.utils.crypto;

import lsfusion.base.file.RawFileData;
import lsfusion.server.data.sql.exception.SQLHandledException;
import lsfusion.server.language.ScriptingLogicsModule;
import lsfusion.server.logics.action.controller.context.ExecutionContext;
import lsfusion.server.logics.classes.ValueClass;
import lsfusion.server.logics.property.classes.ClassPropertyInterface;
import lsfusion.server.physics.dev.integration.internal.to.InternalAction;

import javax.crypto.Cipher;
import javax.crypto.spec.OAEPParameterSpec;
import javax.crypto.spec.PSource;
import java.io.ByteArrayInputStream;
import java.nio.charset.StandardCharsets;
import java.security.PublicKey;
import java.security.cert.CertificateException;
import java.security.cert.CertificateFactory;
import java.security.cert.X509Certificate;
import java.security.spec.MGF1ParameterSpec;
import java.sql.SQLException;
import java.util.Base64;

public class CipherRSAOAEPMGF1Action extends InternalAction {

    public CipherRSAOAEPMGF1Action(ScriptingLogicsModule LM, ValueClass... classes) {
        super(LM, classes);
    }

    @Override
    protected void executeInternal(ExecutionContext<ClassPropertyInterface> context) throws SQLException, SQLHandledException {
        RawFileData raw = (RawFileData) getParam(0, context);
        String mdName = (String)getParam(1, context);
        String certificatePem = (String)getParam(2, context);

        try {
            PublicKey publicKey = loadPublicKeyFromBase64(certificatePem);

            OAEPParameterSpec oaep256 = new OAEPParameterSpec(
                    mdName,
                    "MGF1",
                    new MGF1ParameterSpec(mdName),
                    PSource.PSpecified.DEFAULT
            );
            Cipher cipher = Cipher.getInstance("RSA/ECB/OAEPPadding");

            cipher.init(Cipher.ENCRYPT_MODE, publicKey, oaep256);
            byte[] inputBytes = raw != null ? raw.getBytes() : new byte[0];
            byte[] result = cipher.doFinal(inputBytes);

            findProperty("cipherResult[]").change(new RawFileData(result), context);
        } catch (Exception e) {
            throw new RuntimeException("Cipher error", e);
        }

    }

    private static PublicKey loadPublicKeyFromBase64(String certificatePem) throws CertificateException {
        ByteArrayInputStream input = new ByteArrayInputStream(certificatePem.getBytes(StandardCharsets.UTF_8));
        CertificateFactory factory = CertificateFactory.getInstance("X.509");
        X509Certificate certificate = (X509Certificate) factory.generateCertificate(input);
        return certificate.getPublicKey();
    }
}
