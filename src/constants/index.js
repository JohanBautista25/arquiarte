// Navigation items configuration
export const NAV_ITEMS = [
  { label: "Inicio", hashId: "inicio", path: "/" },
  { label: "Nuestros Servicios", hashId: "servicios", path: "/" },
  { label: "Quiénes Somos", hashId: "nosotros", path: "/" },
  { label: "Portafolio", hashId: null, path: "/portafolio" },
  { label: "Contacto", hashId: "contacto", path: "/" },
];

// Services configuration
export const SERVICES = [
  {
    id: "construccion",
    icon: "Building2",
    title: "Construcción",
    description:
      "Proyectos de construcción desde cero con los más altos estándares de calidad y acabados premium.",
    link: "/servicios/construccion",
  },
  {
    id: "remodelaciones",
    icon: "Hammer",
    title: "Remodelaciones",
    description:
      "Transformamos espacios existentes en ambientes modernos y funcionales adaptados a tus necesidades.",
    link: "/servicios/remodelaciones",
  },
  {
    id: "diseno",
    icon: "Ruler",
    title: "Diseño Arquitectónico",
    description:
      "Diseños personalizados que combinan estética, funcionalidad y optimización de espacios.",
    link: "/servicios/diseno-arquitectonico",
  },
  {
    id: "avaluos",
    icon: "FileText",
    title: "Avalúos",
    description: "Avalúos técnicos profesionales para propiedades residenciales y comerciales.",
    link: "/servicios/avaluos",
  },
  {
    id: "permisos",
    icon: "Shield",
    title: "Permisos",
    description:
      "Gestión completa de permisos y licencias de construcción ante las autoridades competentes.",
    link: "/servicios/permisos",
  },
  {
    id: "asesoria",
    icon: "Lightbulb",
    title: "Asesoría",
    description:
      "Consultoría especializada para optimizar tu proyecto desde la planificación hasta la ejecución.",
    link: "/servicios/asesoria",
  },
];

// About features
export const ABOUT_FEATURES = [
  "Más de 10 años de experiencia",
  "Equipo profesional certificado",
  "Materiales de primera calidad",
  "Cumplimiento de plazos garantizado",
  "Presupuestos transparentes",
  "Atención personalizada 24/7",
];

// Hero statistics
export const HERO_STATS = [
  { value: "15+", label: "Años de experiencia" },
  { value: "200+", label: "Proyectos completados" },
  { value: "98%", label: "Clientes satisfechos" },
  { value: "24/7", label: "Atención disponible" },
];

// Locations
export const LOCATIONS = [
  {
    city: "Ibagué",
    region: "y Tolima",
    projects: 15,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20pantalla%202025-09-30%20162101-1RYGDkLq9fNnXDDxl7PjSyOMVrBt6J.png",
  },
  {
    city: "Bogotá",
    region: "y Sabana",
    projects: 8,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20pantalla%202025-09-30%20162101-1RYGDkLq9fNnXDDxl7PjSyOMVrBt6J.png",
  },
];

// Contact information
export const CONTACT_INFO = {
  email: "johanbautista1022@gmail.com",
  whatsapp: "+573002513950",
  instagram: "https://instagram.com/arquiarte.col",
  facebook: "https://facebook.com",
};

// Brand information
export const BRAND = {
  name: "ARQUI ARTE",
  tagline: "Diseñamos espacios que elevan tu vida",
  location: "Ibagué, Tolima",
  description:
    "Empresa de construcción y diseño en Ibagué, Tolima. Diseñamos espacios que elevan tu vida.",
};

// Service details configuration
export const SERVICE_DETAILS = {
  construccion: {
    title: "Construcción",
    subtitle:
      "Proyectos de construcción desde cero con los más altos estándares de calidad y acabados premium. Transformamos tu visión en realidad con experiencia de más de 10 años.",
    breadcrumb: "Construcción",
    featuresTitle: "¿Por qué elegir nuestro servicio de construcción?",
    featuresDescription:
      "Construimos más que edificaciones, creamos espacios que reflejan tu personalidad y satisfacen tus necesidades con la más alta calidad y durabilidad.",
    features: [
      "Construcción residencial y comercial",
      "Materiales de primera calidad certificados",
      "Equipo técnico especializado y certificado",
      "Supervisión arquitectónica permanente",
      "Cumplimiento estricto de cronogramas",
      "Garantía de 2 años en estructura",
      "Seguimiento post-entrega",
      "Financiamiento disponible",
    ],
    featureImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
    stats: [
      { value: "50+", label: "Proyectos completados" },
      { value: "10+", label: "Años de experiencia" },
      { value: "100%", label: "Clientes satisfechos" },
      { value: "2 años", label: "Garantía estructural" },
    ],
  },
  remodelaciones: {
    title: "Remodelaciones",
    subtitle:
      "Transformamos espacios existentes en ambientes modernos y funcionales. Remodelamos tu hogar o negocio con diseño contemporáneo.",
    breadcrumb: "Remodelaciones",
    featuresTitle: "¿Por qué elegir nuestro servicio de remodelación?",
    featuresDescription:
      "Especializados en transformar espacios existentes con diseños innovadores, manteniendo funcionalidad y maximizando el valor de tu propiedad.",
    features: [
      "Diseño integral de espacios",
      "Materiales premium y acabados modernos",
      "Gestión eficiente del proyecto",
      "Mínima disruption durante la obra",
      "Asesoría completa en diseño",
      "Garantía de acabados",
      "Financiamiento disponible",
      "Equipo profesional certificado",
    ],
    featureImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800",
    stats: [
      { value: "80+", label: "Remodelaciones completadas" },
      { value: "5+", label: "Años especializados" },
      { value: "95%", label: "Clientes satisfechos" },
      { value: "1 año", label: "Garantía de acabados" },
    ],
  },
  diseno: {
    title: "Diseño Arquitectónico",
    subtitle:
      "Diseños personalizados que combinan estética, funcionalidad y optimización de espacios. Creamos proyectos únicos y memorables.",
    breadcrumb: "Diseño Arquitectónico",
    featuresTitle: "¿Por qué elegir nuestro servicio de diseño?",
    featuresDescription:
      "Nuestro equipo de arquitectos crea diseños innovadores que maximizan espacios y reflejan tu estilo personal.",
    features: [
      "Diseños personalizados y únicos",
      "Tecnología 3D y visualización",
      "Optimización de espacios",
      "Normatividad y códigos",
      "Sostenibilidad integrada",
      "Diseño interior y exterior",
      "Consultoría técnica completa",
      "Acompañamiento en ejecución",
    ],
    featureImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
    stats: [
      { value: "150+", label: "Diseños realizados" },
      { value: "15+", label: "Años de experiencia" },
      { value: "98%", label: "Proyectos ejecutados" },
      { value: "100%", label: "Satisfacción de clientes" },
    ],
  },
  avaluos: {
    title: "Avalúos",
    subtitle:
      "Avalúos técnicos profesionales para propiedades residenciales y comerciales. Evaluaciones certificadas por profesionales.",
    breadcrumb: "Avalúos",
    featuresTitle: "¿Por qué confiar en nuestros avalúos?",
    featuresDescription:
      "Realizamos evaluaciones técnicas profesionales con metodologías actualizadas y reconocidas internacionalmente.",
    features: [
      "Avalúos residenciales",
      "Avalúos comerciales",
      "Avalúos de propiedades rurales",
      "Metodología internacionalmente reconocida",
      "Profesionales certificados",
      "Reportes detallados",
      "Documentos legales válidos",
      "Respaldo técnico garantizado",
    ],
    featureImage: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=800",
    stats: [
      { value: "500+", label: "Avalúos realizados" },
      { value: "12+", label: "Años especializados" },
      { value: "100%", label: "Certificados válidos" },
      { value: "24h", label: "Entrega de reportes" },
    ],
  },
  permisos: {
    title: "Permisos",
    subtitle:
      "Gestión completa de permisos y licencias de construcción ante las autoridades competentes. Trámites ágiles y seguros.",
    breadcrumb: "Permisos",
    featuresTitle: "¿Por qué confiar en nuestro servicio de permisos?",
    featuresDescription:
      "Gestionamos todos los trámites necesarios ante autoridades municipales y departamentales con eficiencia y transparencia.",
    features: [
      "Gestión de licencias de construcción",
      "Trámites ante Curadurías",
      "Permisos ambientales",
      "Permisos de funcionamiento",
      "Cambio de uso del suelo",
      "Regularización de propiedades",
      "Asesoría normativa",
      "Seguimiento de trámites",
    ],
    featureImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
    stats: [
      { value: "200+", label: "Permisos gestionados" },
      { value: "10+", label: "Años de experiencia" },
      { value: "99%", label: "Aprobación de trámites" },
      { value: "15 días", label: "Promedio de gestión" },
    ],
  },
  asesoria: {
    title: "Asesoría",
    subtitle:
      "Consultoría especializada para optimizar tu proyecto desde la planificación hasta la ejecución. Acompañamiento integral.",
    breadcrumb: "Asesoría",
    featuresTitle: "¿Por qué contratar nuestro servicio de asesoría?",
    featuresDescription:
      "Contamos con expertos que guían cada paso de tu proyecto para maximizar resultados y minimizar riesgos.",
    features: [
      "Consultoría pre-inversión",
      "Análisis de viabilidad",
      "Planificación integral",
      "Gestión de proyectos",
      "Control de costos",
      "Supervisión técnica",
      "Asesoría legal y financiera",
      "Capacitación y seguimiento",
    ],
    featureImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800",
    stats: [
      { value: "300+", label: "Proyectos asesorados" },
      { value: "15+", label: "Años de experiencia" },
      { value: "100%", label: "ROI optimizado" },
      { value: "99%", label: "Clientes satisfechos" },
    ],
  },
};
