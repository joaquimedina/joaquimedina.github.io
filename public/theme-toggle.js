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
    }

    function setupThemeToggle() {
        const button = document.getElementById('theme-toggle');
        if (!button) return;

        button.onclick = () => {
            const isDark = root.classList.toggle('dark');
            const theme = isDark ? 'dark' : 'light';
            storeTheme(theme);
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
