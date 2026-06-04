import avatar from '../assets/images/avatar.jpg';
import hero from '../assets/images/hero.webp';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://joaquimedina.github.io/',
    author: 'Joaquín Medina',
    locale: 'es_ES',
    keywords: [
        'Joaquín Medina',
        'psicología',
        'intervención psicosocial',
        'envejecimiento saludable',
        'artes escénicas aplicadas',
        'creación colectiva',
        'participación comunitaria',
        'producción audiovisual',
        'discapacidad e inclusión social',
        'Compañía en Escena'
    ],

    avatar: {
        src: avatar,
        alt: 'Joaquín Medina'
    },
    title: 'Joaquín Medina',
    subtitle: 'Envejecimiento Activo y Saludable',
    description:
        'Portfolio profesional de Joaquín Medina sobre psicología, intervención psicosocial, envejecimiento saludable, artes escénicas y creación audiovisual.',
    image: {
        src: '/portfolio-preview.jpg',
        alt: 'Portfolio de Joaquín Medina sobre psicología, intervención social, artes escénicas y creación audiovisual'
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
        }
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
    socialLinks: [],
    hero: {
        title: 'Psicología, artes escénicas e intervención psicosocial',
        image: {
            src: hero,
            alt: 'Joaquín Medina en un entorno de trabajo creativo'
        }
    },
    projectsPerPage: 8
};

export default siteConfig;
