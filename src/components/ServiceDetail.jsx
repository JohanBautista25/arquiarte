import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Users, Building2, Clock, Shield, Award, Wrench, FileText } from "lucide-react"
import { ServiceLayout } from "@/components/ServiceLayout"

const ICON_MAP = {
  Users,
  Building2,
  Clock,
  Shield,
  Award,
  Wrench,
  FileText,
}

// Default process steps (can be overridden per service)
const DEFAULT_PROCESS_STEPS = [
  {
    icon: "Users",
    title: "Consulta inicial",
    description: "Reunión para entender tus necesidades, presupuesto y visión del proyecto."
  },
  {
    icon: "Building2",
    title: "Análisis y planificación",
    description: "Análisis detallado y creación de un plan de acción personalizado."
  },
  {
    icon: "Shield",
    title: "Permisos y validación",
    description: "Gestión de todos los requisitos legales y normativos necesarios."
  },
  {
    icon: "Wrench",
    title: "Ejecución",
    description: "Implementación del proyecto con supervisión constante y control de calidad."
  },
  {
    icon: "Award",
    title: "Entrega y garantía",
    description: "Entrega del proyecto terminado con garantía y soporte post-venta."
  }
]

const DEFAULT_PROJECTS = [
  {
    title: "Proyecto 1",
    area: "180 m²",
    duration: "8 meses",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500"
  },
  {
    title: "Proyecto 2",
    area: "1,200 m²",
    duration: "18 meses",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500"
  },
  {
    title: "Proyecto 3",
    area: "800 m²",
    duration: "12 meses",
    image: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=500"
  }
]

export function ServiceDetail({
  title,
  subtitle,
  breadcrumb,
  featuresTitle,
  featuresDescription,
  features,
  featureImage,
  stats,
  processSteps = DEFAULT_PROCESS_STEPS,
  projects = DEFAULT_PROJECTS,
}) {
  return (
    <ServiceLayout title={title} subtitle={subtitle} breadcrumb={breadcrumb}>
      {/* Features Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                {featuresTitle}
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {featuresDescription}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={featureImage}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nuestro Proceso
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Un proceso estructurado y transparente que garantiza resultados excepcionales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map((step, index) => {
              const StepIcon = ICON_MAP[step.icon]
              return (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <StepIcon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Proyectos Destacados
            </h2>
            <p className="text-lg text-muted-foreground">
              Algunos de nuestros proyectos más exitosos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-bold mb-3">{project.title}</h3>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Área: {project.area}</span>
                    <span>Duración: {project.duration}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ServiceLayout>
  )
}
