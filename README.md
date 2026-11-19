# TE AMO MUCHO

Una experiencia romántica en forma de serie Original: primero aparece una búsqueda cinematográfica y, al abrir el resultado, se revela la historia completa.

## Personalizar la historia

Edita `data/serie.ts` para cambiar el título, la sinopsis, los nombres del reparto, los episodios, sus duraciones y descripciones, las recomendaciones y el mensaje final. Las imágenes están definidas como URLs de Unsplash en ese archivo: reemplázalas con URLs de tus propias fotos (o guárdalas en `public/` y actualiza las rutas). Las imágenes se muestran con `next/image`; las imágenes remotas actuales usan `unoptimized` para que no sea necesario configurar dominios.

Los nombres de ejemplo —“Tú”, “Mi persona favorita” y “Nuestro cómplice”— son intencionalmente editables. Ajusta también el texto del reparto y la firma para que la historia sea realmente de ustedes.

Para cambiar el destino del botón de WhatsApp, edita `whatsappNumber` en `data/serie.ts`: usa el número internacional completo, solo con dígitos y sin el signo `+`. Este número será público en el enlace.

## Desarrollo y despliegue

El proyecto usa Next.js App Router, TypeScript, Tailwind CSS y Framer Motion. En v0 puedes abrir la vista previa con **Preview** y publicar desde **Publish**. Para instalar el proyecto en tu propio entorno, usa el comando de instalación de shadcn o conecta el repositorio de GitHub desde v0; después instala dependencias con el gestor configurado y ejecuta el script `dev`. Para desplegar, importa el repositorio en Vercel o usa **Publish** en v0. No requiere variables de entorno.
