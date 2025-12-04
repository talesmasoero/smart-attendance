const generateBtn = document.getElementById('generateQR');
const qrcodeDiv = document.getElementById('qrcode');
const codeDisplay = document.getElementById('codeDisplay');

let qrCodeGenerated = false;
let intervalId = null;

function generateNewQRCode() {
    // Limpa o conteúdo anterior
    qrcodeDiv.innerHTML = '';
    
    // Gera um código único de 6 dígitos
    const randomId = Math.floor(Math.random() * 1000000);
    const code = String(randomId).padStart(6, '0');
    const uniqueUrl = `https://www.google.com?id=${code}`;
    
    // Salva o código no localStorage
    localStorage.setItem('lastGeneratedCode', code);
    
    // Gera o QR Code com URL única
    new QRCode(qrcodeDiv, {
        text: uniqueUrl,
        width: 256,
        height: 256,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H
    });
    
    // Exibe o código abaixo do QR Code
    codeDisplay.textContent = `Código: ${code}`;
    codeDisplay.style.display = 'block';
}

generateBtn.addEventListener('click', () => {
    if (!qrCodeGenerated) {
        // Gera o primeiro QR Code
        generateNewQRCode();
        
        // Mostra o QR Code
        qrcodeDiv.classList.remove('hidden');
        
        // Muda o texto do botão
        generateBtn.textContent = 'Parar Geração';
        
        // Inicia a geração automática a cada 10 segundos
        intervalId = setInterval(generateNewQRCode, 10000);
        
        qrCodeGenerated = true;
    } else {
        // Para a geração automática
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
        }
        
        // Esconde o QR Code e o código
        qrcodeDiv.classList.add('hidden');
        codeDisplay.style.display = 'none';
        
        // Reseta o botão
        generateBtn.textContent = 'Gerar QR Code';
        
        qrCodeGenerated = false;
    }
});