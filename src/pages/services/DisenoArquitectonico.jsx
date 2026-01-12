import { ServiceLayout } from "@/components/ServiceLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Ruler, Lightbulb, Eye, Layers, ArrowRight, Download } from "lucide-react"

const designServices = [
  {
    icon: Ruler,
    title: "Diseño Arquitectónico Residencial",
    description: "Casas unifamiliares, apartamentos y condominios con diseños personalizados.",
    features: ["Planos arquitectónicos", "Fachadas 3D", "Distribución optimizada", "Cumplimiento normativo"]
  },
  {
    icon: Lightbulb,
    title: "Diseño Arquitectónico Comercial", 
    description: "Oficinas, locales comerciales y espacios corporativos funcionales y atractivos.",
    features: ["Análisis de flujo", "Diseño de marca", "Espacios eficientes", "Accesibilidad universal"]
  },
  {
    icon: Eye,
    title: "Diseño de Interiores",
    description: "Espacios interiores que combinan estética, funcionalidad y confort.",
    features: ["Mobiliario personalizado", "Iluminación especializada", "Materiales premium", "Espacios ergonómicos"]
  },
  {
    icon: Layers,
    title: "Diseño Paisajístico",
    description: "Jardines y espacios exteriores que complementan perfectamente tu proyecto.",
    features: ["Diseño de jardines", "Sistemas de riego", "Iluminación exterior", "Mobiliario urbano"]
  }
]

const designProcess = [
  { title: "Briefing inicial", description: "Entendemos tus necesidades, gustos y presupuesto" },
  { title: "Análisis del sitio", description: "Estudio topográfico y análisis de condiciones" },
  { title: "Concepto de diseño", description: "Desarrollo de la idea principal y partido arquitectónico" },
  { title: "Anteproyecto", description: "Primeros bocetos y plantas arquitectónicas básicas" },
  { title: "Proyecto ejecutivo", description: "Planos detallados listos para construcción" },
  { title: "Renderizado 3D", description: "Visualizaciones fotorrealistas del proyecto" }
]

const portfolioItems = [
  {
    title: "Casa Moderna Campestre",
    type: "Residencial",
    area: "220 m²",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500",
    description: "Diseño contemporáneo que integra naturaleza y arquitectura moderna"
  },
  {
    title: "Oficina Corporativa",
    type: "Comercial", 
    area: "450 m²",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=500",
    description: "Espacios de trabajo colaborativos con identidad corporativa"
  },
  {
    title: "Apartamento Moderno",
    type: "Residencial",
    area: "85 m²",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500", 
    description: "Optimización de espacios pequeños con gran impacto visual"
  }
]

export default function DisenoArquitectonico() {
  return (
    <ServiceLayout
      title="Diseño Arquitectónico"
      subtitle="Diseños personalizados que combinan estética, funcionalidad y optimización de espacios. Creamos proyectos únicos que reflejan tu personalidad y estilo de vida."
      breadcrumb="Diseño Arquitectónico"
    >
      {/* Services Overview */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Servicios de Diseño
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ofrecemos soluciones integrales de diseño arquitectónico para todo tipo de proyectos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {designServices.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardHeader className="p-0 mb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                      <p className="text-muted-foreground text-sm">{service.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-3 h-3 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-20 px-4 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Proceso de Diseño
            </h2>
            <p className="text-lg text-muted-foreground">
              Un metodología probada que garantiza resultados excepcionales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {designProcess.map((step, index) => (
              <div key={index} className="relative">
                <Card className="h-full">
                  <CardHeader>
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold mb-4">
                      {index + 1}
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
                {index < designProcess.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-1/2 -right-3 w-6 h-6 text-primary transform -translate-y-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Portfolio de Diseños
            </h2>
            <p className="text-lg text-muted-foreground">
              Algunos de nuestros proyectos de diseño más destacados
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                      {item.type}
                    </span>
                    <span className="text-xs text-muted-foreground">{item.area}</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Software & Tools */}
      <section className="py-20 px-4 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Herramientas Profesionales
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Utilizamos las herramientas más avanzadas del mercado para garantizar 
                precisión y calidad en cada diseño.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  "AutoCAD 2024",
                  "Revit Architecture", 
                  "SketchUp Pro",
                  "3ds Max + V-Ray",
                  "Lumion 12",
                  "Adobe Creative Suite"
                ].map((tool, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm">{tool}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
                  <Download className="w-4 h-4" />
                  Descargar Portfolio Completo
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800"
                  alt="Proceso de diseño"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>
    </ServiceLayout>
  )
}
