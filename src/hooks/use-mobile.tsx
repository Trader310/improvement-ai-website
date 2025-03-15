
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener("change", onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}

// Export an alias for useIsMobile with custom breakpoint support
export function useMediaQuery(query: string = `(max-width: ${MOBILE_BREAKPOINT - 1}px)`) {
  const [matches, setMatches] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const media = window.matchMedia(query)
    const onChange = () => {
      setMatches(media.matches)
    }
    
    media.addEventListener("change", onChange)
    setMatches(media.matches)
    
    return () => media.removeEventListener("change", onChange)
  }, [query])

  return !!matches
}
