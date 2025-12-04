const scanBtn = document.getElementById('scanQR');
const enterCodeBtn = document.getElementById('enterCode');
const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const result = document.getElementById('result');
const codeInputArea = document.getElementById('codeInputArea');
const codeInput = document.getElementById('codeInput');
const validateBtn = document.getElementById('validateCode');
const testCode = document.getElementById('testCode');

let stream = null;
let scanning = false;

// Atualiza o código de teste a cada segundo
setInterval(() => {
    const savedCode = localStorage.getItem('lastGeneratedCode');
    if (savedCode) {
        testCode.textContent = savedCode;
    } else {
        testCode.textContent = '------';
    }
}, 1000);

// Botão "Digitar Código"
enterCodeBtn.addEventListener('click', () => {
    // Esconde vídeo se estiver aberto
    if (scanning) {
        stopScanning();
    }
    
    // Toggle da área de input
    if (codeInputArea.classList.contains('hidden')) {
        codeInputArea.classList.remove('hidden');
        codeInput.focus();
        result.style.display = 'none';
    } else {
        codeInputArea.classList.add('hidden');
        codeInput.value = '';
    }
});

// Validar código digitado
validateBtn.addEventListener('click', () => {
    const enteredCode = codeInput.value.trim();
    const savedCode = localStorage.getItem('lastGeneratedCode');
    
    if (enteredCode.length !== 6) {
        result.textContent = '❌ O código deve ter 6 dígitos!';
        result.style.display = 'block';
        result.style.background = '#f8d7da';
        result.style.color = '#721c24';
        result.style.border = '1px solid #f5c6cb';
        return;
    }
    
    if (enteredCode === savedCode) {
        result.textContent = '✅ Código válido! Presença registrada.';
        result.style.display = 'block';
        result.style.background = '#d4edda';
        result.style.color = '#155724';
        result.style.border = '1px solid #c3e6cb';
        codeInputArea.classList.add('hidden');
        codeInput.value = '';
    } else {
        result.textContent = '❌ Código inválido! Tente novamente.';
        result.style.display = 'block';
        result.style.background = '#f8d7da';
        result.style.color = '#721c24';
        result.style.border = '1px solid #f5c6cb';
    }
});

// Permitir validar com Enter
codeInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        validateBtn.click();
    }
});

scanBtn.addEventListener('click', async () => {
    if (!scanning) {
        // Esconde área de input de código
        codeInputArea.classList.add('hidden');
        codeInput.value = '';
        
        try {
            // Solicita acesso à câmera
            stream = await navigator.mediaDevices.getUserMedia({
                video: { facingMode: 'environment' }
            });
            
            video.srcObject = stream;
            video.setAttribute('playsinline', 'true');
            video.play();
            video.style.display = 'block';
            
            scanning = true;
            scanBtn.textContent = 'Parar Leitura';
            result.style.display = 'none';
            
            requestAnimationFrame(tick);
        } catch (err) {
            console.error('Erro ao acessar câmera:', err);
            alert('Não foi possível acessar a câmera. Verifique as permissões.');
        }
    } else {
        stopScanning();
    }
});

function tick() {
    if (video.readyState === video.HAVE_ENOUGH_DATA && scanning) {
        canvas.height = video.videoHeight;
        canvas.width = video.videoWidth;
        const ctx = canvas.getContext('2d');
        
        if (ctx) {
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const code = jsQR(imageData.data, imageData.width, imageData.height, {
                inversionAttempts: 'dontInvert',
            });
            
            if (code) {
                result.textContent = `QR Code detectado: ${code.data}`;
                result.style.display = 'block';
                stopScanning();
                
                // Abre o link do QR Code
                setTimeout(() => {
                    window.open(code.data, '_blank');
                }, 1000);
                return;
            }
        }
    }
    
    if (scanning) {
        requestAnimationFrame(tick);
    }
}

function stopScanning() {
    scanning = false;
    scanBtn.textContent = 'Ler QR Code';
    
    if (stream) {
        stream.getTracks().forEach(track => track.stop());
        stream = null;
    }
    
    video.style.display = 'none';
}