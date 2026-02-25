# AllenMax | Marketing Digital & IA de Alto Impacto

Este es el proyecto oficial de AllenMax, desarrollado con Next.js, Tailwind CSS y Firebase.

## 🚀 Guía de Lanzamiento Final

¡El código ya está en GitHub! Sigue estos pasos para que el mundo lo vea en `allenmax.com`:

### 1. Desplegar en Firebase App Hosting
1. En tu consola de Firebase (donde estás ahora), haz clic en **App Hosting** en el menú lateral izquierdo.
2. Haz clic en **"Comenzar"** (Get Started).
3. Conecta tu cuenta de GitHub y selecciona el repositorio `allenmax-web`.
4. En la configuración, deja todo por defecto (Firebase detecta Next.js) y haz clic en **"Finalizar y Desplegar"**.
5. Espera unos minutos a que la barra de progreso termine.

### 2. Conectar tu Dominio (Hostinger)
1. Una vez que el despliegue termine, verás un botón que dice **"Conectar dominio personalizado"**.
2. Escribe `allenmax.com`.
3. Firebase te mostrará unos registros DNS (Valores tipo A y CNAME).
4. **IMPORTANTE**: Ve a tu panel de **Hostinger** > Dominios > DNS / Nameservers y añade esos registros exactos.
5. El certificado de seguridad (HTTPS) se activará solo en unas horas.

### 3. Aparecer en Google
1. Entra en [Google Search Console](https://search.google.com/search-console).
2. Añade la propiedad `https://allenmax.com`.
3. El archivo `sitemap.xml` ya está configurado en tu código para que Google te encuentre rápido.

## 🛠️ Tecnologías utilizadas
- **Next.js 15** (App Router)
- **Tailwind CSS** (Glow UI effects)
- **Framer Motion** (Animations)
- **Lucide React** (Icons)
- **Firebase** (App Hosting & Backend)
