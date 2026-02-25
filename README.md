# AllenMax | Marketing Digital & IA de Alto Impacto

Este es el proyecto oficial de AllenMax, desarrollado con Next.js, Tailwind CSS y Firebase.

## 🚀 Guía de Lanzamiento Final (Hostinger)

Tu web ya está en la nube. Sigue estos pasos para que se vea en `allenmax.com`:

### 1. Configuración en la Consola de Firebase
1. En **App Hosting** > **Configuración**, añade el dominio `allenmax.com`.
2. **IMPORTANTE**: No marques la casilla de "Redireccionar" al añadir el dominio principal.
3. Firebase te dará unos valores. Cópialos.

### 2. Configuración en Hostinger (DNS)
Inicia sesión en Hostinger > Dominios > `allenmax.com` > **DNS / Nameservers**. Añade estos registros:

| Tipo | Nombre (Host) | Valor (Punta a) | TTL |
| :--- | :--- | :--- | :--- |
| **A** | `@` | [IP que te dio Firebase] | 14400 |
| **CNAME** | `www` | `allenmax.com` | 14400 |

*Nota: Borra cualquier otro registro tipo "A" antiguo para que no haya conflictos.*

### 3. Verificación y SSL
- Los cambios pueden tardar desde unos minutos hasta 24 horas en propagarse (habitualmente son 30 min).
- El certificado SSL (el candado de seguridad) lo genera Firebase automáticamente una vez que el dominio está conectado.

## 🛠️ Tecnologías utilizadas
- **Next.js 15** (App Router)
- **Tailwind CSS** (Glow UI effects)
- **Framer Motion** (Animations)
- **Firebase** (App Hosting)
