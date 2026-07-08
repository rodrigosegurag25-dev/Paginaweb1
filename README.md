# Paginaweb1

Página web simple hecha con **React + Vite**. Desplegada en `ektreporte.irsg.work` (VPS con cPanel).

## Desarrollo
```bash
npm install
npm run dev
```

## Compilar y desplegar
```bash
npm run build      # genera dist/ (HTML+JS+CSS estático)
# subir el contenido de dist/ al docroot del VPS:
#   /home/irsg1994/public_html/ektreporte/
```

El VPS solo sirve archivos estáticos (no necesita Node).
