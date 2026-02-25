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

## 🛠️ Solución de Errores (Dominio)

Si recibes el error "Se produjo un error mientras se creaba el dominio":
1. **Conflicto de Hosting**: Ve a la sección **"Hosting"** (la clásica, no App Hosting) en el menú izquierdo. Si ves `allenmax.com` ahí, elimínalo. Los dominios no pueden estar en Hosting y App Hosting a la vez.
2. **Subdominio primero**: Intenta agregar `www.allenmax.com`. Si funciona, luego podrás agregar el principal.
3. **Refrescar sesión**: Cierra la pestaña de la consola, espera 2 minutos y vuelve a entrar.

## 💻 Tecnologías utilizadas
- **Next.js 15** (App Router)
- **Tailwind CSS** (Glow UI effects)
- **Framer Motion** (Animations)
- **Firebase** (App Hosting)
