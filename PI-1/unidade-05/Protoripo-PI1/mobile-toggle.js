// Verifica se já existe uma preferência salva
let isMobileView = localStorage.getItem('mobileView') === 'true';

// Aplica a visualização ao carregar a página
if (isMobileView) {
    document.body.classList.add('mobile-view');
}

function toggleMobileView() {
    isMobileView = !isMobileView;
    
    if (isMobileView) {
        document.body.classList.add('mobile-view');
        localStorage.setItem('mobileView', 'true');
    } else {
        document.body.classList.remove('mobile-view');
        localStorage.setItem('mobileView', 'false');
    }
}