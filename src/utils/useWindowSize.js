import { useLayoutEffect, useState } from "react"

 export const useWindowSize = () => {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight])

  useLayoutEffect(() => {
    const updateSize = () => {
      setSize([window.innerWidth, window.innerHeight])
    }

    window.addEventListener("resize", updateSize)

    return () => window.removeEventListener("resize", updateSize)
  }, [])

  const isMobile = size[0] <= 768
  const isTablet = size[0] <= 1024

  const fontSize = isMobile ? "0.8rem" : isTablet ? "1rem" : "1.2rem"
  const columnCount = isMobile ? "1fr" : isTablet ? "repeat(2, 1fr)" : "repeat(3, 1fr)"

  return {
    width: size[0],
    height: size[1],
    fontSize,
    columnCount,
  }
}