import avatar from '../assets/images/avatar.jpg';
import hero from '../assets/images/hero.jpg';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://joaquimedina.github.io/',
    
    avatar: {
        src: avatar,
        alt: 'Ethan Donovan'
    },
    title: 'Joaquín Medina',
    subtitle: 'Salud Mental · Arteterapia · Envejecimiento Saludable',
    description: 'Portfolio Joaquín Medina, psicología y arteterapia',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: 'Inicio',
            href: '/'
        },
                {
            text: 'Compañía en Escena',
            href: '/escena'
        },
        {
            text: 'Proyectos',
            href: '/projects'
        },
        {
            text: 'Contacto',
            href: '/contact'
        },
    ],
    footerNavLinks: [
        {
            text: 'Sobre mí',
            href: '/about'
        },
        {
            text: 'Contacto',
            href: '/contact'
        },
        {
            text: 'Términos',
            href: '/terms'
        }
        
    ],
    socialLinks: [
        
    ],
    hero: {
        title: 'Psicología y Artes Escénicas',
        text: "Psicólogo y profesional multidisciplinar especializado en intervención comunitaria, participación social y proyectos culturales con impacto social. Combino psicología, artes escénicas, creación audiovisual y tecnologías digitales para diseñar iniciativas que favorecen el bienestar, la inclusión, el envejecimiento activo y la construcción de comunidades más humanas y participativas. [*Ver programa*](/escena)",
        image: {
            src: hero,
            alt: 'A person sitting at a desk in front of a computer'
        },
        
    },
    
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
