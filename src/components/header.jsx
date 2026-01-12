"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { NAV_ITEMS, BRAND } from "@/constants"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const isHomePage = location.pathname === '/'

  const getNavHref = (item) => {
    if (item.hashId) {
      return isHomePage ? `#${item.hashId}` : `${item.path}#${item.hashId}`
    }
    return item.path
  }

  const shouldUseAnchor = (item) => item.hashId
  const handleHashNav = (event, item) => {
    event.preventDefault()
    if (isHomePage) {
      const element = document.getElementById(item.hashId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
      return
    }
    sessionStorage.setItem('scrollTarget', `#${item.hashId}`)
    navigate('/')
  }
  const isItemActive = (item) => {
    if (item.hashId) {
      return isHomePage
    }
    return location.pathname === item.path
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 shadow-md bg-background">
      <div className="bg-background border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="font-serif text-2xl font-bold text-foreground hover:text-primary transition-colors">
              {BRAND.name}
            </Link>

            {/* Desktop navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {NAV_ITEMS.map((item) =>
                shouldUseAnchor(item) ? (
                  <a
                    key={item.label}
                    href={getNavHref(item)}
                    className={`text-foreground hover:text-primary transition-colors font-medium ${
                      isItemActive(item) ? "text-primary" : ""
                    }`}
                    aria-current={isItemActive(item) ? "page" : undefined}
                    onClick={(event) => handleHashNav(event, item)}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    to={item.path}
                    className={`text-foreground hover:text-primary transition-colors font-medium ${
                      isItemActive(item) ? "text-primary" : ""
                    }`}
                    aria-current={isItemActive(item) ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                )
              )}
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
              {NAV_ITEMS.map((item) =>
                shouldUseAnchor(item) ? (
                  <a
                    key={item.label}
                    href={getNavHref(item)}
                    className={`block py-2 text-foreground hover:text-primary transition-colors font-medium ${
                      isItemActive(item) ? "text-primary" : ""
                    }`}
                    aria-current={isItemActive(item) ? "page" : undefined}
                    onClick={(event) => {
                      handleHashNav(event, item)
                      setMobileMenuOpen(false)
                    }}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    to={item.path}
                    className={`block py-2 text-foreground hover:text-primary transition-colors font-medium ${
                      isItemActive(item) ? "text-primary" : ""
                    }`}
                    aria-current={isItemActive(item) ? "page" : undefined}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>
          )}
        </div>
      </div>
    </header>
  )
}
