"use client"

import { useState } from "react"
import { MapPin, Mail, Phone, Menu, X, Facebook, Instagram, Youtube } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  const navItems = [
    { label: "Inicio", href: isHomePage ? "#inicio" : "/", isLink: !isHomePage },
    { label: "Nuestros Servicios", href: isHomePage ? "#servicios" : "/#servicios", isLink: !isHomePage },
    { label: "Quiénes Somos", href: isHomePage ? "#nosotros" : "/#nosotros", isLink: !isHomePage },
    { label: "Portfolio", href: "/portfolio", isLink: true },
    { label: "Contacto", href: isHomePage ? "#contacto" : "/#contacto", isLink: !isHomePage },
  ]

  return (
    <header className="fixed top-0 left-0 w-full z-50 shadow-md bg-background">

      {/* Main navigation */}
      <div className="bg-background border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="font-serif text-2xl font-bold text-foreground hover:text-primary transition-colors">
                ARQUI ARTE
              </Link>
            </div>

            {/* Desktop navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                item.isLink ? (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="text-foreground hover:text-primary transition-colors font-medium"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-foreground hover:text-primary transition-colors font-medium"
                  >
                    {item.label}
                  </a>
                )
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden py-4 border-t">
              {navItems.map((item) => (
                item.isLink ? (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                )
              ))}
            </nav>
          )}
        </div>
      </div>
    </header>
  )
}
