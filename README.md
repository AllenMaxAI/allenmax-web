# AllenMax | Marketing Digital & IA de Alto Impacto

Este es el proyecto oficial de AllenMax, desarrollado con Next.js, Tailwind CSS y Firebase.

## 🚀 Guía de Despliegue (GitHub -> Firebase)

Cada vez que hagamos cambios en el código, sigue estos pasos en la terminal para publicarlos:

1. **Preparar archivos**: `git add .`
2. **Confirmar cambios**: `git commit -m "Descripción de lo que has cambiado"`
3. **Subir a la nube**: `git push`

*Nota: Una vez hagas el `push`, Firebase detectará el cambio y actualizará la web en unos 2-3 minutos automáticamente.*

## 🌐 Configuración del Dominio (Hostinger)

Tu web se verá en `allenmax.com` siguiendo estos pasos:

### 1. En la Consola de Firebase
1. Ve a **App Hosting** > **Configuración** > **Añadir dominio personalizado**.
2. Escribe `allenmax.com` (sin marcar la casilla de redirección).
3. Copia los valores DNS (Registros A y CNAME) que te proporcione Firebase.

### 2. En Hostinger (DNS)
| Tipo | Nombre (Host) | Valor (Punta a) | TTL |
| :--- | :--- | :--- | :--- |
| **A** | `@` | [IP que te dio Firebase] | 14400 |
| **CNAME** | `www` | `allenmax.com` | 14400 |

*Importante: El estado **"Pendiente"** en Firebase es normal y puede tardar hasta 24 horas en activarse.*

## 🔍 SEO & Indexación
Cuando el dominio esté en estado **"Activo"**, añade el sitemap en Google Search Console:
- **URL del Sitemap:** `https://allenmax.com/sitemap.xml`

## 🛠️ Solución de Errores Comunes
- **Error al añadir dominio**: Si falla, intenta añadir primero `www.allenmax.com`.
- **Sitemap no obtenido**: Google solo puede leer el sitemap cuando el dominio está activo y el certificado SSL (candadito) funcionando.

## 💻 Tecnologías
- **Next.js 15** (App Router)
- **Tailwind CSS** (Glow UI)
- **Firebase App Hosting**
