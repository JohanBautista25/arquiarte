import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Hammer, FileText, Ruler, Shield, Lightbulb, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { SERVICES } from "@/constants"

const ICON_MAP = {
  Building2,
  Hammer,
  FileText,
  Ruler,
  Shield,
  Lightbulb,
}

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
          {SERVICES.map((service) => {
            const ServiceIcon = ICON_MAP[service.icon]
            return (
              <Card key={service.id} className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <ServiceIcon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-serif">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed mb-4">
                    {service.description}
                  </CardDescription>
                  <Link
                    to={service.link}
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
                  >
                    Saber más
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
