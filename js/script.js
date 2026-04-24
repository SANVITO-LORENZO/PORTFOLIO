document.addEventListener('DOMContentLoaded', () => {
    const langToggle = document.getElementById('lang-toggle');
    
    // Funzione per cambiare il file del CV in base alla lingua
    const updateCVLink = (isEnglish) => {
        const cvLinks = document.querySelectorAll('.cv-link'); // Seleziona tutti i link CV nella pagina
        cvLinks.forEach(link => {
            let currentHref = link.getAttribute('href');
            if (isEnglish) {
                // Se è inglese e non ha ancora "-en", lo aggiunge
                if (!currentHref.includes('-en.pdf')) {
                    link.setAttribute('href', currentHref.replace('.pdf', '-en.pdf'));
                }
            } else {
                // Se è italiano e ha "-en", lo rimuove
                if (currentHref.includes('-en.pdf')) {
                    link.setAttribute('href', currentHref.replace('-en.pdf', '.pdf'));
                }
            }
        });
    };

    // 1. Controllo iniziale al caricamento della pagina
    const savedLang = localStorage.getItem('language');
    if (savedLang === 'en') {
        document.body.classList.add('english-mode');
        if (langToggle) langToggle.checked = true;
        updateCVLink(true);
    }

    // 2. Gestione del click sull'interruttore
    if (langToggle) {
        langToggle.addEventListener('change', () => {
            const isEn = langToggle.checked;
            if (isEn) {
                document.body.classList.add('english-mode');
                localStorage.setItem('language', 'en');
            } else {
                document.body.classList.remove('english-mode');
                localStorage.setItem('language', 'it');
            }
            updateCVLink(isEn);
        });
    }
});