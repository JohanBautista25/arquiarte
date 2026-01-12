import { Header } from "@/components/header"
import { ServiceDetail } from "@/components/ServiceDetail"
import { SERVICE_DETAILS } from "@/constants"

const projects = [
  {
    title: "Cocina Moderna",
    area: "15 m²",
    duration: "2 meses",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500"
  },
  {
    title: "Baño Principal",
    area: "8 m²",
    duration: "1 mes",
    image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=500"
  },
  {
    title: "Sala y Comedor",
    area: "45 m²",
    duration: "3 meses",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500"
  }
]

const service = SERVICE_DETAILS.remodelaciones

export default function Remodelaciones() {
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
        projects={projects}
      />
    </>
  )
}

