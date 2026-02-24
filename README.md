# AllenMax | Marketing Digital & IA de Alto Impacto

Este es el proyecto oficial de AllenMax, desarrollado con Next.js, Tailwind CSS y Firebase.

## 🚀 Pasos para el Despliegue

Sigue esta guía para publicar tu web en `allenmax.com`:

### 1. Subir a GitHub
Ya tienes la terminal abierta. Ejecuta estos comandos uno por uno:

```bash
# 1. Prepara los archivos
git add .

# 2. Crea el punto de guardado
git commit -m "Preparado para despliegue"

# 3. Conecta con tu repositorio (SUSTITUYE LA URL)
# Ve a GitHub, crea un repo vacío y copia la URL que termina en .git
git remote add origin https://github.com/TU_USUARIO/NOMBRE_REPOSITORIO.git

# 4. Sube el código
git push -u origin main
```

### 2. Configurar Firebase App Hosting
1. Ve a la [Consola de Firebase](https://console.firebase.google.com/).
2. Selecciona tu proyecto.
3. Entra en **App Hosting** en el menú lateral.
4. Haz clic en "Comenzar" y conecta tu repositorio de GitHub recién creado.
5. Firebase detectará automáticamente que es un proyecto de Next.js.

### 3. Conectar Dominio (Hostinger)
1. En la pestaña de configuración de tu backend en App Hosting, haz clic en **"Conectar dominio personalizado"**.
2. Introduce `allenmax.com`.
3. Firebase te dará unos registros DNS (A y CNAME).
4. Ve a tu panel de **Hostinger**, entra en la gestión de DNS de tu dominio y añade los registros exactos que te dio Firebase.

## 🛠️ Tecnologías utilizadas
- **Next.js 15** (App Router)
- **Tailwind CSS** (Glow UI effects)
- **Framer Motion** (Animations)
- **Lucide React** (Icons)
- **Firebase** (App Hosting & Backend)
