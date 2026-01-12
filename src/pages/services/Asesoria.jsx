import { ServiceLayout } from "@/components/ServiceLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Lightbulb, Users, Calculator, TrendingUp, MapPin, Clock, Phone } from "lucide-react"

const advisoryServices = [
  {
    icon: Lightbulb,
    title: "Consultoría de Proyectos",
    description: "Asesoría integral desde la concepción hasta la ejecución del proyecto",
    services: ["Análisis de viabilidad", "Optimización de costos", "Cronograma de obra", "Gestión de riesgos"]
  },
  {
    icon: Calculator,
    title: "Presupuestos y Costos",
    description: "Análisis detallado de costos y optimización presupuestaria",
    services: ["Presupuestos detallados", "Análisis de precios unitarios", "Control de costos", "Comparativo de proveedores"]
  },
  {
    icon: Users,
    title: "Gerencia de Obra",
    description: "Supervisión técnica y administrativa durante la construcción",
    services: ["Supervisión técnica", "Control de calidad", "Seguimiento de cronograma", "Administración de contratos"]
  },
  {
    icon: TrendingUp,
    title: "Inversión Inmobiliaria",
    description: "Asesoría especializada para inversionistas inmobiliarios",
    services: ["Análisis de mercado", "Evaluación de rentabilidad", "Estrategias de inversión", "Due diligence"]
  }
]

const process = [
  {
    title: "Diagnóstico inicial",
    description: "Evaluamos tu situación actual y definimos objetivos específicos",
    duration: "1-2 reuniones"
  },
  {
    title: "Análisis técnico",
    description: "Estudio detallado de viabilidad técnica y económica",
    duration: "3-5 días"
  },
  {
    title: "Propuesta de solución",
    description: "Presentación de alternativas y recomendaciones específicas",
    duration: "1 reunión"
  },
  {
    title: "Implementación",
    description: "Acompañamiento en la ejecución de las recomendaciones",
    duration: "Variable"
  },
  {
    title: "Seguimiento",
    description: "Monitoreo de resultados y ajustes necesarios",
    duration: "Continuo"
  }
]

const expertiseAreas = [
  "Normativa urbanística y construcción",
  "Análisis de mercado inmobiliario",
  "Optimización de recursos y materiales",
  "Tecnologías constructivas innovadoras",
  "Sostenibilidad y construcción verde",
  "Gestión de proyectos PMI",
  "Análisis financiero de proyectos",
  "Resolución de conflictos constructivos"
]

const benefits = [
  {
    title: "Ahorro de tiempo",
    description: "Evita errores costosos y acelera la toma de decisiones",
    icon: Clock
  },
  {
    title: "Reducción de costos",
    description: "Optimización de recursos y identificación de ahorros",
    icon: TrendingUp
  },
  {
    title: "Minimización de riesgos",
    description: "Identificación temprana de problemas potenciales",
    icon: CheckCircle2
  },
  {
    title: "Expertise especializado",
    description: "Acceso a conocimiento técnico actualizado",
    icon: Lightbulb
  }
]

export default function Asesoria() {
  return (
    <ServiceLayout
      title="Asesoría"
      subtitle="Consultoría especializada para optimizar tu proyecto desde la planificación hasta la ejecución. Minimiza riesgos y maximiza resultados con nuestro expertise."
      breadcrumb="Asesoría"
    >
      {/* Advisory Services */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Servicios de Asesoría
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Acompañamiento especializado en todas las etapas de tu proyecto inmobiliario
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advisoryServices.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardHeader className="p-0 mb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                      <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="grid grid-cols-2 gap-2">
                    {service.services.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-3 h-3 text-primary flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Beneficios de Nuestra Asesoría
            </h2>
            <p className="text-lg text-muted-foreground">
              Ventajas concretas que obtienes al contar con nuestro acompañamiento
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 text-center">
                <CardHeader className="p-0 mb-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nuestro Proceso de Asesoría
            </h2>
            <p className="text-lg text-muted-foreground">
              Metodología estructurada que garantiza resultados efectivos
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {process.map((step, index) => (
                <Card key={index} className="p-6">
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-serif text-xl font-bold">{step.title}</h3>
                        <span className="text-sm text-primary font-medium">{step.duration}</span>
                      </div>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-20 px-4 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800"
                  alt="Asesoría profesional en construcción"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
            </div>

            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Áreas de Especialización
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Nuestro equipo cuenta con experiencia sólida en múltiples áreas del sector 
                construcción e inmobiliario.
              </p>
              
              <div className="grid grid-cols-1 gap-3">
                {expertiseAreas.map((area, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-foreground">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* Contact CTA */}
      <section className="py-20 px-4 bg-muted">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
            ¿Necesitas una consulta personalizada?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Agenda una reunión inicial gratuita para evaluar tu proyecto
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+573002513950"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Llamar para agendar
            </a>
            <a 
              href="https://wa.me/573002513950"
              className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <MapPin className="w-4 h-4" />
              Reunión presencial
            </a>
          </div>
        </div>
      </section>
    </ServiceLayout>
  )
}
