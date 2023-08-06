function encrypt() {
    var inputText = document.getElementById('inputText').value;
    var encryptionKey = document.getElementById('encryptionKey').value;
    var encryptedText = CryptoJS.AES.encrypt(inputText, encryptionKey).toString();
    document.getElementById('encryptedText').value = encryptedText;
}
function decryptInput() {
    var encryptedInput = document.getElementById('encryptedInput').value;
    var decryptionKey = document.getElementById('decryptionKey').value;
    var decryptedBytes = CryptoJS.AES.decrypt(encryptedInput, decryptionKey);
    var decryptedText = decryptedBytes.toString(CryptoJS.enc.Utf8);
    document.getElementById('decryptedInput').value = decryptedText;
}