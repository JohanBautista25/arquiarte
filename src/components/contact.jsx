"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react"
import { CONTACT_INFO, BRAND } from "@/constants"

const CONTACT_FIELDS = [
  { id: "nombre", label: "Nombre completo", placeholder: "Juan Pérez", type: "text" },
  { id: "telefono", label: "Teléfono", placeholder: "+57 300 123 4567", type: "tel" },
  { id: "email", label: "Email", placeholder: "tu@email.com", type: "email" },
]

const buildMailtoLink = (formData) => {
  const subject = `Nuevo contacto de ${formData.nombre}`
  const body = `
Nombre: ${formData.nombre}
Email: ${formData.email}
Teléfono: ${formData.telefono}

Mensaje:
${formData.mensaje}

---
Este mensaje fue enviado desde el formulario de contacto de ${BRAND.name}
  `
  return `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

const buildWhatsappLink = (formData) => {
  const message = `*Nuevo Contacto Web*\n\n*Nombre:* ${formData.nombre}\n*Email:* ${formData.email}\n*Teléfono:* ${formData.telefono}\n\n*Mensaje:*\n${formData.mensaje}`
  return `https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`
}

export function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      window.location.href = buildMailtoLink(formData)
      
      setTimeout(() => {
        window.open(buildWhatsappLink(formData), "_blank", "noopener,noreferrer")
      }, 1000)

      setSubmitStatus("success")
      setFormData({ nombre: "", email: "", telefono: "", mensaje: "" })
      
      setTimeout(() => setSubmitStatus(null), 5000)
    } catch (error) {
      console.error("Error al enviar:", error)
      setSubmitStatus("error")
      setTimeout(() => setSubmitStatus(null), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contacto" className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-4">Contáctanos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            ¿Listo para comenzar tu proyecto? Pregúntanos lo que sea.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">¿Listo para comenzar tu proyecto?</CardTitle>
                <CardDescription className="text-base">
                  Completa el formulario y nos pondremos en contacto contigo
                </CardDescription>
              </CardHeader>
              <CardContent>
                {submitStatus === "success" && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <p className="text-green-800 text-sm">
                      ¡Mensaje enviado! Se abrirá tu cliente de correo y WhatsApp.
                    </p>
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800 text-sm">
                      Hubo un error. Por favor intenta contactarnos por WhatsApp.
                    </p>
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {CONTACT_FIELDS.map((field) => (
                      <div key={field.id} className="space-y-2">
                        <Label htmlFor={field.id}>{field.label}</Label>
                        <Input
                          id={field.id}
                          name={field.id}
                          type={field.type}
                          placeholder={field.placeholder}
                          value={formData[field.id]}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="mensaje">Mensaje</Label>
                    <Textarea
                      id="mensaje"
                      name="mensaje"
                      placeholder="Cuéntanos sobre tu proyecto..."
                      value={formData.mensaje}
                      onChange={handleChange}
                      required
                      className="min-h-[150px]"
                    />
                  </div>

                  <Button type="submit" size="lg" disabled={isSubmitting} className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-sm text-primary hover:underline">
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">WhatsApp</p>
                    <a
                      href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline"
                    >
                      {CONTACT_INFO.whatsapp}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Ubicación</p>
                    <p className="text-sm text-muted-foreground">{BRAND.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Horario</p>
                    <p className="text-sm text-muted-foreground">
                      Lun - Vie: 8:00 AM - 6:00 PM
                      <br />
                      Sáb: 9:00 AM - 1:00 PM
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 bg-primary text-primary-foreground">
              <CardContent className="pt-6">
                <p className="text-sm leading-relaxed">
                  Prefiere una comunicación más rápida? Contáctanos por WhatsApp ahora mismo.
                </p>
                <Button
                  variant="secondary"
                  className="w-full mt-4 bg-background text-foreground hover:bg-background/90"
                  onClick={() => window.open(`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g, '')}`, "_blank")}
                >
                  Contactar por WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

