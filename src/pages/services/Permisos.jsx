import { Header } from "@/components/header"
import { ServiceDetail } from "@/components/ServiceDetail"
import { SERVICE_DETAILS } from "@/constants"

const projects = [
  {
    title: "Licencia de Construcción",
    area: "200 m²",
    duration: "45 días",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500"
  },
  {
    title: "Cambio de Uso",
    area: "150 m²",
    duration: "30 días",
    image: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=500"
  },
  {
    title: "Permiso Ambiental",
    area: "300 m²",
    duration: "60 días",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500"
  }
]

const service = SERVICE_DETAILS.permisos

export default function Permisos() {
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

