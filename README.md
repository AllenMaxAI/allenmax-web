# AllenMax | Marketing Digital & IA de Alto Impacto

Este es el proyecto oficial de AllenMax, desarrollado con Next.js, Tailwind CSS y Firebase.

## 🚀 Guía de Despliegue (GitHub -> Firebase)

Cada vez que quieras publicar cambios en `allenmax.com`, abre la **Terminal** y ejecuta:

1. **Preparar**: `git add .`
2. **Confirmar**: `git commit -m "Descripción del cambio"`
3. **Subir**: `git push`

### ¿Cómo saber si se está publicando?
1. Ve a tu panel de **Firebase Console**.
2. Entra en **App Hosting**.
3. Haz clic en tu backend (**Studio**).
4. Verás una sección llamada **"Rollouts"** (Despliegues). Si sale un círculo girando, es que se está actualizando. Cuando salga un check verde ✅, los cambios ya estarán en la web.

## 🌐 Configuración del Dominio (Hostinger)

Tu web se verá en `allenmax.com` siguiendo estos pasos:

### 1. En la Consola de Firebase
1. Ve a **App Hosting** > **Configuración** > **Añadir dominio personalizado**.
2. Escribe `allenmax.com` (sin marcar la casilla de redirección).
3. Copia los valores DNS (Registros A y CNAME).

### 2. En Hostinger (DNS)
| Tipo | Nombre (Host) | Valor (Punta a) | TTL |
| :--- | :--- | :--- | :--- |
| **A** | `@` | [IP de Firebase] | 14400 |
| **CNAME** | `www` | `allenmax.com` | 14400 |

*Importante: El estado **"Pendiente"** es normal durante las primeras 24h por la propagación DNS.*

## 🔍 SEO & Indexación
- **URL del Sitemap:** `https://allenmax.com/sitemap.xml`
- **Favicon:** Gestionado automáticamente desde `src/app/icon.png`.

## 🛠️ Solución de Errores Comunes
- **Doble "X" en móvil**: Corregido eliminando el botón manual en `AppHeader`.
- **Error al añadir dominio**: Si falla, prueba a añadir primero `www.allenmax.com`.
- **Sitemap no obtenido**: Solo funcionará cuando el dominio esté **Activo** y con SSL.
