"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

const benefits = [
  { title: "Espacios más amplios", description: "Diseños que maximizan cada metro cuadrado" },
  { title: "Última tecnología", description: "Construcción con técnicas modernas" },
  { title: "Diseños innovadores", description: "Arquitectura contemporánea y funcional" },
  { title: "Flexibilidad en nuestros espacios", description: "Adaptamos el diseño a tus necesidades" },
  { title: "Calidad de vida", description: "Espacios pensados para tu bienestar" },
  { title: "Excelente valorización", description: "Inversión segura con gran potencial" },
]

export function WhyInvest() {
  return (
    <section className="py-24 px-4 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">¿Por qué invertir en Arqui Arte?</h2>
            <p className="text-lg leading-relaxed mb-6 text-primary-foreground/90">
              Invertir en la constructora más antigua de Ibagué es una decisión estratégica, respaldada por años de
              experiencia y estabilidad. Con una sólida reputación, esta empresa se ha ganado la confianza del mercado
              al ofrecer siempre <span className="font-semibold italic">obras y proyectos de calidad</span>.
            </p>
            <p className="text-lg leading-relaxed mb-8 text-primary-foreground/90">
              Su enfoque en la excelencia garantiza que cada proyecto sea duradero y bien ejecutado, lo que se traduce
              en una mayor rentabilidad a largo plazo.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-1 text-accent" />
                  <div>
                    <p className="font-semibold">{benefit.title}</p>
                    <p className="text-sm text-primary-foreground/80">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg"
              onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
            >
              Más Información
            </Button>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSldYj2RIQ7ddbdSLPksiAL4oi0TruI-xsQg&s"
                alt="Logo Arqui Arte"
                className="w-full max-w-md rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
