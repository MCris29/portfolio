import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { gsap } from 'gsap/dist/gsap'
import { useEffect } from 'react'

export const AboutAnimation = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    initAnimation()
  }, [])

  const initAnimation = () => {
    gsap.set('#title_about', {
      opacity: 0,
      y: 50
    })

    gsap.set('#section_2', {
      opacity: 0,
      y: 50
    })

    gsap.set('#button_about', {
      scale: 0
    })

    const itemFrontendTl = gsap.timeline({
      scrollTrigger: {
        trigger: '#about-me',
        start: () => 'top center',
        end: () => `+=${window.innerHeight}`
      }
    })

    itemFrontendTl.to('#title_about', {
      opacity: 1,
      y: 0
    })

    itemFrontendTl.to('#section_2', {
      opacity: 1,
      y: 0
    })

    itemFrontendTl.to('#button_about', {
      scale: 1,
      ease: 'bounce'
    })
  }

  return <></>
}
