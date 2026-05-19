import avatar from '../assets/images/avatar.jpg';
import hero from '../assets/images/hero.jpg';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://temsuo.github.io/',
    
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
        text: "Hola, soy Joaquín Medina, psicólogo especializado en intervención psicosocial, arteterapia y proyectos comunitarios basados en las artes escénicas y la creación audiovisual. \n\nDesarrollo programas orientados a mejorar el bienestar emocional, la participación social y la calidad de vida de adultos mayores y personas con discapacidad mediante procesos creativos, trabajo grupal y expresión artística... <span style='font-size:0.9rem;'>pincha sobre cada proyecto para ver los vídeos y saber mas...</span>",
        image: {
            src: hero,
            alt: 'A person sitting at a desk in front of a computer'
        },
        
    },
    
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
