# AllenMax | Marketing Digital & IA de Alto Impacto

Este es el proyecto oficial de AllenMax, desarrollado con Next.js, Tailwind CSS y Firebase.

## 🚀 Guía de Despliegue (GitHub -> Firebase)

Cada vez que quieras publicar cambios en `allenmax.com`, abre la **Terminal** y ejecuta:

1. **Preparar**: `git add .`
2. **Confirmar**: `git commit -m "Descripción del cambio"`
3. **Subir**: `git push`

### 📊 ¿Cómo monitorizar el progreso?
Para ver cuánto le falta a tu actualización, sigue estos pasos:

1. Ve a tu panel de **[Firebase Console](https://console.firebase.google.com/)**.
2. Entra en tu proyecto y ve a la sección **App Hosting** (en el menú lateral izquierdo).
3. Haz clic en el nombre de tu backend (probablemente se llame **"Studio"** o similar).
4. Verás una sección llamada **"Rollouts"** (Despliegues).
   - **Círculo giratorio azul**: Firebase está construyendo y subiendo los cambios (tarda 2-4 min).
   - **Check verde ✅**: Los cambios ya están en vivo en `allenmax.com`.
   - **Equis roja ❌**: Hubo un error (puedes hacer clic para ver por qué falló).

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
- **Sitemap:** `https://allenmax.com/sitemap.xml` (Enviar a Google Search Console una vez el dominio esté Activo).
- **Robots:** Gestionado automáticamente en `/robots.txt`.
- **Favicon:** Gestionado automáticamente desde `src/app/icon.png`.

## 🛠️ Solución de Errores Comunes
- **Doble "X" en móvil**: Corregido.
- **Error al añadir dominio**: Si falla, prueba a añadir primero `www.allenmax.com`.
- **Sitemap no obtenido**: Solo funcionará cuando el dominio esté **Activo** y con SSL.
