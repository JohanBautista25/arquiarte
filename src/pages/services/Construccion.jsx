import { Header } from "@/components/header"
import { ServiceDetail } from "@/components/ServiceDetail"
import { SERVICE_DETAILS } from "@/constants"
import { Users, Building2, Shield, Wrench, Award } from "lucide-react"

const processSteps = [
  {
    icon: "Users",
    title: "Consulta inicial",
    description: "Reunión para entender tus necesidades, presupuesto y visión del proyecto."
  },
  {
    icon: "Building2",
    title: "Diseño y planificación",
    description: "Creación de planos arquitectónicos y estructurales detallados."
  },
  {
    icon: "Shield",
    title: "Permisos y licencias",
    description: "Gestión completa de todos los permisos municipales requeridos."
  },
  {
    icon: "Wrench",
    title: "Construcción",
    description: "Ejecución del proyecto con supervisión constante y materiales de calidad."
  },
  {
    icon: "Award",
    title: "Entrega y garantía",
    description: "Entrega del proyecto terminado con garantía de construcción."
  }
]

const projects = [
  {
    title: "Casa Moderna Ibagué",
    area: "180 m²",
    duration: "8 meses",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500"
  },
  {
    title: "Edificio Residencial",
    area: "1,200 m²",
    duration: "18 meses",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500"
  },
  {
    title: "Centro Comercial",
    area: "800 m²",
    duration: "12 meses",
    image: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=500"
  }
]

const service = SERVICE_DETAILS.construccion

export default function Construccion() {
  return (
    <>
      <ServiceDetail
        title={service.title}
        subtitle={service.subtitle}
        breadcrumb={service.breadcrumb}
        featuresTitle={service.featuresTitle}
        featuresDescription={service.featuresDescription}
        features={service.features}
        featureImage={service.featureImage}
        stats={service.stats}
        processSteps={processSteps}
        projects={projects}
      />
    </>
  )
}
