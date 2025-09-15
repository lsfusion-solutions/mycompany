function getCryptoProCertificates(controller, resolve, reject) {
    cadesplugin.async_spawn(function* (args) {
        var certificates = [];
        try {
            var oStore = yield cadesplugin.CreateObjectAsync("CAdESCOM.Store");
            yield oStore.Open(
                cadesplugin.CADESCOM_CONTAINER_STORE,
                cadesplugin.CAPICOM_MY_STORE,
                cadesplugin.CAPICOM_STORE_OPEN_MAXIMUM_ALLOWED);

            var oCertificates = yield oStore.Certificates;
            var count = yield oCertificates.Count;
            for (i = 1; i <= count; i++) {
                var cert = yield oCertificates.Item(i);
                    new Date(yield cert.ValidToDate),
                    new String(yield cert.SerialNumber),
                    new String(yield cert.IssuerName),
                    new String(yield cert.Thumbprint)
                certificates.push( { serialNumber : new String(yield cert.SerialNumber),
                                     fromDate : new Date(yield cert.ValidFromDate),
                                     toDate : new Date(yield cert.ValidToDate),
                                     subjectName : new String(yield cert.SubjectName),
                                     issuerName : new String(yield cert.IssuerName),
                                     thumbprint : new String(yield cert.Thumbprint) });
            }
            return args[0](certificates)
        } catch (err) {
            args[1](cadesplugin.getLastError(err));
        }
    }, resolve, function(err) {
        reject(err);
    });
}

function signCryptoPro(dataToSign, certThumbprint, controller, resolve, reject) {
    cadesplugin.async_spawn(function* (args) {
        var oStore = yield cadesplugin.CreateObjectAsync("CAdESCOM.Store");
        yield oStore.Open(cadesplugin.CAPICOM_CURRENT_USER_STORE, cadesplugin.CAPICOM_MY_STORE,
            cadesplugin.CAPICOM_STORE_OPEN_MAXIMUM_ALLOWED);

        var oStoreCerts = yield oStore.Certificates;
        var oCertificates = yield oStoreCerts.Find(
            cadesplugin.CAPICOM_CERTIFICATE_FIND_SHA1_HASH, certThumbprint);
        var certsCount = yield oCertificates.Count;
        if (certsCount === 0) {
            args[1]("Certificate not found: " + certThumbprint);
        }
        var oCertificate = yield oCertificates.Item(1);
        var oSigner = yield cadesplugin.CreateObjectAsync("CAdESCOM.CPSigner");
        yield oSigner.propset_Certificate(oCertificate);
        yield oSigner.propset_CheckCertificate(true);
        yield oSigner.propset_TSAAddress("http://cryptopro.ru/tsp/");

        var oSignedData = yield cadesplugin.CreateObjectAsync("CAdESCOM.CadesSignedData");
        yield oSignedData.propset_ContentEncoding(cadesplugin.CADESCOM_BASE64_TO_BINARY); //
        yield oSignedData.propset_Content(dataToSign);

        try {
            var sSignedMessage = yield oSignedData.SignCades(oSigner, cadesplugin.CADESCOM_CADES_BES); //cadesplugin.CADESCOM_CADES_X_LONG_TYPE_1);
        }
        catch (e) {
            args[1](cadesplugin.getLastError(e));
        }
        yield oStore.Close();
        return args[0](sSignedMessage);
    }, resolve, reject);
}