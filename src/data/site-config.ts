import avatar from '../assets/images/avatar.jpg';
import hero from '../assets/images/hero.jpg';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://temsuo.github.io/joaquimedina.github.io/',
    base: '/joaquimedina.github.io/',
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
            text: 'Projectos',
            href: '/projects'
        },
        
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Terms',
            href: '/terms'
        },
        {
            text: 'Download theme',
            href: 'https://github.com/JustGoodUI/dante-astro-theme'
        }
    ],
    socialLinks: [
        {
            text: 'Dribbble',
            href: 'https://dribbble.com/'
        },
        {
            text: 'Instagram',
            href: 'https://instagram.com/'
        },
        {
            text: 'X/Twitter',
            href: 'https://twitter.com/'
        }
    ],
    hero: {
        title: 'Psicología y Artes Escénicas',
        text: "Hola soy **Joaquín Medina**. Psicólogo especializado en el diseño e implementación de programas de intervención psicosocial través del desarrollo de las artes escénicas.\nEstos programas de arteterapia tienen un gran impacto mejorando síntomas como la depresión y la ansiedad mediante el desarrollo del conocimiento y el control físico, mental y emocional propios. \n\n Los programas suelen acompañarse de una producción audiovisual propia y van dirigidos a adultos mayores y/o personas con discapacidad.",
        image: {
            src: hero,
            alt: 'A person sitting at a desk in front of a computer'
        },
        actions: [
            {
                text: 'Contacto',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        enabled: true,
        title: 'Subscribe to Dante Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        form: {
            action: '#'
        }
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
