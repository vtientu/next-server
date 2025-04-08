'use client'

import { useEffect, useState } from 'react'

export function useHeaderSticky() {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsSticky(!entry.isIntersecting), { threshold: 0.1 })

    const target = document.querySelector('#hero-section') // Phần hero để theo dõi
    if (target) observer.observe(target)

    return () => observer.disconnect()
  }, [])

  return isSticky
}
