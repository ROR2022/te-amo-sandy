# Plan de implementación: música de fondo

**Fecha:** 2026-11-19  
**Base:** [PROPUESTA-MUSICA-FONDO.md](./PROPUESTA-MUSICA-FONDO.md)

## Resumen

Agregar música de fondo a la aplicación actual, que presenta una introducción y una vista de serie como dos fases de la misma ruta `/`. La pista `public/music.mp3` debe permanecer pausada hasta la primera interacción en la introducción. Un control accesible fijo abajo a la izquierda permite pausarla y reanudarla. El reproductor se monta en el layout raíz para sobrevivir al cambio de fase.

## Contexto técnico

- **Aplicación:** Next.js 16, App Router, React 19 y TypeScript.
- **Pantalla:** `app/page.tsx` muestra `SearchIntro` o la vista de serie, según `phase`; no hay navegación a `/serie`.
- **Integración persistente:** `app/layout.tsx`.
- **Estilos compartidos:** `app/globals.css`.
- **Componente cliente:** `components/MusicaFondo.tsx`.
- **Audio disponible:** `public/music.mp3`, servido como `/music.mp3`.
- **Build:** `pnpm build`, definido en `package.json`.

## Requisitos

- **REQ-001:** No reproducir audio al cargar. El primer clic/toque en la introducción debe intentar iniciar una sola vez la pista, incluso si selecciona el resultado.
- **REQ-002:** Mantener el mismo elemento de audio y su posición al cambiar entre las fases de introducción y serie, así como al volver a empezar.
- **REQ-003:** Mostrar en ambas fases un control fijo abajo a la izquierda para pausar y reanudar.
- **REQ-004:** El control debe ser accesible, responsivo y reflejar el estado real de reproducción.
- **REQ-005:** Si la reproducción falla, mantener un estado coherente, informar discretamente y permitir reintentar desde el control.
- **REQ-006:** No añadir dependencias y compilar con el build existente.

## Decisiones de diseño

- Usar el archivo proporcionado `public/music.mp3`, sin moverlo ni descargar recursos externos.
- Usar un único `<audio>` con `loop`, `preload="none"` y volumen inicial de 0.3.
- Montar el reproductor en el layout raíz. La introducción actual vive en `.intro-screen`; detectar allí el primer clic y llamar a `play()` dentro del mismo evento de usuario.
- No conectar la música de fondo al icono de sonido de la vista de la serie; ese control conserva su comportamiento actual.
- No incluir selector de pista, control de volumen en pantalla ni persistencia entre visitas.

## Tareas de implementación

- [x] **T001:** Usar el recurso de audio existente `public/music.mp3`.
- [x] **T002:** Crear `components/MusicaFondo.tsx` con un único elemento `<audio>`, inicio pausado, bucle, volumen inicial de 0.3 y estado reflejado desde los eventos de audio.
- [x] **T003:** Iniciar una sola vez desde la primera interacción en `.intro-screen`; manejar los rechazos y errores y permitir reintento manual.
- [x] **T004:** Montar el reproductor una sola vez en `app/layout.tsx` para conservarlo al cambiar de fase.
- [x] **T005:** Añadir en `app/globals.css` el control fijo responsivo, foco visible y soporte de áreas seguras móviles.
- [ ] **T006:** Completar la validación manual de error/reintento, teclado y vista móvil. **Parcialmente verificada en navegador de escritorio:** al cargar permanece pausada; el clic en el resultado inicia la música; pausa/reanudación y «Volver a empezar» conservan el reproductor activo.
- [x] **T007:** Ejecutar `pnpm build` y resolver cualquier error relacionado con la implementación. También se ejecutó `pnpm exec tsc --noEmit`.

## Estructura afectada

```text
public/
  music.mp3
components/
  MusicaFondo.tsx
app/
  layout.tsx
  globals.css
```

`app/page.tsx` y `components/streaming.tsx` conservan la interacción actual: la selección del resultado cambia la fase sin navegar a otra ruta. El reproductor detecta la interacción en la introducción desde su listener de documento y no requiere que la página administre el elemento de audio.

## Estrategia de validación

1. Abrir la página y confirmar que no hay audio antes de interactuar.
2. En una sesión nueva, hacer clic o tocar el resultado de la introducción; confirmar que empieza la música y aparece la vista de la serie sin reiniciar la pista.
3. Probar pausa y reanudación, comprobar que el botón actualiza su nombre accesible y no crea otra reproducción.
4. Usar «Volver a empezar» y comprobar que la pista continúa sin que se dispare un segundo inicio automático.
5. Simular un fallo de carga o de `play()`; verificar el aviso, el estado pausado y el reintento manual.
6. Probar foco y activación por teclado, posición en tamaños de escritorio y móvil, y áreas seguras.
7. Ejecutar `pnpm build`.

## Riesgos

- La política del navegador puede rechazar `play()`; el estado debe basarse en eventos reales y el control debe permitir reintentar.
- La detección inicial se limita a `.intro-screen`, que es el contenedor existente de la fase inicial.
- Si se cambia la ubicación o el nombre del archivo, se debe actualizar la fuente del audio en `components/MusicaFondo.tsx`.

## Mapeo de requisitos

| Requisito | Evidencia |
|---|---|
| REQ-001 | Listener de primera interacción en `components/MusicaFondo.tsx`; audio local `public/music.mp3`. |
| REQ-002 | Reproductor montado en `app/layout.tsx`, fuera del contenido que cambia entre fases. |
| REQ-003 | Control de pausa/reproducción renderizado por `components/MusicaFondo.tsx`. |
| REQ-004 | Nombre accesible dinámico y estilos adaptables/foco visible en `app/globals.css`. |
| REQ-005 | Manejo de rechazo y eventos de error con aviso y reintento manual. |
| REQ-006 | Sin cambios de dependencias; validar con `pnpm build`. |
