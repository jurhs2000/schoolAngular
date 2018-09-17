import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class Encryption {
    CryptoJS = require("crypto-js")
    SHA256 = require("crypto-js/hmac-sha256")
    keyLenght = require("crypto-js/sha256")
    KEY = "secretkey"

    constructor() { }

    getBase64Encoded(rawStr) {
        var wordArray = this.CryptoJS.enc.Utf8.parse(rawStr);
        var result = wordArray.toString(this.CryptoJS.enc.Base64)
        var decrypt = this.CryptoJS.enc.Base64.parse(result) //This is the alternate function to this encryption
        return result
    }

    getSHA256Hex(rawStr, key) {
        var sha = this.SHA256(rawStr, key)
        var result = sha.toString(this.CryptoJS.enc.Hex)
        return result
    }

    getSHA256Base64(rawStr, key) {
        var sha = this.SHA256(rawStr, key)
        var result = sha.toString(this.CryptoJS.enc.Base64)
        return result
    }

    encryptPassword(rawStr, key) {
        var firstEncryption = this.getSHA256Base64(rawStr, key)
        var secondEncryption = this.getSHA256Hex(firstEncryption, firstEncryption)
        return secondEncryption
    }

    encrypt(rawStr) {
        var key = this.keyLenght(this.KEY);
        var cipherData = this.CryptoJS.AES.encrypt(rawStr, key, { iv: key })
        var result = (cipherData.ciphertext).toString(this.CryptoJS.enc.Base64)
        return result
    }

    decrypt(rawStr) {
        var key = this.keyLenght(this.KEY)
        var result = this.CryptoJS.AES.decrypt(rawStr, key, { iv: key })
        result = result.toString(this.CryptoJS.enc.Utf8)
        return result
    }

}