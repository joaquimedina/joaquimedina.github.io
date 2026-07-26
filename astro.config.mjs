import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

const legacySitemapPaths = ['/about/', '/contact/', '/terms/', '/projects/'];

export default defineConfig({
    site: 'https://joaquimedina.github.io/',

    vite: {
        plugins: [tailwindcss()]
    },

    integrations: [
        mdx(),
        sitemap({
            filter: (page) => {
                const { pathname } = new URL(page);
                return !legacySitemapPaths.some((legacyPath) => pathname === legacyPath || pathname.startsWith(legacyPath));
            }
        })
    ]
});
