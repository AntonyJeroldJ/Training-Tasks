const CryptoJS = require("crypto-js");

//Encryption
exports.encrypt = async (data) => {
    try {
        return await CryptoJS.AES.encrypt(data, process.env.SECRET_KEY).toString();
    } catch (error) {
        throw error;
    }
}

//Decryption
exports.decrypt = async (data) => {
    try {
        const bytes = await CryptoJS.AES.decrypt(data, process.env.SECRET_KEY);
        const password = await bytes.toString(CryptoJS.enc.Utf8);
        return password;
    } catch (error) {
        throw error;
    }
}