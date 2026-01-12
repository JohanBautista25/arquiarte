import { ServiceLayout } from "@/components/ServiceLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, FileText, Calculator, Shield, Clock, Award, Building, Home } from "lucide-react"

const avaluoTypes = [
  {
    icon: Home,
    title: "Avalúo Residencial",
    description: "Casas, apartamentos, condominios y propiedades residenciales",
    price: "Desde $180.000",
    duration: "3-5 días hábiles"
  },
  {
    icon: Building,
    title: "Avalúo Comercial",
    description: "Oficinas, locales comerciales, bodegas y propiedades comerciales",
    price: "Desde $250.000",
    duration: "5-7 días hábiles"
  },
  {
    icon: Calculator,
    title: "Avalúo Catastral",
    description: "Para efectos tributarios y actualizaciones catastrales",
    price: "Desde $150.000",
    duration: "2-3 días hábiles"
  },
  {
    icon: Shield,
    title: "Avalúo Bancario",
    description: "Para créditos hipotecarios y garantías bancarias",
    price: "Desde $200.000",
    duration: "3-4 días hábiles"
  }
]

const process = [
  {
    step: "01",
    title: "Solicitud de avalúo",
    description: "Contacto inicial y definición de requerimientos específicos"
  },
  {
    step: "02", 
    title: "Inspección técnica",
    description: "Visita presencial por parte de ingeniero avaluador certificado"
  },
  {
    step: "03",
    title: "Análisis de mercado",
    description: "Investigación de precios comparables en la zona"
  },
  {
    step: "04",
    title: "Cálculo y valoración",
    description: "Aplicación de metodologías técnicas avaluatorias"
  },
  {
    step: "05",
    title: "Informe final",
    description: "Entrega de avalúo técnico firmado y con respaldo legal"
  }
]

const certifications = [
  "Ingenieros avaluadores certificados IGAC",
  "Registro Nacional de Avaluadores - RNA",
  "Metodología UACI actualizada",
  "Seguros de responsabilidad civil profesional",
  "Respaldo legal y jurídico completo",
  "Validez ante entidades bancarias",
  "Cumplimiento normativo INVIAS",
  "Actualización constante en metodologías"
]

const useCases = [
  { title: "Créditos hipotecarios", description: "Avalúos bancarios para financiación" },
  { title: "Compraventa", description: "Determinación de valor justo de mercado" },
  { title: "Sucesiones", description: "Avalúos para procesos hereditarios" },
  { title: "Seguros", description: "Determinación de valor asegurable" },
  { title: "Divorcios", description: "Partición de bienes matrimoniales" },
  { title: "Sociedades", description: "Aportes de capital en especie" },
  { title: "Expropiaciones", description: "Procesos de utilidad pública" },
  { title: "Tributarios", description: "Declaración de renta y patrimonio" }
]

export default function Avaluos() {
  return (
    <ServiceLayout
      title="Avalúos"
      subtitle="Avalúos técnicos profesionales para propiedades residenciales y comerciales. Ingenieros certificados con respaldo legal y validez ante entidades bancarias."
      breadcrumb="Avalúos"
    >
      {/* Types of Avaluos */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tipos de Avalúo
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ofrecemos diferentes tipos de avalúo según tus necesidades específicas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {avaluoTypes.map((type, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardHeader className="p-0 mb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <type.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{type.title}</CardTitle>
                      <p className="text-muted-foreground text-sm mb-3">{type.description}</p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-semibold text-primary">{type.price}</span>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          {type.duration}
                        </div>
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
              Proceso de Avalúo
            </h2>
            <p className="text-lg text-muted-foreground">
              Metodología técnica y profesional que garantiza precisión y confiabilidad
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
                    <div>
                      <h3 className="font-serif text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              ¿Cuándo necesitas un avalúo?
            </h2>
            <p className="text-lg text-muted-foreground">
              Múltiples situaciones donde un avalúo técnico es indispensable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <CardHeader className="p-0 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-sm text-muted-foreground">{useCase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-4 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800"
                  alt="Proceso de avalúo profesional"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
            </div>

            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Certificaciones y Respaldo
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Nuestros avalúos tienen total validez legal y reconocimiento ante todas las 
                entidades bancarias y gubernamentales del país.
              </p>
              
              <div className="grid grid-cols-1 gap-3">
                {certifications.map((certification, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-foreground">{certification}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">RNA Certificado</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">Seguros RC</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Preguntas Frecuentes
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "¿Cuánto tiempo de validez tiene un avalúo?",
                answer: "Los avalúos tienen una validez de 6 meses para efectos bancarios y 1 año para efectos comerciales, según la normatividad vigente."
              },
              {
                question: "¿Qué documentos necesito para solicitar un avalúo?",
                answer: "Escritura de la propiedad, cédula catastral, impuesto predial vigente y cédula del propietario. En algunos casos se pueden requerir documentos adicionales."
              },
              {
                question: "¿El avalúo incluye todos los impuestos?",
                answer: "Sí, nuestros precios incluyen todos los impuestos y no hay costos ocultos. El precio final es el que se cotiza inicialmente."
              },
              {
                question: "¿Hacen avalúos en municipios cercanos?",
                answer: "Sí, cubrimos toda la región del Tolima y municipios aledaños. Consulta disponibilidad para tu ubicación específica."
              }
            ].map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="font-semibold text-lg mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </ServiceLayout>
  )
}
