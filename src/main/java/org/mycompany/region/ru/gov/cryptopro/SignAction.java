package org.mycompany.region.ru.gov.cryptopro;

import com.google.common.base.Throwables;
import lsfusion.base.file.RawFileData;
import lsfusion.server.data.sql.exception.SQLHandledException;
import lsfusion.server.language.ScriptingErrorLog;
import lsfusion.server.language.ScriptingLogicsModule;
import lsfusion.server.logics.action.controller.context.ExecutionContext;
import lsfusion.server.logics.classes.ValueClass;
import lsfusion.server.logics.property.classes.ClassPropertyInterface;
import lsfusion.server.physics.dev.integration.internal.to.InternalAction;

import java.sql.SQLException;
import java.util.Iterator;

public class SignAction extends InternalAction {
    private final ClassPropertyInterface fileInterface;
    private final ClassPropertyInterface detachedInterface;
    private final ClassPropertyInterface storeFileInterface;
    private final ClassPropertyInterface storePasswordInterface;
    private final ClassPropertyInterface aliasInterface;
    private final ClassPropertyInterface passwordInterface;

    public SignAction(ScriptingLogicsModule LM, ValueClass... classes) {
        super(LM, classes);

        Iterator<ClassPropertyInterface> i = getOrderInterfaces().iterator();
        fileInterface = i.next();
        detachedInterface = i.next();
        storeFileInterface = i.next();
        storePasswordInterface = i.next();
        aliasInterface = i.next();
        passwordInterface = i.next();
    }

    @Override
    protected void executeInternal(ExecutionContext<ClassPropertyInterface> context) throws SQLException, SQLHandledException {

        try {
            RawFileData inputFile = (RawFileData) context.getKeyValue(fileInterface).getValue();
            boolean detached = context.getKeyValue(detachedInterface).getValue() != null;

            String storeFile = (String) context.getKeyValue(storeFileInterface).getValue();
            String storePassword = (String) context.getKeyValue(storePasswordInterface).getValue();

            String alias = (String) context.getKeyValue(aliasInterface).getValue();
            String password = (String) context.getKeyValue(passwordInterface).getValue();

            byte[] signature = CryptoPro.sign(inputFile.getBytes(), detached,
                                    storeFile, storePassword == null ? null : storePassword.toCharArray(),
                                    alias, password == null ? null : password.toCharArray());

//            try {
//                FileOutputStream fos = new FileOutputStream(new File("D:\\Req\\sgn.txt"));
//                fos.write(signature);
//                fos.close();
//            } catch (IOException e) {
//                e.printStackTrace();
//            }

            findProperty("signature[]").change(new RawFileData(signature), context);

        } catch (ScriptingErrorLog.SemanticErrorException e) {
            throw Throwables.propagate(e);
        }
    }

//    public static PrivateKey loadConfiguration(String storeType, String storeFile,
//                                               char[] storePassword, String alias, char[] password,
//                                               List<Certificate> certs,
//                                               List<X509CertificateHolder> chain) throws KeyStoreException, NoSuchAlgorithmException, CertificateException,
//            IOException, UnrecoverableKeyException {
//
//        Security.addProvider(new JCP()); // провайдер JCP
//        Security.addProvider(new RevCheck());
//        Security.addProvider(new CryptoProvider());// провайдер шифрования JCryptoP
//
//        System.setProperty("com.sun.security.enableCRLDP", "true");
//        System.setProperty("ocsp.enable", "true");
//
//        KeyStore keyStore = KeyStore.getInstance(storeType);
//        keyStore.load(storeFile == null || storeFile.isEmpty() ? null : new FileInputStream(storeFile),
//                storePassword);
//
//        PrivateKey privateKey =
//                (PrivateKey) keyStore.getKey(alias, password);
//
//        // Получаем цепочку сертификатов.
//        certs.addAll(Arrays.asList(keyStore.getCertificateChain(alias)));
//
//        certs.forEach(cert -> {
//            try {
//                chain.add(new X509CertificateHolder(cert.getEncoded()));
//            } catch (IOException | CertificateEncodingException e) {
//                throw Throwables.propagate(e);
//            }
//        });
//
//        return privateKey;
//    }
//
//    public static byte[] sign(byte[] data, boolean detached, String storeFile, char[] storePassword, String alias, char[] password) {
//        try {
//            List<Certificate> certs = new ArrayList<Certificate>();
//            List<X509CertificateHolder> chain = new ArrayList<X509CertificateHolder>();
//            PrivateKey privateKey = loadConfiguration(JCP.HD_STORE_NAME, storeFile, storePassword, alias, password, certs, chain);
//
//            ByteArrayOutputStream out = new ByteArrayOutputStream();
//
//            CAdESSignature signature = new CAdESSignature(detached);
//            signature.setCertificateStore(new CollectionStore(chain));
//            final Hashtable table = new Hashtable();
//            Attribute attr = new Attribute(CMSAttributes.signingTime, new DERSet(new Time(new Date()))); // устанавливаем время подписи
//            table.put(attr.getAttrType(), attr);
//            AttributeTable attrTable = new AttributeTable(table);
//
//            signature.addSigner(JCP.PROVIDER_NAME,
//                    JCP.GOST_DIGEST_2012_256_OID,
//                    JCP.GOST_PARAMS_EXC_2012_256_KEY_OID,
//                    privateKey,
//                    certs,
//                    CAdESType.CAdES_BES,
//                    null,
//                    false,
//                    attrTable,
//                    null);
//            signature.open(out);
//            signature.update(data);
//            signature.close();
//            return out.toByteArray();
//
//        } catch (IOException | CertificateException | NoSuchAlgorithmException | UnrecoverableKeyException | CAdESException | KeyStoreException e) {
//            throw Throwables.propagate(e);
//        }
//    }

    @Override
    protected boolean allowNulls() {
        return true;
    }
}
