# Portfolio de Joaquín Medina

Guía de mantenimiento personal del portfolio.

Esta documentación no está pensada para visitantes, sino para recordar dónde tocar cada cosa cuando quieras ajustar textos, imágenes, colores, SEO, proyectos o detalles técnicos sin tener que reconstruir el mapa de la web desde cero.

## Web

URL principal:

```txt
https://joaquimedina.github.io/
```

En desarrollo local:

```bash
npm run dev
```

Normalmente Astro abre la web en:

```txt
http://localhost:4321/
```

## Comandos útiles

Instalar dependencias después de clonar o si falta `node_modules`:

```bash
npm ci
```

Abrir la web en local:

```bash
npm run dev
```

Comprobar que todo está bien antes de publicar:

```bash
npm run verify
```

`npm run verify` hace tres cosas:

```bash
npm run format:check
npm run check
npm run build
```

Si falla por formato, se puede arreglar con:

```bash
npm run format
```

## Estructura importante

```txt
src/content/home/          Textos de la página de inicio
src/content/pages/         Páginas fijas: contacto, escena, sobre mí, términos
src/content/projects/      Proyectos del portfolio
src/assets/images/         Imágenes usadas por Astro
public/                    Archivos públicos directos: favicon, SEO preview, scripts
src/data/site-config.ts    Configuración general: SEO, navegación, hero, paginación
src/styles/global.css      Colores, fuentes y estilos globales
src/components/            Componentes reutilizables
src/pages/                 Rutas reales de la web
```

## Dónde cambiar textos

Página de inicio, bloque principal inferior:

```txt
src/content/home/body.md
```

Texto del hero de inicio:

```txt
src/data/site-config.ts
```

Busca:

```ts
hero: {
  title: '...';
}
```

Página "Compañía en Escena":

```txt
src/content/pages/escena.md
```

Página "Sobre mí":

```txt
src/content/pages/about.md
```

Ruta pública:

```txt
/joaquimedina
```

Página de contacto:

```txt
src/content/pages/contact.md
```

Ruta pública:

```txt
/contacto
```

Página de términos:

```txt
src/content/pages/terms.md
```

Ruta pública:

```txt
/terminos
```

## Proyectos

Los proyectos están aquí:

```txt
src/content/projects/
```

Cada proyecto es un archivo `.mdx`.

Ejemplos:

```txt
src/content/projects/alcontar.mdx
src/content/projects/fantasia.mdx
src/content/projects/rapsodia.mdx
```

La parte superior de cada proyecto tiene metadatos entre `---`. Esa zona controla cosas como:

```yaml
title: ...
description: ...
date: ...
image: ...
```

Importante:

- `title` es el título del proyecto.
- `description` aparece en el feed de proyectos.
- `image` suele ser la imagen de portada del proyecto.
- El contenido que va debajo del segundo `---` es el texto de la página del proyecto.

El feed de proyectos está en:

```txt
src/pages/proyectos/[...page].astro
```

El número de proyectos por página se cambia en:

```txt
src/data/site-config.ts
```

Busca:

```ts
projectsPerPage: 8;
```

## Imágenes

Las imágenes internas de la web deben ir normalmente en:

```txt
src/assets/images/
```

Las imágenes SEO o públicas directas van en:

```txt
public/
```

Ejemplos actuales:

```txt
public/favicon.svg
public/portfolio-preview.jpg
public/portfolio-preview.png
```

### Cambiar la imagen hero principal

Archivo actual:

```txt
src/assets/images/hero.webp
```

Configuración:

```txt
src/data/site-config.ts
```

Busca:

```ts
import hero from '../assets/images/hero.webp';
```

Y también:

```ts
hero: {
    image: {
        src: hero,
        alt: '...'
    }
}
```

### Cambiar imagen de contacto

Contenido:

```txt
src/content/pages/contact.md
```

Imagen habitual:

```txt
src/assets/images/logo-joaquin-medina-contacto.svg
```

### Cambiar imágenes de "Sobre mí"

Contenido:

```txt
src/content/pages/about.md
```

Imágenes actuales:

```txt
src/assets/images/about.webp
src/assets/images/about1.webp
```

### Cambiar imágenes de "Compañía en Escena"

Contenido:

```txt
src/content/pages/escena.md
```

Imágenes actuales:

```txt
src/assets/images/escena.webp
src/assets/images/escena-1.webp
src/assets/images/escena-2.webp
```

### Cambiar imágenes de proyectos

Se hace dentro de cada `.mdx`, por ejemplo:

```txt
src/content/projects/alcontar.mdx
```

Si cambias de `.jpg` a `.webp`, revisa dos cosas:

- Que el archivo nuevo exista en `src/assets/images/`.
- Que el import o la ruta dentro del `.mdx` apunte al nombre correcto.

Después conviene ejecutar:

```bash
npm run verify
```

## Formato recomendado de imágenes

Para fotos normales de la web:

```txt
WebP
```

Para imágenes con transparencia real:

```txt
PNG
```

Para logos vectoriales, iconos y favicon:

```txt
SVG
```

Recomendaciones prácticas:

- Hero principal: exportar grande, aproximadamente entre `1800 px` y `2400 px` de ancho.
- Imágenes de proyecto: normalmente entre `1400 px` y `1800 px` de ancho.
- Imágenes pequeñas o retratos secundarios: entre `900 px` y `1400 px` de ancho suele bastar.
- SEO preview: idealmente `1200 x 630 px`.
- Favicon SVG: lienzo cuadrado, por ejemplo `512 x 512`, con `viewBox` cuadrado.

## Vídeos

Los vídeos se insertan con el componente:

```txt
src/components/VideoEmbed.astro
```

En los proyectos se usa así:

```astro
<VideoEmbed provider="vimeo" videoId="..." title="..." />
```

O para YouTube:

```astro
<VideoEmbed provider="youtube" videoId="..." title="..." />
```

YouTube usa `youtube-nocookie.com`. Vimeo carga el reproductor normal para que se vea la pantalla del vídeo directamente.

## Colores de marca

Los colores se cambian en:

```txt
src/styles/global.css
```

Variables principales:

```css
:root {
  --text-main: #171717;
  --bg-main: #eeeeef;
  --accent-warm: #a03123;
  --accent-cool: #00a8db;
}

html.dark {
  --text-main: #eeeeef;
  --bg-main: #171717;
  --accent-warm: #a03123;
  --accent-cool: #00a8db;
}
```

Nombres acordados:

```txt
blanco de marca: #EEEEEF
negro de marca:  #171717
azul de marca:   #00A8DB
rojo de marca:   #A03123
```

El color de los títulos del feed de proyectos se controla con:

```css
--project-title
```

Ahora está preparado para que el color pueda ser distinto en modo claro y modo oscuro.

## Fuentes

Las fuentes se importan en:

```txt
src/styles/global.css
```

Y también están instaladas como dependencias en:

```txt
package.json
```

Fuentes actuales:

```txt
Work Sans
Atkinson Hyperlegible
```

Variables:

```css
--font-sans
--font-serif
```

## Marcos de imágenes

Los marcos de imágenes se controlan en:

```txt
src/styles/global.css
```

Reglas importantes:

```css
.content-about img,
.content-escena img

.content-contact img

.content-project > p > img
```

Ahí se define el borde, el tamaño máximo, el espacio interior y el centrado.

La imagen principal de Alcóntar tiene una excepción para que el marco coincida con los márgenes del texto:

```css
.content-project img[alt='Arte comunitario y participación ciudadana en Alcóntar']
```

## SEO y vista previa al compartir

La configuración general de SEO está en:

```txt
src/data/site-config.ts
```

Busca:

```ts
title;
description;
image;
keywords;
```

La imagen que se usa para WhatsApp, redes y tarjetas de enlace está configurada aquí:

```ts
image: {
    src: '/portfolio-preview.jpg',
    alt: '...'
}
```

Archivo actual:

```txt
public/portfolio-preview.jpg
```

También existe:

```txt
public/portfolio-preview.png
```

Pero la referencia principal de SEO apunta al `.jpg`.

Nota importante: WhatsApp cachea mucho las imágenes. Si cambias la imagen SEO y sigues viendo la antigua, puede ser caché de WhatsApp, no necesariamente un error de la web.

Para probar una versión nueva puedes compartir temporalmente:

```txt
https://joaquimedina.github.io/?v=2
```

## Navegación y rutas

La navegación principal está en:

```txt
src/data/site-config.ts
```

Busca:

```ts
headerNavLinks;
footerNavLinks;
```

Rutas públicas actuales:

```txt
/
/escena
/proyectos
/contacto
/joaquimedina
/terminos
```

También existen redirecciones desde rutas antiguas en inglés, para no romper enlaces viejos:

```txt
/about
/contact
/terms
/projects
```

## Página 404

La página de error personalizada está en:

```txt
src/pages/404.astro
```

## Accesibilidad básica

Cosas que conviene cuidar cuando edites:

- Cada imagen importante debe tener un texto `alt` útil.
- Si la imagen es decorativa, el `alt` puede ser vacío, pero mejor no abusar.
- No saltar de un `##` a un `####` sin motivo.
- Mantener contraste suficiente entre texto y fondo, especialmente en modo claro.
- Revisar que los enlaces tengan texto comprensible.
- Después de cambios visuales, probar teclado: `Tab`, `Enter`, `Escape` en el menú móvil.

## Antes de publicar

Checklist sencilla:

```txt
1. Revisar la web en local.
2. Probar modo claro y modo oscuro.
3. Probar móvil o vista estrecha.
4. Ejecutar npm run verify.
5. Hacer commit.
6. Hacer push.
7. Esperar a que GitHub Actions despliegue.
```

Comandos:

```bash
npm run verify
git status
git add .
git commit -m "Descripción breve del cambio"
git push
```

## Despliegue

El despliegue se hace automáticamente con GitHub Actions al subir cambios a `main`.

La acción genera la carpeta:

```txt
dist/
```

Y GitHub Pages publica la web.

## Nota para el Joaquín del futuro

Si algo se ve raro después de cambiar una imagen, casi siempre está en uno de estos puntos:

- El archivo no está en la carpeta correcta.
- El nombre no coincide exactamente.
- La extensión cambió de `.jpg` a `.webp` o `.png`.
- El navegador o WhatsApp está enseñando una versión cacheada.
- Falta ejecutar `npm run verify`.

Antes de tocar veinte cosas a la vez, cambia una, verifica, y luego sigue. La web es pequeña, pero está bastante cuidada: mejor mantenerla así, con cambios claros y bien respirados.

## Licencia

El código fuente de este sitio conserva la licencia indicada en:

```txt
LICENSE
```

Esa licencia se aplica al código fuente del proyecto, no a los contenidos personales, profesionales o artísticos incluidos en el portfolio.

Los textos, imágenes, vídeos, logotipos, documentación de proyectos, materiales audiovisuales, identidad visual y demás contenidos del portfolio pertenecen a Joaquín Medina o a sus titulares legítimos, salvo que se indique expresamente lo contrario.

No está permitido reutilizar, reproducir, distribuir, modificar o explotar dichos contenidos sin autorización previa.
