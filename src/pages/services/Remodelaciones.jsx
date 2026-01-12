import { ServiceLayout } from "@/components/ServiceLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Hammer, Palette, Zap, Home, Sparkles, Clock } from "lucide-react"

const remodelingTypes = [
  {
    icon: Home,
    title: "Remodelación integral",
    description: "Transformación completa de tu hogar con nuevos espacios y distribución."
  },
  {
    icon: Palette,
    title: "Remodelación de cocinas",
    description: "Modernización completa con nuevos acabados, electrodomésticos y funcionalidad."
  },
  {
    icon: Sparkles,
    title: "Remodelación de baños",
    description: "Espacios elegantes y funcionales con acabados de lujo y tecnología moderna."
  },
  {
    icon: Zap,
    title: "Actualización eléctrica",
    description: "Modernización de instalaciones eléctricas para mayor seguridad y eficiencia."
  }
]

const beforeAfter = [
  {
    title: "Cocina Moderna",
    before: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400",
    after: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400",
    description: "Transformación completa de cocina tradicional a moderna"
  },
  {
    title: "Baño Principal",
    before: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400",
    after: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=400",
    description: "Renovación total con acabados de lujo y mayor funcionalidad"
  }
]

const advantages = [
  "Aumento del valor de la propiedad hasta en un 30%",
  "Mejora significativa en funcionalidad y confort",
  "Actualización a estándares modernos de eficiencia",
  "Personalización total según tus gustos",
  "Mayor aprovechamiento del espacio existente",
  "Incorporación de tecnología smart home",
  "Mejores materiales y acabados premium",
  "Garantía extendida en toda la remodelación"
]

export default function Remodelaciones() {
  return (
    <ServiceLayout
      title="Remodelaciones"
      subtitle="Transformamos espacios existentes en ambientes modernos y funcionales. Dale nueva vida a tu hogar con nuestro expertise en remodelación integral."
      breadcrumb="Remodelaciones"
    >
      {/* Types Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tipos de Remodelación
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Especializados en todo tipo de remodelaciones, desde renovaciones parciales hasta transformaciones completas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {remodelingTypes.map((type, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <type.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold mb-2">{type.title}</h3>
                    <p className="text-muted-foreground">{type.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-20 px-4 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Antes y Después
            </h2>
            <p className="text-lg text-muted-foreground">
              Mira las increíbles transformaciones que hemos logrado
            </p>
          </div>

          <div className="space-y-16">
            {beforeAfter.map((project, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-2">ANTES</p>
                    <div className="aspect-square rounded-lg overflow-hidden">
                      <img
                        src={project.before}
                        alt="Antes"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary mb-2">DESPUÉS</p>
                    <div className="aspect-square rounded-lg overflow-hidden">
                      <img
                        src={project.after}
                        alt="Después"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:order-first' : ''}>
                  <h3 className="font-serif text-2xl font-bold mb-4">{project.title}</h3>
                  <p className="text-lg text-muted-foreground mb-6">{project.description}</p>
                  <div className="flex items-center gap-2 text-primary">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">Duración: 6-8 semanas</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800"
                  alt="Remodelación moderna"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
            </div>

            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ventajas de Remodelar
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Una remodelación bien ejecutada no solo mejora tu calidad de vida, sino que también 
                representa una excelente inversión a largo plazo.
              </p>
              
              <div className="grid grid-cols-1 gap-3">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-foreground">{advantage}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 px-4 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Proceso de Remodelación
            </h2>
            <p className="text-lg text-muted-foreground">
              Un proceso organizado que minimiza las molestias y maximiza los resultados
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                { step: "01", title: "Evaluación inicial", description: "Análisis del espacio actual y definición de objetivos", duration: "1 semana" },
                { step: "02", title: "Diseño y presupuesto", description: "Creación de propuesta de diseño y presupuesto detallado", duration: "1-2 semanas" },
                { step: "03", title: "Permisos y preparación", description: "Gestión de permisos necesarios y preparación del espacio", duration: "1 semana" },
                { step: "04", title: "Ejecución", description: "Inicio de trabajos de remodelación con supervisión constante", duration: "4-12 semanas" },
                { step: "05", title: "Entrega y seguimiento", description: "Entrega del proyecto y seguimiento post-entrega", duration: "1 semana" }
              ].map((phase, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                    {phase.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-serif text-xl font-bold">{phase.title}</h3>
                      <span className="text-sm text-primary font-medium">{phase.duration}</span>
                    </div>
                    <p className="text-muted-foreground">{phase.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </ServiceLayout>
  )
}
