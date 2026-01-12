import { CheckCircle2 } from "lucide-react"
import { Link } from "react-router-dom"
import { ABOUT_FEATURES, BRAND } from "@/constants"

export function About() {
  return (
    <section id="nosotros" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Transformamos Espacios, Creamos Experiencias
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              En <span className="font-semibold text-foreground">{BRAND.name}</span>, somos más que una empresa de construcción. 
              Somos artesanos del espacio, donde cada proyecto refleja la visión única de nuestros clientes y se convierte 
              en una obra de arte arquitectónica.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Combinamos la innovación técnica con la sensibilidad artística para crear espacios que no solo cumplen 
              una función, sino que inspiran y elevan la calidad de vida de quienes los habitan.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {ABOUT_FEATURES.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contacto"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors text-center"
              >
                Solicitar Cotización
              </a>
              <Link 
                to="/portafolio"
                className="px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-colors text-center"
              >
                Ver Portafolio
              </Link>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://ekosnegocios.com/image/posts/March2023/RJxQnyLNHTE8XJwItGdD.jpg"
                alt="Proyecto de construcción Arqui Arte"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            {/* Elementos decorativos con mejor posicionamiento */}
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/20 rounded-2xl -z-10" />
            
            {/* Badge flotante */}
            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
              <p className="text-sm font-semibold text-primary">+10 años</p>
              <p className="text-xs text-muted-foreground">de experiencia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
