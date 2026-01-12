import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function ScrollToHash() {
  const location = useLocation()

  useEffect(() => {
    const storedHash = sessionStorage.getItem('scrollTarget')
    const target = storedHash || location.hash
    const hashId = target ? target.replace('#', '') : ''

    if (hashId) {
      const element = document.getElementById(hashId)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 100)
      }
      sessionStorage.removeItem('scrollTarget')
      if (location.hash) {
        history.replaceState(null, '', location.pathname + location.search)
      }
      return
    }

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location])

  return null
}
