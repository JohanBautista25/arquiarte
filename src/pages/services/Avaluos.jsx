import { ServiceDetail } from "@/components/ServiceDetail"
import { SERVICE_DETAILS } from "@/constants"

const projects = [
  {
    title: "Avalúo Residencial",
    area: "180 m²",
    duration: "5 días",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500"
  },
  {
    title: "Avalúo Comercial",
    area: "500 m²",
    duration: "7 días",
    image: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=500"
  },
  {
    title: "Propiedad Mixta",
    area: "1,200 m²",
    duration: "10 días",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500"
  }
]

const service = SERVICE_DETAILS.avaluos

export default function Avaluos() {
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

