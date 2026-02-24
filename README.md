# AllenMax | Marketing Digital & IA de Alto Impacto

Este es el proyecto oficial de AllenMax, desarrollado con Next.js, Tailwind CSS y Firebase.

## 🚀 Pasos para el Despliegue

Para publicar esta web en tu dominio `allenmax.com`, sigue esta guía:

### 1. Subir a GitHub
Abre la terminal en Firebase Studio. Si el atajo `Ctrl + ` ` ` no te funciona, hazlo con el ratón:
1. Ve al **Menú** (icono de 3 líneas arriba a la izquierda).
2. Selecciona **Terminal**.
3. Haz clic en **Nueva Terminal**.

Una vez abierta, ejecuta estos comandos:

```bash
git init
git add .
git commit -m "Preparado para despliegue"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/NOMBRE_REPOSITORIO.git
git push -u origin main
```

### 2. Configurar Firebase App Hosting
1. Ve a la [Consola de Firebase](https://console.firebase.google.com/).
2. Selecciona tu proyecto.
3. Entra en **App Hosting** en el menú lateral.
4. Haz clic en "Comenzar" y conecta tu repositorio de GitHub recién creado.
5. Sigue los pasos para configurar el despliegue automático.

### 3. Conectar Dominio (Hostinger)
1. Una vez desplegado en App Hosting, ve a la pestaña de configuración del backend.
2. Haz clic en **"Conectar dominio personalizado"**.
3. Introduce `allenmax.com`.
4. Firebase te proporcionará los registros DNS (A o CNAME).
5. Ve a tu panel de control en **Hostinger**, entra en la gestión de DNS y añade los registros indicados por Firebase.

## 🛠️ Tecnologías utilizadas
- **Next.js 15** (App Router)
- **Tailwind CSS** para estilos
- **Framer Motion** para animaciones
- **Lucide React** para iconos
- **Firebase** para el hosting y servicios backend
