# 🚀 Guía de Despliegue y Conexión de Dominio para SLG Transportes

Esta guía te explica paso a paso cómo conectar tu propio dominio personalizado (ejemplo: `www.slg-transportes.es` o `www.tudominio.com`) y poner la web en funcionamiento en internet con certificado SSL gratuito (HTTPS).

---

## 📋 ¿Qué mejoras se han implementado en la web?

1. **Diseño Visual Profesional & Moderno**:
   - Paleta cromática corporativa (rojo transporte `--primary: #c01b22`, fondos limpios y slate profesional, eliminando el fondo antiguo `#F2CB94`).
   - Tipografía del sistema ultrarrápida (sin retardos de carga).
   - Tarjetas elevadas con sombras suaves y estados *hover*.
   - Sección Hero de alto impacto con llamada a la acción y garantías de servicio.
   - Barra de métricas y estadísticas clave (+15 años, 99.4% puntualidad, etc.).
   - Sección de opiniones reales de clientes para generar confianza inmediata.
2. **Navegación Móvil Responsive (Hamburguesa)**:
   - Menú accesible optimizado para teléfonos móviles, tablets y ordenadores con `main.js`.
3. **Formulario de Presupuesto Interactivo**:
   - Formulario completo con campos de tipo de mercancía, origen, destino, fechas y validación.
   - Botón directo de **WhatsApp flotante** para que los clientes puedan pedir cotización instantánea desde su móvil.
4. **Preguntas Frecuentes (FAQ) con Acordeón**:
   - En la página de servicios para resolver dudas de clientes sobre plazos, seguros y coberturas.
5. **Preparación Técnica para Dominio Web (SEO & Indexación)**:
   - Etiquetas Open Graph (WhatsApp, Facebook, Twitter, LinkedIn compartirán la web con vista previa rica).
   - `favicon.svg` vectorial corporativo de alta resolución.
   - `robots.txt` y `sitemap.xml` para indexación en Google.
   - Página `404.html` personalizada para rutas inexistentes.

---

## 🌐 Opciones para Subir la Web a tu Dominio

Tienes tres métodos muy sencillos:

### Opción 1: GitHub Pages (Gratis + Recomendado si ya usas GitHub)

Como tu proyecto ya está en GitHub (`origin/main`):

1. **Sube los cambios a GitHub**:
   ```bash
   git add .
   git commit -m "Mejoras de diseno, responsive, SEO y preparacion para dominio"
   git push origin main
   ```
2. **Activa GitHub Pages**:
   - Ve a tu repositorio en GitHub: `https://github.com/mojitoxxx/P-gina`
   - Haz clic en **Settings** (Configuración) > **Pages** (en el menú lateral izquierdo).
   - En **Source**, selecciona `Deploy from a branch` y elige la rama `main` y carpeta `/ (root)`. Guarda los cambios.
   - En unos segundos tendrás tu enlace público de GitHub (`mojitoxxx.github.io/P-gina`).
3. **Vincular tu Dominio Propio**:
   - En esa misma pantalla de **Pages**, baja hasta la sección **Custom domain**.
   - Escribe tu dominio (ejemplo: `www.tudominio.com`) y pulsa **Save**.
   - En tu proveedor donde compraste el dominio (DonDominio, GoDaddy, Nominalia, Cloudflare, etc.), añade estos registros DNS:
     - **CNAME**: Host `www` apuntando a `mojitoxxx.github.io`
     - **A**: Host `@` apuntando a las IPs de GitHub:
       - `185.199.108.153`
       - `185.199.109.153`
       - `185.199.110.153`
       - `185.199.111.153`
   - Marca la casilla **Enforce HTTPS** en GitHub Pages para tener el candado de seguridad verde.

---

### Opción 2: Vercel o Netlify (Gratis, automático y con formulario directo)

1. Entra en [vercel.com](https://vercel.com) o [netlify.com](https://www.netlify.com) y regístrate gratis con tu cuenta de GitHub.
2. Pulsa en **Add New Project** e importa el repositorio `P-gina`.
3. Haz clic en **Deploy**. En 15 segundos tu web estará en vivo con un enlace ultra rápido en red CDN mundial.
4. Ve a **Settings > Domains**, añade tu dominio y sigue las instrucciones para cambiar los DNS o el registro CNAME.

---

### Opción 3: Hosting Tradicional / cPanel / DonDominio / Hostinger

Si has contratado un hosting tradicional con servidor FTP o cPanel:
1. Abre el **Administrador de Archivos** de tu cPanel o tu cliente FTP (FileZilla).
2. Entra en la carpeta `public_html` (o `httpdocs`).
3. Sube todos los archivos y carpetas del proyecto:
   - `index.html`
   - `style.css`
   - `main.js`
   - `favicon.svg`
   - `robots.txt`
   - `sitemap.xml`
   - `404.html`
   - Carpeta `About/`
   - Carpeta `Contact/`
   - Carpeta `Service/`
4. ¡Listo! Tu web cargará de inmediato en `https://tudominio.com`.

---

## 📬 ¿Cómo recibir los mensajes del formulario en tu email?

Actualmente el formulario en `Contact/index.html` incluye validación en el navegador y muestra confirmación interactiva. Para que los mensajes lleguen a tu bandeja de entrada real:

1. Ve a [formspree.io](https://formspree.io) o [web3forms.com](https://web3forms.com) (ambos son 100% gratuitos).
2. Crea un formulario nuevo introduciendo el correo donde quieres recibir los presupuestos.
3. Te darán una URL única (ejemplo: `https://formspree.io/f/xyzabced`).
4. Abre `Contact/index.html`, busca la línea:
   ```html
   <form id="formulario-contacto" action="#" method="post">
   ```
   Y cámbiala por:
   ```html
   <form id="formulario-contacto" action="https://formspree.io/f/xyzabced" method="POST">
   ```

---

## ✏️ Datos a personalizar antes del lanzamiento final

Puedes cambiar rápidamente estos datos por los definitivos de tu empresa con la función buscar y reemplazar:
- **Teléfono**: Cambia `900 000 000` por el teléfono de tu empresa.
- **WhatsApp**: En los enlaces `https://wa.me/34900000000`, sustituye `34900000000` por el prefijo y número real (ej. `34612345678`).
- **Correo**: Ya configurado como `moritomatamoros03@gmail.com` (puedes cambiarlo si en el futuro tienes un correo corporativo como `contacto@tudominio.com`).
- **Sitemap**: En `sitemap.xml` y `robots.txt`, cambia `https://www.tudominio.com/` por la URL de tu dominio definitivo.
