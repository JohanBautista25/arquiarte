import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function ScrollToHash() {
  const location = useLocation()

  useEffect(() => {
    const stateHash = location.state && location.state.scroll ? location.state.scroll : null
    const storedHash = sessionStorage.getItem('scrollTarget')
    const target = stateHash || storedHash || location.hash
    const hashId = target ? target.replace('#', '') : ''

    if (hashId) {
      const element = document.getElementById(hashId)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 100)
      }
      // clean up old sessionStorage and remove hash and state from history
      sessionStorage.removeItem('scrollTarget')
      history.replaceState(null, '', location.pathname + location.search)
      return
    }

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location])

  return null
}
