# AllenMax | Marketing Digital & IA de Alto Impacto

Este es el proyecto oficial de AllenMax, desarrollado con Next.js, Tailwind CSS y Firebase.

## 🚀 Guía de Lanzamiento Final (Hostinger)

Tu web ya está en la nube. Sigue estos pasos para que se vea en `allenmax.com`:

### 1. Configuración en la Consola de Firebase
1. En **App Hosting** > **Configuración**, añade el dominio `allenmax.com`.
2. **IMPORTANTE**: No marques la casilla de "Redireccionar" al añadir el dominio principal.
3. Firebase te dará unos valores (Registros A y CNAME). Cópialos.

### 2. Configuración en Hostinger (DNS)
Inicia sesión en Hostinger > Dominios > `allenmax.com` > **DNS / Nameservers**. Añade estos registros:

| Tipo | Nombre (Host) | Valor (Punta a) | TTL |
| :--- | :--- | :--- | :--- |
| **A** | `@` | [IP que te dio Firebase] | 14400 |
| **CNAME** | `www` | `allenmax.com` | 14400 |

*Nota: Borra cualquier otro registro tipo "A" antiguo para que no haya conflictos.*

### ⏳ Tiempo de Propagación
Una vez configurado en Hostinger, el estado en Firebase pasará a **"Pendiente"**. 
- Este proceso puede tardar desde unos minutos hasta **24 horas**.
- Hasta que el estado sea **"Activo"**, Google Search Console no podrá leer el sitemap.

## 🔍 SEO & Indexación
Para que Google indexe tu web correctamente, añade el sitemap en Google Search Console **solo cuando el dominio esté activo**:
- **URL del Sitemap:** `https://allenmax.com/sitemap.xml`

## 🛠️ SOLUCIÓN A ERRORES COMUNES

### Error: "Se produjo un error mientras se creaba el dominio"
1. **Eliminar conflictos**: Ve a **Compilación > Hosting** (el clásico). Si el dominio aparece ahí, elimínalo.
2. **Ventana de Incógnito**: Abre la consola de Firebase en incógnito para evitar fallos de caché.
3. **Subdominio primero**: Intenta añadir `www.allenmax.com` primero. Si funciona, luego añade el principal.

### Error: "Sitemap no se ha podido obtener" (Google Search Console)
- Este error es **normal** mientras el dominio esté en estado **"Pendiente"**. Google necesita que el dominio esté activo y con el certificado SSL (candadito) funcionando antes de poder leer el sitemap.

## 💻 Tecnologías utilizadas
- **Next.js 15** (App Router)
- **Tailwind CSS** (Glow UI effects)
- **Framer Motion** (Animations)
- **Firebase** (App Hosting)
