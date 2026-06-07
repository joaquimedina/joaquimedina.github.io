(function () {
    const root = document.documentElement;

    function getStoredTheme() {
        try {
            return localStorage.getItem('theme');
        } catch {
            return null;
        }
    }

    function storeTheme(theme) {
        try {
            localStorage.setItem('theme', theme);
        } catch {}
    }

    function getSystemTheme() {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        return 'light';
    }

    function getActiveTheme() {
        const stored = getStoredTheme();
        return stored || getSystemTheme();
    }

    function applyTheme(theme) {
        const isDark = theme === 'dark';
        root.classList.toggle('dark', isDark);
        updateThemeToggle(isDark);
    }

    function updateThemeToggle(isDark) {
        const button = document.getElementById('theme-toggle');
        if (!button) return;

        button.setAttribute('aria-pressed', String(isDark));
        button.setAttribute('aria-label', isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
    }

    function setupThemeToggle() {
        const button = document.getElementById('theme-toggle');
        if (!button) return;

        updateThemeToggle(root.classList.contains('dark'));

        button.onclick = () => {
            const isDark = root.classList.toggle('dark');
            const theme = isDark ? 'dark' : 'light';
            storeTheme(theme);
            updateThemeToggle(isDark);
        };
    }

    // Set initial theme
    applyTheme(getActiveTheme());

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setupThemeToggle, { once: true });
    } else {
        setupThemeToggle();
    }
})();
