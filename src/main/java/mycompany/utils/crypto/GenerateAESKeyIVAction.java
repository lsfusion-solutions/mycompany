package mycompany.utils.crypto;

import lsfusion.server.data.sql.exception.SQLHandledException;
import lsfusion.server.language.ScriptingLogicsModule;
import lsfusion.server.logics.action.controller.context.ExecutionContext;
import lsfusion.server.logics.classes.ValueClass;
import lsfusion.server.logics.property.classes.ClassPropertyInterface;
import lsfusion.server.physics.dev.integration.internal.to.InternalAction;

import javax.crypto.KeyGenerator;
import javax.crypto.SecretKey;
import java.security.SecureRandom;
import java.sql.SQLException;
import lsfusion.base.file.RawFileData;
import java.util.Base64;

public class GenerateAESKeyIVAction extends InternalAction {

    public GenerateAESKeyIVAction(ScriptingLogicsModule LM, ValueClass... classes) {
        super(LM, classes);
    }

    @Override
    protected void executeInternal(ExecutionContext<ClassPropertyInterface> context) throws SQLException, SQLHandledException {
        try {
            // AES-256 key (32 bytes)
            KeyGenerator keyGen = KeyGenerator.getInstance("AES");
            keyGen.init(256);
            SecretKey key = keyGen.generateKey();
            byte[] keyBytes = key.getEncoded();

            // IV for CBC must be 16 bytes
            byte[] iv = new byte[16];
            new SecureRandom().nextBytes(iv);

            String ivB64 = Base64.getEncoder().encodeToString(iv);

            findProperty("generatedAESKey[]").change(new RawFileData(keyBytes), context);
            findProperty("generatedIV[]").change(ivB64, context);
        } catch (Exception e) {
            throw new RuntimeException("Generate AES key/iv error", e);
        }
    }
}
