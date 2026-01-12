import { ServiceLayout } from "@/components/ServiceLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, FileCheck, Building, Shield, Clock, AlertCircle, Users, CheckSquare } from "lucide-react"

const permissionTypes = [
  {
    icon: Building,
    title: "Licencia de Construcción",
    description: "Para obras nuevas, ampliaciones y modificaciones estructurales",
    duration: "30-45 días",
    entities: ["Curaduría Urbana", "Alcaldía Municipal"]
  },
  {
    icon: FileCheck,
    title: "Licencia de Adecuación",
    description: "Para remodelaciones interiores sin afectar estructura",
    duration: "15-20 días", 
    entities: ["Curaduría Urbana"]
  },
  {
    icon: Shield,
    title: "Licencias Ambientales",
    description: "Permisos ambientales y manejo de recursos naturales",
    duration: "45-60 días",
    entities: ["CORTOLIMA", "ANLA"]
  },
  {
    icon: Users,
    title: "Uso del Suelo",
    description: "Certificados de uso del suelo y norma urbanística",
    duration: "5-10 días",
    entities: ["Planeación Municipal"]
  }
]

const process = [
  {
    step: "01",
    title: "Evaluación inicial",
    description: "Análisis del proyecto y definición de permisos requeridos",
    duration: "1-2 días"
  },
  {
    step: "02",
    title: "Preparación de documentos",
    description: "Elaboración de planos y documentos técnicos necesarios",
    duration: "5-10 días"
  },
  {
    step: "03",
    title: "Radicación",
    description: "Presentación formal ante las entidades competentes",
    duration: "1 día"
  },
  {
    step: "04",
    title: "Seguimiento",
    description: "Seguimiento constante del proceso y respuesta a observaciones",
    duration: "Variable"
  },
  {
    step: "05",
    title: "Obtención",
    description: "Recepción y entrega de licencias y permisos aprobados",
    duration: "1-2 días"
  }
]

const advantages = [
  "Evitas multas y sanciones legales",
  "Garantizas la legalidad de tu proyecto",
  "Aumentas el valor de tu propiedad",
  "Facilitas futuras ventas o hipotecas",
  "Cumples con normativas técnicas",
  "Tienes respaldo ante entidades públicas",
  "Reduces riesgos de demolición",
  "Obtienes tranquilidad y seguridad jurídica"
]

const entities = [
  {
    name: "Curaduría Urbana de Ibagué",
    description: "Licencias de construcción y urbanismo",
    contact: "www.curaduria1ibague.com"
  },
  {
    name: "Alcaldía de Ibagué - Planeación",
    description: "Uso del suelo y norma urbanística",
    contact: "planeacion@ibague.gov.co"
  },
  {
    name: "CORTOLIMA",
    description: "Permisos ambientales regionales",
    contact: "www.cortolima.gov.co"
  },
  {
    name: "Bomberos Voluntarios",
    description: "Conceptos técnicos de seguridad",
    contact: "bomberosibague@outlook.com"
  }
]

const documents = [
  "Escritura de la propiedad",
  "Cédula catastral actualizada",
  "Certificado de libertad y tradición",
  "Impuesto predial al día",
  "Planos arquitectónicos",
  "Planos estructurales",
  "Estudio de suelos (si aplica)",
  "Estudio de tráfico (si aplica)",
  "Licencia ambiental (si aplica)",
  "Concepto de bomberos (si aplica)"
]

export default function Permisos() {
  return (
    <ServiceLayout
      title="Permisos"
      subtitle="Gestión completa de permisos y licencias de construcción ante las autoridades competentes. Te acompañamos en todo el proceso legal y administrativo."
      breadcrumb="Permisos"
    >
      {/* Types of Permissions */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tipos de Permisos
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Gestionamos todos los permisos necesarios para que tu proyecto sea completamente legal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {permissionTypes.map((type, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardHeader className="p-0 mb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <type.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{type.title}</CardTitle>
                      <p className="text-muted-foreground text-sm mb-3">{type.description}</p>
                      <div className="flex items-center gap-2 text-sm text-primary mb-2">
                        <Clock className="w-3 h-3" />
                        <span>{type.duration}</span>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        <span className="font-medium">Entidades: </span>
                        {type.entities.join(", ")}
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nuestro Proceso
            </h2>
            <p className="text-lg text-muted-foreground">
              Un proceso organizado que garantiza la obtención de todos los permisos necesarios
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {process.map((step, index) => (
                <Card key={index} className="p-6">
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                      {step.step}
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

      {/* Advantages */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                ¿Por qué es importante tener todos los permisos?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Construir sin los permisos adecuados puede resultar en multas, demoliciones y 
                problemas legales graves. Te ayudamos a evitar estos riesgos.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-foreground text-sm">{advantage}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800"
                  alt="Documentos y permisos legales"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-20 px-4 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Documentos Necesarios
            </h2>
            <p className="text-lg text-muted-foreground">
              Lista de documentos que típicamente se requieren para tramitar permisos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((document, index) => (
              <Card key={index} className="p-4">
                <div className="flex items-start gap-3">
                  <CheckSquare className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{document}</span>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
            <div className="flex gap-3">
              <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-yellow-800 mb-2">Nota importante</h4>
                <p className="text-yellow-700 text-sm">
                  Los documentos específicos pueden variar según el tipo de proyecto y ubicación. 
                  Te asesoramos sobre los requisitos exactos para tu caso particular.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Entities */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Entidades Competentes
            </h2>
            <p className="text-lg text-muted-foreground">
              Principales entidades donde gestionamos tus permisos en Ibagué y Tolima
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {entities.map((entity, index) => (
              <Card key={index} className="p-6">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-lg">{entity.name}</CardTitle>
                  <p className="text-muted-foreground text-sm">{entity.description}</p>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-sm text-primary">{entity.contact}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </ServiceLayout>
  )
}
