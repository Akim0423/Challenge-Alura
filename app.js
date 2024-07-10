function encrypt() {
    let text = document.getElementById('inputText').value;
    let encryptedText = text.replace(/e/g, 'enter')
                            .replace(/i/g, 'imes')
                            .replace(/a/g, 'ai')
                            .replace(/o/g, 'ober')
                            .replace(/u/g, 'ufat');
    document.getElementById('resultText').innerText = encryptedText;
}

function decrypt() {
    let text = document.getElementById('inputText').value;
    let decryptedText = text.replace(/enter/g, 'e')
                            .replace(/imes/g, 'i')
                            .replace(/ai/g, 'a')
                            .replace(/ober/g, 'o')
                            .replace(/ufat/g, 'u');
    document.getElementById('resultText').innerText = decryptedText;
}

function copyText() {
    let textToCopy = document.getElementById('resultText').innerText;
    navigator.clipboard.writeText(textToCopy).then(() => {
        alert('Texto copiado al portapapeles');
    }).catch(err => {
        alert('Hubo un problema al copiar el texto', err);
    });
}