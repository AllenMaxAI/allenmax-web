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

## 🔍 SEO & Indexación
Para que Google indexe tu web correctamente, añade el sitemap en Google Search Console:
- **URL del Sitemap:** `sitemap.xml` (Si ya estás dentro de la propiedad https://allenmax.com)
- **URL Completa:** `https://allenmax.com/sitemap.xml`

## 🛠️ SOLUCIÓN AL ERROR: "Se produjo un error mientras se creaba el dominio"

Si recibes este mensaje rojo en la consola, sigue este orden estrictamente:

1. **Eliminar conflictos de Hosting Clásico**:
   - Ve al menú izquierdo: **Compilación** > **Hosting** (el que NO es App Hosting).
   - Si el dominio `allenmax.com` aparece ahí, **elimínalo** completamente. 
   - Espera 1 minuto y vuelve a intentar en App Hosting.

2. **Truco del Subdominio**:
   - Intenta añadir primero `www.allenmax.com`. 
   - Si este funciona, Firebase "desbloquea" la validación y luego podrás añadir el dominio principal sin el `www`.

3. **Modo Incógnito**:
   - Abre la consola de Firebase en una ventana de incógnito. A veces los errores de dominio son fallos de caché.

## 💻 Tecnologías utilizadas
- **Next.js 15** (App Router)
- **Tailwind CSS** (Glow UI effects)
- **Framer Motion** (Animations)
- **Firebase** (App Hosting)
