import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, MapPin, Calendar, Ruler, Eye, Filter } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { usePageTitle } from "@/hooks/usePageTitle"

const projects = [
  {
    id: 1,
    title: "Casa Moderna Campestre Los Arrayanes",
    category: "Residencial",
    type: "Construcci├│n",
    location: "Ibagu├®, Tolima",
    area: "280 m┬▓",
    year: "2023",
    duration: "10 meses",
    budget: "$450.000.000",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
    description: "Moderna casa campestre con acabados de lujo y dise├▒o contempor├íneo",
    features: ["4 habitaciones", "3 ba├▒os", "Piscina", "Zona BBQ", "Doble garaje"],
    status: "Completado"
  },
  {
    id: 2,
    title: "Remodelaci├│n Apartamento Centro",
    category: "Residencial", 
    type: "Remodelaci├│n",
    location: "Centro, Ibagu├®",
    area: "95 m┬▓",
    year: "2023",
    duration: "3 meses",
    budget: "$85.000.000",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800",
    description: "Transformaci├│n completa de apartamento tradicional a moderno",
    features: ["Cocina integral", "Pisos de lujo", "Iluminaci├│n LED", "Closets personalizados"],
    status: "Completado"
  },
  {
    id: 3,
    title: "Edificio Residencial Vista Bella",
    category: "Residencial",
    type: "Construcci├│n", 
    location: "Ambal├í, Tolima",
    area: "1,200 m┬▓",
    year: "2022",
    duration: "18 meses",
    budget: "$1.200.000.000",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
    description: "Edificio residencial de 6 pisos con 12 apartamentos modernos",
    features: ["12 apartamentos", "Ascensor", "Porter├¡a", "Parqueaderos", "Zonas comunes"],
    status: "Completado"
  },
  {
    id: 4,
    title: "Centro Comercial Plaza Norte",
    category: "Comercial",
    type: "Construcci├│n",
    location: "Norte, Ibagu├®", 
    area: "800 m┬▓",
    year: "2023",
    duration: "12 meses",
    budget: "$950.000.000",
    image: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=800",
    description: "Centro comercial moderno con 15 locales comerciales",
    features: ["15 locales", "Parqueadero", "Food court", "Seguridad 24h", "Aire acondicionado"],
    status: "Completado"
  },
  {
    id: 5,
    title: "Casa Familiar Conjunto Reservado",
    category: "Residencial",
    type: "Construcci├│n",
    location: "Sur, Ibagu├®",
    area: "180 m┬▓", 
    year: "2023",
    duration: "8 meses",
    budget: "$320.000.000",
    image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800",
    description: "Casa de dos pisos con dise├▒o tradicional y acabados modernos",
    features: ["3 habitaciones", "2 ba├▒os", "Estudio", "Jard├¡n", "Garaje"],
    status: "Completado"
  },
  {
    id: 6,
    title: "Oficinas Corporativas TechHub",
    category: "Comercial",
    type: "Remodelaci├│n",
    location: "Centro, Ibagu├®",
    area: "450 m┬▓",
    year: "2023",
    duration: "4 meses", 
    budget: "$180.000.000",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800",
    description: "Remodelaci├│n integral de oficinas con espacios colaborativos",
    features: ["Espacios abiertos", "Salas de juntas", "Cafeter├¡a", "Tecnolog├¡a integrada"],
    status: "Completado"
  },
  {
    id: 7,
    title: "Villa Campestre El Bosque",
    category: "Residencial", 
    type: "Construcci├│n",
    location: "Cajamarca, Tolima",
    area: "350 m┬▓",
    year: "2022",
    duration: "14 meses",
    budget: "$680.000.000",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800",
    description: "Villa de lujo con vista panor├ímica y dise├▒o arquitect├│nico ├║nico",
    features: ["5 habitaciones", "4 ba├▒os", "Piscina infinita", "Spa", "Caballerizas"],
    status: "Completado"
  },
  {
    id: 8,
    title: "Restaurante Gourmet La Terraza",
    category: "Comercial",
    type: "Remodelaci├│n",
    location: "Zona Rosa, Ibagu├®",
    area: "220 m┬▓",
    year: "2023",
    duration: "2 meses",
    budget: "$120.000.000",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800",
    description: "Transformaci├│n completa de local en restaurante de alta cocina",
    features: ["Cocina profesional", "Terraza", "Bar", "Aire acondicionado", "Sonido"],
    status: "Completado"
  },
  {
    id: 9,
    title: "Conjunto Residencial Las Palmas",
    category: "Residencial",
    type: "Construcci├│n",
    location: "Picale├▒a, Ibagu├®",
    area: "2,800 m┬▓",
    year: "2024",
    duration: "24 meses",
    budget: "$2.100.000.000", 
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800",
    description: "Conjunto cerrado con 24 casas y completas zonas comunes",
    features: ["24 casas", "Piscina", "Gimnasio", "Parque infantil", "Seguridad"],
    status: "En construcci├│n"
  }
]

const categories = ["Todos", "Residencial", "Comercial"]
const types = ["Todos", "Construcci├│n", "Remodelaci├│n", "Dise├▒o"]

export default function Portfolio() {
  usePageTitle('Portfolio')
  const navigate = useNavigate()

  
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [selectedType, setSelectedType] = useState("Todos")
  const handleContactNav = (event) => {
    event.preventDefault()
    sessionStorage.setItem('scrollTarget', '#contacto')
    navigate('/')
  }

  const filteredProjects = projects.filter(project => {
    const categoryMatch = selectedCategory === "Todos" || project.category === selectedCategory
    const typeMatch = selectedType === "Todos" || project.type === selectedType
    return categoryMatch && typeMatch
  })

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-32 px-4 bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/20">
          <div className="max-w-7xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
              <Link to="/" className="hover:text-primary transition-colors">Inicio</Link>
              <span>/</span>
              <span className="text-foreground">Portfolio</span>
            </nav>

            {/* Back Button */}
            <Link 
              to="/"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver al inicio
            </Link>

            {/* Title */}
            <div className="max-w-4xl">
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6">
                Nuestro Portfolio
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                M├ís de 50 proyectos completados exitosamente en Ibagu├® y el Tolima. 
                Cada proyecto refleja nuestro compromiso con la calidad y la excelencia.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 bg-muted">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Proyectos completados</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <div className="text-muted-foreground">A├▒os de experiencia</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">15,000m┬▓</div>
                <div className="text-muted-foreground">├ürea construida</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">Clientes satisfechos</div>
              </div>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 px-4 bg-background border-b">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium">Filtrar por:</span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        selectedCategory === category
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  {types.map((type) => (
                    <button
                      key={type}
                      onClick={() => setSelectedType(type)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        selectedType === type
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 px-4 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="overflow-hidden group hover:shadow-lg transition-shadow flex flex-col">
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-2 py-1 bg-white/90 text-xs font-medium rounded">
                        {project.category}
                      </span>
                      <span className="px-2 py-1 bg-primary text-primary-foreground text-xs font-medium rounded">
                        {project.type}
                      </span>
                    </div>
                    {project.status === "En construcci├│n" && (
                      <div className="absolute top-4 right-4">
                        <span className="px-2 py-1 bg-yellow-500 text-white text-xs font-medium rounded">
                          En construcci├│n
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <CardContent className="p-6 flex flex-col flex-1">
                    <h3 className="font-serif text-xl font-bold mb-3 line-clamp-2 min-h-[3.5rem]">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2 min-h-[2.5rem]">{project.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-3 h-3 flex-shrink-0" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Ruler className="w-3 h-3 flex-shrink-0" />
                        <span>{project.area}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-3 h-3 flex-shrink-0" />
                        <span>{project.year}</span>
                      </div>
                    </div>

                    <Link 
                      to={`/proyecto/${project.id}`}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors w-full justify-center mt-auto"
                    >
                      <Eye className="w-4 h-4" />
                      Ver detalles
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-20">
                <h3 className="text-xl font-semibold text-muted-foreground mb-2">
                  No se encontraron proyectos
                </h3>
                <p className="text-muted-foreground">
                  Intenta con otros filtros o ve todos los proyectos disponibles
                </p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              ┬┐Listo para ser nuestro pr├│ximo proyecto exitoso?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              ├Ünete a nuestros clientes satisfechos y haz realidad tu proyecto de construcci├│n
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary rounded-lg font-medium hover:bg-gray-100 transition-colors"
                onClick={handleContactNav}
              >
                Solicitar cotizaci├│n
              </Link>
              <a 
                href="tel:+573002513950"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Llamar ahora
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
