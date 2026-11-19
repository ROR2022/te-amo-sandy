# Propuesta: música de fondo

## Contexto del proyecto actual

La aplicación presenta dos fases dentro de la misma ruta `/`: primero muestra una introducción tipo búsqueda y, al seleccionar el resultado, cambia a la vista de la serie mediante el estado `phase` de `app/page.tsx`. La búsqueda es visual y no es un campo interactivo; el resultado es el control que permite avanzar.

El proyecto usa Next.js 16 con App Router, React 19 y TypeScript. El audio ya está disponible como `public/music.mp3`, por lo que se puede reproducir desde `/music.mp3` sin moverlo ni agregar dependencias.

## Comportamiento propuesto

1. La pista carga pausada y no se reproduce automáticamente.
2. El primer clic o toque dentro de la introducción intenta iniciar la música. Si ese gesto selecciona el resultado, el intento ocurre antes de que cambie la pantalla.
3. Un control fijo abajo a la izquierda permite pausar y reanudar la misma pista tanto en la introducción como en la vista de la serie.
4. El reproductor se monta en `app/layout.tsx`, fuera del contenido que cambia entre fases, para que el elemento de audio no se reinicie al mostrar la serie ni al volver a empezar.
5. Si `play()` falla o el archivo no puede cargarse, el control refleja el estado pausado, muestra un aviso accesible y permite reintentar.

## Diseño técnico

Crear `components/MusicaFondo.tsx` como componente cliente propietario de un único elemento `<audio>`. Usar la ruta `/music.mp3`, `loop`, `preload="none"` y volumen inicial de 30 %. Sincronizar la interfaz con los eventos `play`, `pause` y `error`, y manejar el rechazo de la promesa de `play()` sin indicar falsamente que la música está sonando.

El reproductor detectará la primera interacción en `.intro-screen` y llamará a `play()` directamente desde ese evento de usuario, requisito importante para las políticas de reproducción de los navegadores. El detector se elimina después del primer gesto. El control manual queda fuera de esa detección para que su clic no cause un cambio doble.

El botón usa un nombre accesible que cambia entre reproducir y pausar, foco visible y un aviso de error anunciado por tecnología de asistencia. Su estilo fijo en `app/globals.css` considera las áreas seguras de dispositivos móviles.

## Criterios de aceptación

- La página inicia sin reproducir audio.
- El primer clic o toque dentro de la introducción intenta reproducir la pista, incluso si selecciona el resultado que abre la vista de la serie.
- El control se mantiene disponible en las dos fases y pausa/reanuda el mismo elemento de audio sin reiniciarlo.
- El estado visible coincide con los eventos del elemento de audio; si falla la reproducción, se informa y se puede reintentar.
- El control es operable con teclado, tiene foco visible y respeta las áreas seguras en móvil.
- No se agregan dependencias y `pnpm build` termina correctamente.

## Alcance y decisiones

La pista se reproduce en bucle al 30 % de volumen. No se incluyen selector de pista, control de volumen en pantalla ni persistencia de la preferencia entre visitas. El icono de sonido de la vista de la serie conserva su comportamiento actual y no controla esta música de fondo.
