# Configuración de Emails - Arqui Arte

## Solución Actual (Implementada)

El formulario de contacto actualmente utiliza dos métodos:

1. **mailto:** - Abre el cliente de correo del usuario
2. **WhatsApp** - Envía también el mensaje por WhatsApp como respaldo

### Ventajas:
- ✅ No requiere configuración adicional
- ✅ Funciona inmediatamente
- ✅ El usuario ve exactamente qué se enviará
- ✅ Doble canal de comunicación (Email + WhatsApp)

### Desventajas:
- ⚠️ Requiere que el usuario tenga un cliente de correo configurado
- ⚠️ No tan automático como un servicio backend

---

## Solución Profesional (Recomendada) - EmailJS

Si deseas que los emails se envíen automáticamente sin abrir el cliente de correo, puedes usar **EmailJS** (gratis hasta 200 emails/mes).

### Pasos para configurar EmailJS:

#### 1. Crear cuenta en EmailJS
- Ve a https://www.emailjs.com/
- Regístrate gratis
- Verifica tu email

#### 2. Configurar el servicio de email
1. Ve a "Email Services"
2. Haz clic en "Add New Service"
3. Selecciona Gmail (o tu proveedor)
4. Conecta tu cuenta johanbautista1022@gmail.com
5. Guarda el **Service ID** (ejemplo: `service_abc123`)

#### 3. Crear plantilla de email
1. Ve a "Email Templates"
2. Crea un nuevo template
3. Usa estas variables:
   ```
   Nombre: {{nombre}}
   Email: {{email}}
   Teléfono: {{telefono}}
   Mensaje: {{mensaje}}
   ```
4. Guarda el **Template ID** (ejemplo: `template_xyz789`)

#### 4. Obtener la Public Key
1. Ve a "Account" → "General"
2. Copia tu **Public Key** (ejemplo: `abc123xyz789`)

#### 5. Instalar EmailJS en el proyecto

```bash
npm install @emailjs/browser
```

#### 6. Actualizar el componente Contact.jsx

Reemplaza la función `handleSubmit` con:

```jsx
import emailjs from '@emailjs/browser';

const handleSubmit = async (e) => {
  e.preventDefault()
  setIsSubmitting(true)
  setSubmitStatus(null)

  try {
    // Enviar email usando EmailJS
    await emailjs.send(
      'TU_SERVICE_ID',      // Reemplaza con tu Service ID
      'TU_TEMPLATE_ID',     // Reemplaza con tu Template ID
      {
        nombre: formData.nombre,
        email: formData.email,
        telefono: formData.telefono,
        mensaje: formData.mensaje,
        to_email: 'johanbautista1022@gmail.com'
      },
      'TU_PUBLIC_KEY'       // Reemplaza con tu Public Key
    )

    setSubmitStatus("success")
    setFormData({ nombre: "", email: "", telefono: "", mensaje: "" })
    
    setTimeout(() => setSubmitStatus(null), 5000)
  } catch (error) {
    console.error("Error al enviar email:", error)
    setSubmitStatus("error")
    setTimeout(() => setSubmitStatus(null), 5000)
  } finally {
    setIsSubmitting(false)
  }
}
```

#### 7. Inicializar EmailJS

En el componente Contact.jsx, agrega al inicio:

```jsx
import { useEffect } from 'react'
import emailjs from '@emailjs/browser'

export function Contact() {
  useEffect(() => {
    emailjs.init('TU_PUBLIC_KEY') // Reemplaza con tu Public Key
  }, [])
  
  // ... resto del código
}
```

---

## Otras Alternativas

### 1. Formspree (Más simple)
- https://formspree.io/
- Gratis hasta 50 emails/mes
- Solo cambias el action del form

### 2. Web3Forms
- https://web3forms.com/
- Gratis ilimitado
- Muy fácil de configurar

### 3. Backend propio con Nodemailer
- Más control total
- Requiere servidor Node.js
- Configuración más compleja

---

## Recomendación

Para **Arqui Arte**, recomiendo:

1. **Mantener la solución actual** (mailto + WhatsApp) si:
   - Prefieres simplicidad
   - Quieres recibir mensajes por WhatsApp
   - No envías muchos emails

2. **Migrar a EmailJS** si:
   - Quieres una experiencia más profesional
   - No quieres depender del cliente de correo del usuario
   - Deseas un historial de mensajes enviados

---

## Contacto Actual Configurado

📧 **Email:** johanbautista1022@gmail.com  
📱 **WhatsApp:** +57 300 251 3950

Ambos están configurados en todos los formularios y botones del sitio.
