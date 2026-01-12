# 🏗️ Arqui Arte - Construcción y Diseño

Sitio web completo para empresa de construcción, remodelaciones y diseño arquitectónico en Ibagué, Tolima.

## 🌟 Características

### Páginas Principales
- **Home** - Página principal con todas las secciones
- **Portfolio** - Galería completa de proyectos con filtros
- **Detalle de Proyecto** - Página detallada para cada proyecto individual

### Páginas de Servicios Independientes
Cada servicio tiene su propia página detallada con:
- **Construcción** - Proyectos desde cero
- **Remodelaciones** - Transformación de espacios
- **Diseño Arquitectónico** - Diseños personalizados
- **Avalúos** - Avalúos técnicos profesionales
- **Permisos** - Gestión de licencias
- **Asesoría** - Consultoría especializada

### Funcionalidades
- ✅ Navegación fluida con React Router
- ✅ Scroll suave entre secciones
- ✅ Diseño responsive (móvil, tablet, desktop)
- ✅ Sistema de filtros en portfolio
- ✅ Títulos dinámicos por página
- ✅ Componentes reutilizables
- ✅ Botón flotante de WhatsApp
- ✅ Formulario de contacto
- ✅ Galería de imágenes
- ✅ Testimonios de clientes
- ✅ Estadísticas de la empresa

## 🚀 Tecnologías

- **React 18** - Framework principal
- **Vite** - Build tool y dev server
- **React Router DOM** - Enrutamiento
- **Tailwind CSS** - Estilos
- **Lucide React** - Iconos
- **shadcn/ui** - Componentes UI

## 📁 Estructura del Proyecto

```
arquiarte/
├── public/
│   ├── logo.svg                 # Logo de la empresa
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── ui/                  # Componentes base (botón, card, input, etc.)
│   │   ├── about.jsx           # Sección Quiénes Somos
│   │   ├── contact.jsx         # Formulario de contacto
│   │   ├── footer.jsx          # Footer
│   │   ├── header.jsx          # Header con navegación
│   │   ├── hero.jsx            # Hero principal
│   │   ├── projects.jsx        # Sección de proyectos
│   │   ├── services.jsx        # Grid de servicios
│   │   ├── why-invest.jsx      # Razones para invertir
│   │   ├── whatsapp-button.jsx # Botón flotante WhatsApp
│   │   ├── ServiceLayout.jsx   # Layout para páginas de servicios
│   │   └── ScrollToHash.jsx    # Manejo de scroll a secciones
│   ├── pages/
│   │   ├── services/
│   │   │   ├── Construccion.jsx
│   │   │   ├── Remodelaciones.jsx
│   │   │   ├── DisenoArquitectonico.jsx
│   │   │   ├── Avaluos.jsx
│   │   │   ├── Permisos.jsx
│   │   │   └── Asesoria.jsx
│   │   ├── Home.jsx            # Página principal
│   │   ├── Portfolio.jsx       # Portfolio completo
│   │   └── ProjectDetail.jsx   # Detalle de proyecto
│   ├── hooks/
│   │   └── usePageTitle.js     # Hook para títulos dinámicos
│   ├── App.jsx                 # Router principal
│   ├── main.jsx               # Entry point
│   └── index.css              # Estilos globales
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🛠️ Instalación y Uso

### Requisitos Previos
- Node.js 18+ 
- npm o yarn

### Instalación

```bash
# Clonar o navegar al proyecto
cd c:\xampp\htdocs\arquiarte

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

### URLs Principales

- **Home:** `http://localhost:5173/`
- **Portfolio:** `http://localhost:5173/portfolio`
- **Servicios:**
  - `http://localhost:5173/servicios/construccion`
  - `http://localhost:5173/servicios/remodelaciones`
  - `http://localhost:5173/servicios/diseno-arquitectonico`
  - `http://localhost:5173/servicios/avaluos`
  - `http://localhost:5173/servicios/permisos`
  - `http://localhost:5173/servicios/asesoria`
- **Proyecto:** `http://localhost:5173/proyecto/1`

## 🎨 Personalización

### Colores (Tailwind)
Los colores principales se definen en `tailwind.config.js`:
- **Primary:** Color principal de la marca
- **Secondary:** Color secundario
- **Accent:** Color de acento
- **Muted:** Tonos apagados para textos secundarios

### Imágenes
Todas las imágenes son de Unsplash. Para producción:
1. Reemplazar con imágenes reales del proyecto
2. Optimizar imágenes (WebP, lazy loading)
3. Usar CDN para mejor rendimiento

### Datos de Proyectos
Los proyectos están hardcodeados en `ProjectDetail.jsx`. Para producción:
1. Crear API backend o usar CMS
2. Implementar base de datos
3. Agregar sistema de gestión de contenido

## 📱 Responsive Design

El sitio es completamente responsive con breakpoints:
- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

## 🔗 Rutas y Navegación

### Navegación Interna (Home)
```jsx
// Scroll a secciones con hash
<a href="#servicios">Servicios</a>
<a href="#nosotros">Nosotros</a>
<a href="#contacto">Contacto</a>
```

### Navegación Externa (Otras páginas)
```jsx
// Link a Home con scroll
<Link to="/#servicios">Servicios</Link>

// Link directo
<Link to="/portfolio">Portfolio</Link>
<Link to="/servicios/construccion">Construcción</Link>
```

## 📦 Componentes Reutilizables

### ServiceLayout
Layout compartido para todas las páginas de servicios:
```jsx
<ServiceLayout
  title="Construcción"
  subtitle="Proyectos de construcción..."
  breadcrumb="Construcción"
>
  {/* Contenido */}
</ServiceLayout>
```

### usePageTitle Hook
Hook personalizado para títulos dinámicos:
```jsx
usePageTitle('Portfolio') // → "Portfolio | Arqui Arte"
usePageTitle('') // → "Arqui Arte - Construcción y Diseño"
```

## 🚧 Mejoras Futuras

- [ ] Backend con API REST
- [ ] Base de datos (MongoDB/PostgreSQL)
- [ ] Sistema de autenticación para administración
- [ ] CMS para gestión de contenido
- [ ] Blog de proyectos y noticias
- [ ] Sistema de cotizaciones online
- [ ] Integración con redes sociales
- [ ] Analytics y SEO optimization
- [ ] PWA (Progressive Web App)
- [ ] Multi-idioma (ES/EN)

## 📞 Contacto

**Arqui Arte**
- 📍 Ibagué, Tolima, Colombia
- 📧 info@arquiarte.com
- 📱 +57 300 123 4567
- 🌐 www.arquiarte.com

## 📄 Licencia

Proyecto privado - Todos los derechos reservados © 2025 Arqui Arte

---

Desarrollado con ❤️ para Arqui Arte

## React Compiler

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
