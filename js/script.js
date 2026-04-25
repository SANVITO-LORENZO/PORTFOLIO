document.addEventListener('DOMContentLoaded', () => {
    // Elementi
    const langToggle = document.getElementById('lang-toggle');
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    // --- 1. GESTIONE TEMA ---
    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    }

    themeToggle?.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        const isLight = document.body.classList.contains('light-mode');
        themeIcon.classList.replace(isLight ? 'fa-moon' : 'fa-sun', isLight ? 'fa-sun' : 'fa-moon');
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });

    // --- 2. GESTIONE LINGUA ---
    const savedLang = localStorage.getItem('language');
    if (savedLang === 'en') {
        document.body.classList.add('english-mode');
        if (langToggle) langToggle.checked = true;
    }

    langToggle?.addEventListener('change', () => {
        const isEn = langToggle.checked;
        document.body.classList.toggle('english-mode', isEn);
        localStorage.setItem('language', isEn ? 'en' : 'it');
    });

    // --- 3. MENU MOBILE ---
    menuToggle?.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
    });

    // Chiudi menu se clicchi un link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuToggle.querySelector('i').classList.add('fa-bars');
            menuToggle.querySelector('i').classList.remove('fa-xmark');
        });
    });
});