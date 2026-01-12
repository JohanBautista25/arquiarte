import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ArrowLeft, Phone, Mail } from "lucide-react"
import { Link } from "react-router-dom"
import { usePageTitle } from "@/hooks/usePageTitle"

export function ServiceLayout({ children, title, subtitle, breadcrumb }) {
  usePageTitle(breadcrumb)

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-32 px-4 bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/20">
          <div className="max-w-7xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
              <Link to="/" className="hover:text-primary transition-colors">Inicio</Link>
              <span>/</span>
              <span className="text-foreground">{breadcrumb}</span>
            </nav>

            {/* Back Button */}
            <Link 
              to="/"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver al inicio
            </Link>

            {/* Title */}
            <div className="max-w-4xl">
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6">
                {title}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        {children}

        {/* CTA Section */}
        <section className="py-20 px-4 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para comenzar tu proyecto?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Contáctanos hoy mismo y transformemos tus ideas en realidad
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+573002513950"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                <Phone className="w-4 h-4" />
                Llamar ahora
              </a>
              <Link 
                to="/#contacto"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 rounded-lg font-medium hover:bg-white/10 transition-colors"
              >
                <Mail className="w-4 h-4" />
                Solicitar cotización
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
