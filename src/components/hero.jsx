"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Sparkles, Building2, PenTool } from "lucide-react"

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Fondo con gradiente animado */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#a39382] via-[#c4b5a0] to-[#8d7d6b]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1),transparent)]" />
      </div>

      {/* Imagen de fondo con overlay */}
      <div className="absolute inset-0 opacity-15">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920')"
          }}
        />
      </div>

      {/* Elementos decorativos flotantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Icono decorativo superior */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <Sparkles className="w-12 h-12 text-white/80 animate-pulse" />
            <div className="absolute inset-0 blur-xl bg-white/30 rounded-full" />
          </div>
        </div>

        {/* Título principal con efecto */}
        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-6 tracking-tight drop-shadow-2xl">
          <span className="inline-block animate-fade-in">ARQUI ARTE</span>
        </h1>

        {/* Subtítulos con iconos */}
        <div className="space-y-6 mb-12">
          <div className="flex items-center justify-center gap-3 text-xl md:text-2xl text-white/95 font-light">
            <Building2 className="w-6 h-6" />
            <p>Construcción & Diseño</p>
            <PenTool className="w-6 h-6" />
          </div>
          
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed font-medium">
            Remodelaciones, obras nuevas y avalúos
          </p>
          
          <div className="relative inline-block">
            <p className="text-base md:text-lg text-white/80 italic px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              ✨ Diseñamos espacios que elevan tu vida
            </p>
          </div>
        </div>

        {/* Botones de acción mejorados */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button
            size="lg"
            className="bg-white text-[#a39382] hover:bg-white/90 px-8 py-6 text-lg font-semibold shadow-2xl hover:shadow-white/50 transition-all duration-300 hover:scale-105 group"
            onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
          >
            <span>Cotiza tu proyecto</span>
            <Sparkles className="w-4 h-4 ml-2 group-hover:rotate-12 transition-transform" />
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white/40 text-white hover:bg-white hover:text-[#a39382] px-8 py-6 text-lg font-semibold bg-white/5 backdrop-blur-sm transition-all duration-300 hover:scale-105"
            onClick={() => document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" })}
          >
            Ver servicios
          </Button>
        </div>

        {/* Estadísticas rápidas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-16">
          {[
            { value: "15+", label: "Años de experiencia" },
            { value: "200+", label: "Proyectos completados" },
            { value: "98%", label: "Clientes satisfechos" },
            { value: "24/7", label: "Atención disponible" }
          ].map((stat, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs md:text-sm text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Flecha animada */}
        <div className="animate-bounce">
          <ArrowDown className="w-8 h-8 text-white/60 mx-auto drop-shadow-lg" />
        </div>
      </div>

      {/* CSS para animaciones personalizadas */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .delay-500 {
          animation-delay: 500ms;
        }
        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </section>
  )
}
