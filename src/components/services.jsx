import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Hammer, FileText, Ruler, Shield, Lightbulb, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

const services = [
  {
    icon: Building2,
    title: "Construcción",
    description: "Proyectos de construcción desde cero con los más altos estándares de calidad y acabados premium.",
    link: "/servicios/construccion"
  },
  {
    icon: Hammer,
    title: "Remodelaciones",
    description: "Transformamos espacios existentes en ambientes modernos y funcionales adaptados a tus necesidades.",
    link: "/servicios/remodelaciones"
  },
  {
    icon: Ruler,
    title: "Diseño Arquitectónico",
    description: "Diseños personalizados que combinan estética, funcionalidad y optimización de espacios.",
    link: "/servicios/diseno-arquitectonico"
  },
  {
    icon: FileText,
    title: "Avalúos",
    description: "Avalúos técnicos profesionales para propiedades residenciales y comerciales.",
    link: "/servicios/avaluos"
  },
  {
    icon: Shield,
    title: "Permisos",
    description: "Gestión completa de permisos y licencias de construcción ante las autoridades competentes.",
    link: "/servicios/permisos"
  },
  {
    icon: Lightbulb,
    title: "Asesoría",
    description: "Consultoría especializada para optimizar tu proyecto desde la planificación hasta la ejecución.",
    link: "/servicios/asesoria"
  },
]

export function Services() {
  return (
    <section id="servicios" className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-4">Nuestros Servicios</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Soluciones integrales para construcción y diseño en Ibagué, Tolima
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg group">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl font-serif">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed mb-4">{service.description}</CardDescription>
                <Link 
                  to={service.link}
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  Saber más
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
