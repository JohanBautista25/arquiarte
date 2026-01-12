import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, MapPin, Calendar, Ruler, Clock, DollarSign, CheckCircle2, Users, Phone, Mail, ArrowRight } from "lucide-react"
import { Link, useParams } from "react-router-dom"
import { usePageTitle } from "@/hooks/usePageTitle"

// Mock data - en una aplicación real esto vendría de una API
const projectsData = {
  1: {
    title: "Casa Moderna Campestre Los Arrayanes",
    category: "Residencial",
    type: "Construcción",
    location: "Ibagué, Tolima",
    area: "280 m²",
    year: "2023",
    duration: "10 meses",
    budget: "$450.000.000",
    status: "Completado",
    client: "Familia Rodríguez",
    architect: "Arq. Carlos Mendoza",
    description: "Una impresionante casa campestre que combina la modernidad arquitectónica con la calidez del hogar. Este proyecto se desarrolló con materiales de primera calidad y acabados de lujo, creando espacios amplios y funcionales que se integran armoniosamente con el entorno natural.",
    features: [
      "4 habitaciones principales con baño privado",
      "3 baños completos y 2 medios baños",
      "Piscina con sistema de climatización",
      "Zona BBQ y terraza cubierta",
      "Doble garaje con depósito",
      "Cocina integral con electrodomésticos de lujo",
      "Sistema de domótica integrado",
      "Jardines paisajísticos"
    ],
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800"
    ],
    timeline: [
      { phase: "Diseño y planeación", duration: "2 meses", completed: true },
      { phase: "Cimentación y estructura", duration: "3 meses", completed: true },
      { phase: "Mampostería y cubiertas", duration: "2 meses", completed: true },
      { phase: "Instalaciones técnicas", duration: "2 meses", completed: true },
      { phase: "Acabados y detalles", duration: "1 mes", completed: true }
    ],
    materials: [
      "Estructura en concreto reforzado",
      "Mampostería en ladrillo prensado",
      "Cubierta en teja española premium",
      "Pisos en porcelanato importado",
      "Ventanería en aluminio y vidrio templado",
      "Acabados en pintura de alta gama"
    ],
    testimonial: {
      text: "Arqui Arte superó todas nuestras expectativas. La calidad de construcción es excepcional y el acompañamiento durante todo el proceso fue impecable. Nuestra casa de ensueño es ahora una realidad.",
      author: "María Rodríguez",
      role: "Propietaria"
    }
  },
  2: {
    title: "Remodelación Apartamento Centro",
    category: "Residencial", 
    type: "Remodelación",
    location: "Centro, Ibagué",
    area: "95 m²",
    year: "2023",
    duration: "3 meses",
    budget: "$85.000.000",
    status: "Completado",
    client: "Familia González",
    architect: "Arq. Laura Martínez",
    description: "Transformación completa de un apartamento tradicional en un espacio moderno y funcional. Se renovaron completamente la cocina, baños y pisos, incorporando acabados de lujo y optimizando cada metro cuadrado del espacio disponible.",
    features: [
      "Cocina integral con electrodomésticos de lujo",
      "Pisos en porcelanato de alto tráfico",
      "Iluminación LED empotrada en todos los espacios",
      "Closets personalizados en habitaciones",
      "Baños con acabados modernos y grifería importada",
      "Pintura de alta gama con acabado sedoso",
      "Ventanas con doble vidrio hermético",
      "Sistema de aire acondicionado centralizado"
    ],
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800",
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800",
      "https://images.unsplash.com/photo-1615873968403-89e068629265?w=800"
    ],
    timeline: [
      { phase: "Diseño de remodelación", duration: "1 semana", completed: true },
      { phase: "Demoliciones", duration: "1 semana", completed: true },
      { phase: "Instalaciones", duration: "3 semanas", completed: true },
      { phase: "Acabados", duration: "3 semanas", completed: true },
      { phase: "Entrega final", duration: "1 semana", completed: true }
    ],
    materials: [
      "Porcelanato rectificado 60x60",
      "Cocina integral en MDF laqueado",
      "Grifería europea de alta gama",
      "Closets en melamina de 18mm",
      "Pintura lavable premium",
      "Ventanería en aluminio termoacústico"
    ],
    testimonial: {
      text: "La remodelación superó nuestras expectativas. El apartamento luce completamente moderno y funcional. El equipo de Arqui Arte fue muy profesional y cumplió con los tiempos establecidos.",
      author: "Juan González",
      role: "Propietario"
    }
  },
  3: {
    title: "Edificio Residencial Vista Bella",
    category: "Residencial",
    type: "Construcción", 
    location: "Ambalá, Tolima",
    area: "1,200 m²",
    year: "2022",
    duration: "18 meses",
    budget: "$1.200.000.000",
    status: "Completado",
    client: "Inversiones VB S.A.S.",
    architect: "Arq. Roberto Sánchez",
    description: "Edificio residencial de 6 pisos con 12 apartamentos modernos, zonas comunes y parqueaderos. Este proyecto incluyó diseño arquitectónico completo, gestión de permisos y construcción llave en mano con acabados de primera calidad.",
    features: [
      "12 apartamentos de 2 y 3 habitaciones",
      "Ascensor para 6 personas",
      "Portería y vigilancia 24/7",
      "18 parqueaderos cubiertos",
      "Zonas comunes con gimnasio y salón social",
      "Terrace con zona BBQ",
      "Sistema de agua y energía de respaldo",
      "Acabados en porcelanato y aluminio"
    ],
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800",
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=800",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800"
    ],
    timeline: [
      { phase: "Diseño y permisos", duration: "3 meses", completed: true },
      { phase: "Excavación y cimentación", duration: "4 meses", completed: true },
      { phase: "Estructura y mampostería", duration: "6 meses", completed: true },
      { phase: "Instalaciones y acabados", duration: "4 meses", completed: true },
      { phase: "Entrega y escrituración", duration: "1 mes", completed: true }
    ],
    materials: [
      "Estructura en concreto reforzado de 3000 PSI",
      "Mampostería en bloque estructural",
      "Fachada en ladrillo a la vista y enchape",
      "Pisos en porcelanato 60x60",
      "Ventanería en aluminio y vidrio",
      "Ascensor marca Otis"
    ],
    testimonial: {
      text: "Excelente trabajo de Arqui Arte. Lograron completar el proyecto en tiempo récord manteniendo la calidad. Los apartamentos se vendieron rápidamente gracias a los buenos acabados.",
      author: "Carlos Mora",
      role: "Gerente de Inversiones VB"
    }
  },
  4: {
    title: "Centro Comercial Plaza Norte",
    category: "Comercial",
    type: "Construcción",
    location: "Norte, Ibagué", 
    area: "800 m²",
    year: "2023",
    duration: "12 meses",
    budget: "$950.000.000",
    status: "Completado",
    client: "Grupo Inmobiliario Norte S.A.S.",
    architect: "Arq. Patricia González",
    description: "Centro comercial moderno de dos niveles con 15 locales comerciales estratégicamente distribuidos. El proyecto incluye amplios parqueaderos, zona de comidas y sistemas de climatización y seguridad de última generación.",
    features: [
      "15 locales comerciales de diversos tamaños",
      "Food court con capacidad para 100 personas",
      "Parqueadero para 40 vehículos",
      "Sistema de aire acondicionado centralizado",
      "Ascensor y escaleras eléctricas",
      "Seguridad 24/7 con CCTV",
      "Sistema contra incendios automatizado",
      "Generación eléctrica de respaldo"
    ],
    images: [
      "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=800",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800",
      "https://images.unsplash.com/photo-1555421689-d68471e189f2?w=800",
      "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?w=800"
    ],
    timeline: [
      { phase: "Diseño arquitectónico y permisos", duration: "2 meses", completed: true },
      { phase: "Cimentación y estructura", duration: "4 meses", completed: true },
      { phase: "Mampostería y fachada", duration: "3 meses", completed: true },
      { phase: "Instalaciones eléctricas e hidráulicas", duration: "2 meses", completed: true },
      { phase: "Acabados y entrega", duration: "1 mes", completed: true }
    ],
    materials: [
      "Estructura metálica reforzada",
      "Fachada en vidrio templado y aluminio",
      "Pisos en porcelanato antideslizante",
      "Cielo raso en drywall",
      "Instalaciones eléctricas trifásicas",
      "Sistema HVAC centralizado"
    ],
    testimonial: {
      text: "El centro comercial superó nuestras expectativas. La calidad de la construcción y el cumplimiento de los tiempos fueron excepcionales. Todos los locales se arrendaron antes de la inauguración.",
      author: "Ricardo Martínez",
      role: "Director Grupo Inmobiliario Norte"
    }
  },
  5: {
    title: "Casa Familiar Conjunto Reservado",
    category: "Residencial",
    type: "Construcción",
    location: "Sur, Ibagué",
    area: "180 m²", 
    year: "2023",
    duration: "8 meses",
    budget: "$320.000.000",
    status: "Completado",
    client: "Familia Ramírez",
    architect: "Arq. Daniel Torres",
    description: "Casa unifamiliar de dos pisos con diseño tradicional y acabados modernos, ubicada en conjunto cerrado. El proyecto integra espacios funcionales con áreas verdes y una distribución que optimiza la luz natural.",
    features: [
      "3 habitaciones con closets empotrados",
      "2 baños completos con acabados en cerámica",
      "Estudio con vista al jardín",
      "Sala-comedor integrados",
      "Cocina integral moderna",
      "Jardín privado de 50 m²",
      "Garaje cubierto para 1 vehículo",
      "Zona de ropas independiente"
    ],
    images: [
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800"
    ],
    timeline: [
      { phase: "Diseño y planeación", duration: "1 mes", completed: true },
      { phase: "Cimentación y placa", duration: "2 meses", completed: true },
      { phase: "Mampostería primer piso", duration: "2 meses", completed: true },
      { phase: "Estructura segundo piso", duration: "2 meses", completed: true },
      { phase: "Acabados e instalaciones", duration: "1 mes", completed: true }
    ],
    materials: [
      "Estructura en concreto reforzado",
      "Mampostería en ladrillo tolete",
      "Cubierta en teja de barro",
      "Pisos en cerámica y porcelanato",
      "Ventanería en aluminio",
      "Pintura vinilo lavable"
    ],
    testimonial: {
      text: "Nuestra casa quedó hermosa, tal como la soñamos. El equipo de Arqui Arte fue muy profesional y nos acompañó en cada decisión. Estamos muy felices con el resultado.",
      author: "Ana Ramírez",
      role: "Propietaria"
    }
  },
  6: {
    title: "Oficinas Corporativas TechHub",
    category: "Comercial",
    type: "Remodelación",
    location: "Centro, Ibagué",
    area: "450 m²",
    year: "2023",
    duration: "4 meses", 
    budget: "$180.000.000",
    status: "Completado",
    client: "TechHub Colombia S.A.S.",
    architect: "Arq. Mónica Herrera",
    description: "Remodelación integral de oficinas corporativas con enfoque en espacios colaborativos modernos. Se rediseñó completamente la distribución para crear un ambiente de trabajo dinámico con zonas de coworking, salas de juntas y áreas de descanso.",
    features: [
      "Espacios abiertos con puestos flexibles",
      "4 salas de juntas equipadas",
      "Cafetería y zona de descanso",
      "Tecnología integrada en todas las áreas",
      "Iluminación LED inteligente",
      "Sistema de cableado estructurado",
      "Aire acondicionado por zonas",
      "Acabados minimalistas y modernos"
    ],
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800"
    ],
    timeline: [
      { phase: "Diseño de espacios colaborativos", duration: "2 semanas", completed: true },
      { phase: "Demolición y preparación", duration: "2 semanas", completed: true },
      { phase: "Instalaciones eléctricas y datos", duration: "1 mes", completed: true },
      { phase: "Drywall y acabados", duration: "1 mes", completed: true },
      { phase: "Mobiliario e integración tecnológica", duration: "1 mes", completed: true }
    ],
    materials: [
      "Drywall para divisiones livianas",
      "Pisos laminados de alto tráfico",
      "Vidrio templado para salas de juntas",
      "Cielo raso acústico",
      "Iluminación LED empotrada",
      "Cableado estructurado categoría 6A"
    ],
    testimonial: {
      text: "La transformación de nuestras oficinas fue increíble. Ahora tenemos un espacio moderno y funcional que ha mejorado la productividad de nuestro equipo. Arqui Arte entendió perfectamente nuestra visión.",
      author: "Andrés López",
      role: "CEO TechHub Colombia"
    }
  },
  7: {
    title: "Villa Campestre El Bosque",
    category: "Residencial", 
    type: "Construcción",
    location: "Cajamarca, Tolima",
    area: "350 m²",
    year: "2022",
    duration: "14 meses",
    budget: "$680.000.000",
    status: "Completado",
    client: "Familia Moreno",
    architect: "Arq. Fernando Rojas",
    description: "Villa de lujo ubicada en zona rural con vista panorámica a las montañas. Diseño arquitectónico único que integra elementos contemporáneos con el entorno natural, incluyendo áreas de esparcimiento y confort de primer nivel.",
    features: [
      "5 habitaciones con baño privado",
      "4 baños completos y 2 medios baños",
      "Piscina infinita con vista panorámica",
      "Spa con jacuzzi y sauna",
      "Caballerizas con capacidad para 4 caballos",
      "Kiosco con zona BBQ",
      "Bodega y cuarto de servicios",
      "Sistema de energía solar complementario"
    ],
    images: [
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800"
    ],
    timeline: [
      { phase: "Diseño arquitectónico especializado", duration: "3 meses", completed: true },
      { phase: "Adecuación de terreno", duration: "1 mes", completed: true },
      { phase: "Cimentación y estructura", duration: "4 meses", completed: true },
      { phase: "Mampostería y cubiertas", duration: "3 meses", completed: true },
      { phase: "Acabados de lujo y piscina", duration: "3 meses", completed: true }
    ],
    materials: [
      "Estructura en concreto de alta resistencia",
      "Mampostería en piedra natural y ladrillo",
      "Cubierta en teja de barro española",
      "Pisos en mármol italiano y madera fina",
      "Ventanería panorámica en aluminio",
      "Acabados de primera calidad"
    ],
    testimonial: {
      text: "Nuestra villa es un paraíso. Arqui Arte logró materializar nuestro sueño de tener un refugio campestre de lujo. Cada detalle fue cuidadosamente planeado y ejecutado a la perfección.",
      author: "Isabel Moreno",
      role: "Propietaria"
    }
  },
  8: {
    title: "Restaurante Gourmet La Terraza",
    category: "Comercial",
    type: "Remodelación",
    location: "Zona Rosa, Ibagué",
    area: "220 m²",
    year: "2023",
    duration: "2 meses",
    budget: "$120.000.000",
    status: "Completado",
    client: "Grupo Gastronómico Premium",
    architect: "Arq. Camila Vega",
    description: "Transformación completa de local comercial en restaurante de alta cocina. El diseño integra una cocina profesional con comedor elegante y terraza al aire libre, creando una experiencia gastronómica única.",
    features: [
      "Cocina profesional con equipamiento de última generación",
      "Terraza al aire libre con 20 mesas",
      "Bar de cocteles con barra en mármol",
      "Sistema de aire acondicionado silencioso",
      "Iluminación ambiental regulable",
      "Sistema de sonido profesional",
      "Baños modernos con acabados premium",
      "Almacén y cava climatizada"
    ],
    images: [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800"
    ],
    timeline: [
      { phase: "Diseño de espacios gastronómicos", duration: "1 semana", completed: true },
      { phase: "Demolición y adecuaciones", duration: "2 semanas", completed: true },
      { phase: "Instalaciones cocina profesional", duration: "3 semanas", completed: true },
      { phase: "Acabados y decoración", duration: "2 semanas", completed: true },
      { phase: "Montaje de equipos y pruebas", duration: "1 semana", completed: true }
    ],
    materials: [
      "Pisos en cerámica antideslizante",
      "Barra en mármol natural",
      "Cocina en acero inoxidable",
      "Mobiliario de madera fina",
      "Iluminación LED decorativa",
      "Ventanería panorámica"
    ],
    testimonial: {
      text: "La remodelación superó nuestras expectativas. El restaurante quedó elegante y funcional. Nuestros clientes quedan encantados con el ambiente y la infraestructura es perfecta para nuestras operaciones.",
      author: "Chef Julián Pérez",
      role: "Propietario La Terraza"
    }
  },
  9: {
    title: "Conjunto Residencial Las Palmas",
    category: "Residencial",
    type: "Construcción",
    location: "Picaleña, Ibagué",
    area: "2,800 m²",
    year: "2024",
    duration: "24 meses",
    budget: "$2.100.000.000", 
    status: "En construcción",
    client: "Constructora Horizonte Verde S.A.S.",
    architect: "Arq. Miguel Ángel Castro",
    description: "Proyecto de conjunto cerrado con 24 casas unifamiliares y amplias zonas comunes. Este desarrollo urbanístico ofrece viviendas modernas en un ambiente seguro con excelentes áreas recreativas para toda la familia.",
    features: [
      "24 casas de 2 modelos (120 m² y 150 m²)",
      "Piscina semi-olímpica",
      "Gimnasio totalmente equipado",
      "Parque infantil con juegos modernos",
      "Cancha múltiple",
      "Salón social con cocina",
      "Portería y seguridad 24/7",
      "Zonas verdes y senderos peatonales"
    ],
    images: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=800",
      "https://images.unsplash.com/photo-1600047509783-d07b8af542e1?w=800"
    ],
    timeline: [
      { phase: "Diseño urbanístico y permisos", duration: "4 meses", completed: true },
      { phase: "Obras de urbanismo", duration: "6 meses", completed: true },
      { phase: "Construcción casas fase 1 (12 casas)", duration: "8 meses", completed: false },
      { phase: "Construcción casas fase 2 (12 casas)", duration: "6 meses", completed: false },
      { phase: "Zonas comunes y entrega", duration: "2 meses", completed: false }
    ],
    materials: [
      "Estructura en concreto reforzado",
      "Mampostería en bloque estructural",
      "Cubierta en teja de barro",
      "Pisos en porcelanato",
      "Ventanería en aluminio",
      "Urbanismo con adoquín y zonas verdes"
    ],
    testimonial: {
      text: "El proyecto va avanzando según lo planeado. La calidad de construcción es excelente y hemos tenido gran aceptación en el mercado. Ya vendimos el 70% de las casas sobre planos.",
      author: "Luis Fernando Díaz",
      role: "Gerente Constructora Horizonte Verde"
    }
  }
}

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projectsData[id]

  usePageTitle(project ? project.title : 'Proyecto')

  if (!project) {
    return (
      <>
        <Header />
        <main className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Proyecto no encontrado</h1>
            <Link to="/portfolio" className="text-primary hover:underline">
              Volver al portfolio
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
              <Link to="/" className="hover:text-primary transition-colors">Inicio</Link>
              <span>/</span>
              <Link to="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link>
              <span>/</span>
              <span className="text-foreground">Detalle del proyecto</span>
            </nav>

            {/* Back Button */}
            <Link 
              to="/portfolio"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver al portfolio
            </Link>

            {/* Project Header */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="flex gap-2 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded">
                    {project.category}
                  </span>
                  <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm font-medium rounded">
                    {project.type}
                  </span>
                </div>
                
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
                  {project.title}
                </h1>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {project.description}
                </p>

                {/* Project Info */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <div>
                      <div className="text-sm text-muted-foreground">Ubicación</div>
                      <div className="font-medium">{project.location}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Ruler className="w-5 h-5 text-primary" />
                    <div>
                      <div className="text-sm text-muted-foreground">Área</div>
                      <div className="font-medium">{project.area}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <div>
                      <div className="text-sm text-muted-foreground">Año</div>
                      <div className="font-medium">{project.year}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <div>
                      <div className="text-sm text-muted-foreground">Duración</div>
                      <div className="font-medium">{project.duration}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Image */}
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="py-20 px-4 bg-muted">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Features */}
              <div>
                <h3 className="font-serif text-2xl font-bold mb-6">Características</h3>
                <div className="space-y-3">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Timeline */}
              <div>
                <h3 className="font-serif text-2xl font-bold mb-6">Cronograma</h3>
                <div className="space-y-4">
                  {project.timeline.map((phase, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                        phase.completed ? 'bg-primary' : 'bg-gray-300'
                      }`}>
                        {phase.completed && <CheckCircle2 className="w-4 h-4 text-white" />}
                      </div>
                      <div>
                        <div className="font-medium">{phase.phase}</div>
                        <div className="text-sm text-muted-foreground">{phase.duration}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Materials */}
              <div>
                <h3 className="font-serif text-2xl font-bold mb-6">Materiales</h3>
                <div className="space-y-3">
                  {project.materials.map((material, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2" />
                      <span className="text-foreground">{material}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="py-20 px-4 bg-background">
          <div className="max-w-7xl mx-auto">
            <h3 className="font-serif text-3xl font-bold text-center mb-12">Galería del Proyecto</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.images.slice(1).map((image, index) => (
                <div key={index} className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg group">
                  <img
                    src={image}
                    alt={`${project.title} - Imagen ${index + 2}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Team */}
        <section className="py-20 px-4 bg-muted">
          <div className="max-w-7xl mx-auto">
            <h3 className="font-serif text-3xl font-bold text-center mb-12">Equipo del Proyecto</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="font-bold mb-2">Cliente</h4>
                <p className="text-muted-foreground">{project.client}</p>
              </Card>
              
              <Card className="p-6 text-center">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="font-bold mb-2">Arquitecto</h4>
                <p className="text-muted-foreground">{project.architect}</p>
              </Card>
              
              <Card className="p-6 text-center">
                <DollarSign className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="font-bold mb-2">Presupuesto</h4>
                <p className="text-muted-foreground">{project.budget}</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-20 px-4 bg-background">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="font-serif text-3xl font-bold mb-12">Testimonio del Cliente</h3>
            
            <Card className="p-8">
              <blockquote className="text-lg italic text-muted-foreground mb-6">
                "{project.testimonial.text}"
              </blockquote>
              <div>
                <div className="font-bold">{project.testimonial.author}</div>
                <div className="text-sm text-muted-foreground">{project.testimonial.role}</div>
              </div>
            </Card>
          </div>
        </section>

        {/* Next Project CTA */}
        <section className="py-20 px-4 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              ¿Te inspiró este proyecto?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Hagamos realidad tu proyecto de construcción con la misma calidad y dedicación
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+573002513950"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                <Phone className="w-4 h-4" />
                Llamar ahora
              </a>
              <Link 
                to="/#contacto"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 rounded-lg font-medium hover:bg-white/10 transition-colors"
              >
                <Mail className="w-4 h-4" />
                Solicitar cotización
              </Link>
            </div>
          </div>
        </section>

        {/* Related Projects */}
        <section className="py-20 px-4 bg-muted">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <h3 className="font-serif text-3xl font-bold">Proyectos Relacionados</h3>
              <Link 
                to="/portfolio"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              >
                Ver todos los proyectos
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Object.entries(projectsData)
                .filter(([projId]) => projId !== id)
                .slice(0, 3)
                .map(([projId, proj]) => (
                  <Link key={projId} to={`/proyecto/${projId}`}>
                    <Card className="overflow-hidden group hover:shadow-lg transition-shadow">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={proj.images[0]}
                          alt={proj.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h4 className="font-bold mb-2">{proj.title}</h4>
                        <p className="text-sm text-muted-foreground">{proj.category} • {proj.type}</p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
