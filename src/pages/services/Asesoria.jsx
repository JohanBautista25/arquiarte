import { ServiceDetail } from "@/components/ServiceDetail"
import { SERVICE_DETAILS } from "@/constants"

const projects = [
  {
    title: "Consultoría Residencial",
    area: "250 m²",
    duration: "3 meses",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500"
  },
  {
    title: "Asesoría Comercial",
    area: "500 m²",
    duration: "4 meses",
    image: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=500"
  },
  {
    title: "Análisis de Viabilidad",
    area: "1,000 m²",
    duration: "2 meses",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=500"
  }
]

const service = SERVICE_DETAILS.asesoria

export default function Asesoria() {
  return (
    <ServiceDetail
      title={service.title}
      subtitle={service.subtitle}
      breadcrumb={service.breadcrumb}
      featuresTitle={service.featuresTitle}
      featuresDescription={service.featuresDescription}
      features={service.features}
      featureImage={service.featureImage}
      stats={service.stats}
      projects={projects}
    />
  )
}
