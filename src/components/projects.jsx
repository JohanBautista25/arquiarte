"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, FileText } from "lucide-react"
import { Link } from "react-router-dom"
import { LOCATIONS } from "@/constants"

export function Projects() {
  return (
    <section id="proyectos" className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-4">Nuestros Proyectos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Conoce nuestros proyectos en diferentes ciudades de Colombia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {LOCATIONS.map((location, index) => (
            <Card key={index} className="overflow-hidden border-2 hover:border-primary transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={location.image || "/placeholder.svg"}
                  alt={`Proyectos en ${location.city}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-serif text-3xl font-bold mb-1">{location.city}</h3>
                  <p className="text-lg">{location.region}</p>
                  <div className="mt-4 flex items-center gap-2">
                    <div className="h-px flex-1 bg-white/30" />
                    <span className="text-2xl font-bold">{location.projects} PROYECTOS</span>
                    <div className="h-px flex-1 bg-white/30" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-xs text-muted-foreground">Zona Clientes</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-xs text-muted-foreground">Garantías</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-xs text-muted-foreground">PQRF</p>
                  </div>
                </div>
                <Link to="/portafolio">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Ver Proyectos</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-secondary text-secondary-foreground rounded-lg p-8 text-center">
          <h3 className="font-serif text-3xl font-bold mb-4">Cotiza ya tu futuro proyecto en Ibagué!</h3>
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg"
            onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
          >
            Solicitar Cotización
          </Button>
        </div>
      </div>
    </section>
  )
}
