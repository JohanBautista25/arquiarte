import { Instagram, Facebook, Mail } from "lucide-react"
import { Link } from "react-router-dom"
import { BRAND, CONTACT_INFO } from "@/constants"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-3xl font-bold mb-4">{BRAND.name}</h3>
            <p className="text-background/80 text-sm leading-relaxed">
              {BRAND.description}
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <Link to="/servicios/construccion" className="hover:text-background transition-colors">
                  Construcción
                </Link>
              </li>
              <li>
                <Link to="/servicios/remodelaciones" className="hover:text-background transition-colors">
                  Remodelaciones
                </Link>
              </li>
              <li>
                <Link to="/servicios/diseno-arquitectonico" className="hover:text-background transition-colors">
                  Diseño Arquitectónico
                </Link>
              </li>
              <li>
                <Link to="/servicios/avaluos" className="hover:text-background transition-colors">
                  Avalúos
                </Link>
              </li>
              <li>
                <Link to="/servicios/permisos" className="hover:text-background transition-colors">
                  Permisos
                </Link>
              </li>
              <li>
                <Link to="/servicios/asesoria" className="hover:text-background transition-colors">
                  Asesoría
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Síguenos</h4>
            <div className="flex gap-4">
              <a
                href={CONTACT_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={CONTACT_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-sm text-background/60">
          <p>© {new Date().getFullYear()} Arqui Arte. Todos los derechos reservados.</p>
          <p className="mt-2">Ibagué, Tolima, Colombia</p>
        </div>
      </div>
    </footer>
  )
}
