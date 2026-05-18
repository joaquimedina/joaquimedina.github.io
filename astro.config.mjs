import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://temsuo.github.io/joaquimedina.github.io/',
    base: '/joaquimedina.github.io/',
    vite: {
        plugins: [tailwindcss()]
    },

    integrations: [mdx(), sitemap()]
});
