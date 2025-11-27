package mycompany.utils.crypto;

import lsfusion.base.file.RawFileData;
import lsfusion.server.data.sql.exception.SQLHandledException;
import lsfusion.server.language.ScriptingLogicsModule;
import lsfusion.server.logics.action.controller.context.ExecutionContext;
import lsfusion.server.logics.classes.ValueClass;
import lsfusion.server.logics.property.classes.ClassPropertyInterface;
import lsfusion.server.physics.dev.integration.internal.to.InternalAction;

import javax.crypto.Cipher;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;
import java.sql.SQLException;
import java.util.Base64;

public class CipherAESCBCPKCS7Action extends InternalAction {

    public CipherAESCBCPKCS7Action(ScriptingLogicsModule LM, ValueClass... classes) {
        super(LM, classes);
    }

    @Override
    protected void executeInternal(ExecutionContext<ClassPropertyInterface> context) throws SQLException, SQLHandledException {
        RawFileData plaintext = (RawFileData) getParam(0, context);
        RawFileData keyRaw = (RawFileData) getParam(1, context);
        String ivB64 = (String) getParam(2, context);

        try {
            byte[] key = keyRaw != null ? keyRaw.getBytes() : new byte[0];
            byte[] iv = Base64.getDecoder().decode(ivB64);

            SecretKeySpec keySpec = new SecretKeySpec(key, "AES");
            IvParameterSpec ivSpec = new IvParameterSpec(iv);

            Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5Padding"); // PKCS5Padding == PKCS#7 for block ciphers
            cipher.init(Cipher.ENCRYPT_MODE, keySpec, ivSpec);

            byte[] input = plaintext != null ? plaintext.getBytes() : new byte[0];
            byte[] encrypted = cipher.doFinal(input);

            findProperty("cipherResult[]").change(new RawFileData(encrypted), context);
        } catch (Exception e) {
            throw new RuntimeException("AES-256-CBC encryption error", e);
        }
    }
}
