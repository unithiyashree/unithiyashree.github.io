document.addEventListener('DOMContentLoaded', function () {

    // Back to Top
    var backToTop = document.getElementById('backToTop');
    if (backToTop) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });
        backToTop.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Mobile nav toggle
    var navToggle = document.querySelector('.nav-toggle');
    var navLinks = document.querySelector('.nav-links');
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function () {
            navLinks.classList.toggle('open');
        });
    }

    // Dark mode toggle
    var themeToggle = document.querySelector('.theme-toggle');
    var icon = themeToggle ? themeToggle.querySelector('i') : null;

    function applyTheme(dark) {
        if (dark) {
            document.documentElement.classList.add('dark');
            if (icon) { icon.className = 'fas fa-sun'; }
        } else {
            document.documentElement.classList.remove('dark');
            if (icon) { icon.className = 'fas fa-moon'; }
        }
    }

    // Load saved preference or default to light
    var saved = localStorage.getItem('theme');
    applyTheme(saved === 'dark');

    if (themeToggle) {
        themeToggle.addEventListener('click', function () {
            var isDark = document.documentElement.classList.toggle('dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            if (icon) {
                icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
            }
        });
    }
});
