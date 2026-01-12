import { Header } from "@/components/header"
import { ServiceDetail } from "@/components/ServiceDetail"
import { SERVICE_DETAILS } from "@/constants"

const projects = [
  {
    title: "Dise�o Residencial",
    area: "250 m",
    duration: "3 meses",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500"
  },
  {
    title: "Dise�o Comercial",
    area: "500 m",
    duration: "4 meses",
    image: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=500"
  },
  {
    title: "Visualizaci�n 3D",
    area: "200 m",
    duration: "2 meses",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=500"
  }
]

const service = SERVICE_DETAILS.diseno

export default function DisenoArquitectonico() {
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
