# AllenMax | Marketing Digital & IA de Alto Impacto

Este es el proyecto oficial de AllenMax, desarrollado con Next.js, Tailwind CSS y Firebase.

## 🚀 Guía de Lanzamiento Final (Hostinger)

Tu web ya está en la nube de Firebase. Sigue estos pasos finales para que se vea en `allenmax.com`:

### 1. Conectar tu Dominio en la Consola de Firebase
1. En tu consola (donde ves el backend "Studio"), haz clic en el botón **"Ver"**.
2. Ve a la pestaña **"Dominios"** o **"Configuración"**.
3. Haz clic en **"Conectar dominio personalizado"**.
4. Escribe `allenmax.com`.
5. Firebase te mostrará unos registros DNS (Valores tipo A y CNAME). **Cópialos**.

### 2. Configurar en Hostinger
1. Inicia sesión en tu panel de **Hostinger**.
2. Ve a **Dominios** > selecciona `allenmax.com` > **DNS / Nameservers**.
3. Añade los registros que te dio Firebase:
   - **Registro A**: Apunta a la dirección IP que te dio Firebase.
   - **Registro CNAME**: (Si te lo pide) para el subdominio `www`.
4. Borra cualquier registro "A" antiguo que apunte a una IP diferente para evitar conflictos.

### 3. Aparecer en Google
1. Entra en [Google Search Console](https://search.google.com/search-console).
2. Añade la propiedad `https://allenmax.com`.
3. El archivo `sitemap.xml` ya está configurado para que Google te encuentre rápido.

*Nota: El certificado SSL (el candado de seguridad) se activará automáticamente unas horas después de que los DNS se propaguen.*

## 🛠️ Tecnologías utilizadas
- **Next.js 15** (App Router)
- **Tailwind CSS** (Glow UI effects)
- **Framer Motion** (Animations)
- **Lucide React** (Icons)
- **Firebase** (App Hosting & Backend)
