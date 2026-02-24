# AllenMax | Marketing Digital & IA de Alto Impacto

Este es el proyecto oficial de AllenMax, desarrollado con Next.js, Tailwind CSS y Firebase.

## 🚀 Guía de Lanzamiento Final

¡El código ya está en GitHub! Sigue estos pasos para que el mundo lo vea en `allenmax.com`:

### 1. Desplegar en Firebase App Hosting
1. Ve a la [Consola de Firebase](https://console.firebase.google.com/).
2. Entra en tu proyecto y busca **App Hosting** en el menú lateral.
3. Haz clic en "Comenzar" y conecta tu repositorio de GitHub `allenmax-web`.
4. Firebase detectará automáticamente Next.js. Dale a "Siguiente" y luego a "Finalizar y Desplegar".
5. Espera unos minutos a que termine la primera construcción.

### 2. Conectar tu Dominio (Hostinger)
1. En el panel de App Hosting, haz clic en **"Conectar dominio personalizado"**.
2. Introduce `allenmax.com`.
3. Firebase te mostrará unos registros DNS (Valores A y CNAME).
4. **IMPORTANTE**: Ve a tu panel de **Hostinger** > Dominios > DNS / Nameservers y añade los registros exactos que te dio Firebase.
5. El certificado SSL (el candado de seguridad) se generará automáticamente en unas horas.

### 3. Verificación en Google
Para que aparezcas en los buscadores:
1. Entra en [Google Search Console](https://search.google.com/search-console).
2. Añade tu propiedad `https://allenmax.com`.
3. Sube el sitemap que ya hemos generado en `https://allenmax.com/sitemap.xml`.

## 🛠️ Tecnologías utilizadas
- **Next.js 15** (App Router)
- **Tailwind CSS** (Glow UI effects)
- **Framer Motion** (Animations)
- **Lucide React** (Icons)
- **Firebase** (App Hosting & Backend)
