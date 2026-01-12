import { useEffect } from 'react'

export function usePageTitle(title) {
  useEffect(() => {
    const prevTitle = document.title
    document.title = title ? `${title} | Arqui Arte` : 'Arqui Arte - Construcción y Diseño en Ibagué, Tolima'
    
    return () => {
      document.title = prevTitle
    }
  }, [title])
}
