import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { gsap } from 'gsap/dist/gsap'
import { useEffect } from 'react'

export const ContactAnimation = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    initAnimation()
  }, [])

  const initAnimation = () => {
    gsap.set('#title_contact', {
      opacity: 0,
      y: 50
    })

    gsap.set('#contact-form', {
      opacity: 0,
      y: 50
    })

    gsap.set('#contact_button', {
      scale: 0
    })

    const itemFrontendTl = gsap.timeline({
      scrollTrigger: {
        trigger: '#contact-me',
        start: () => 'top center',
        end: () => `+=${window.innerHeight}`
      }
    })

    itemFrontendTl.to('#title_contact', {
      opacity: 1,
      y: 0
    })

    itemFrontendTl.to('#contact-form', {
      opacity: 1,
      y: 0
    })

    itemFrontendTl.to('#contact_button', {
      scale: 1,
      ease: 'bounce'
    })
  }

  return <></>
}
