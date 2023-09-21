import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { gsap } from 'gsap/dist/gsap'
import { useEffect, useState } from 'react'

export const SkillsAnimation = () => {
  const [mount, setMount] = useState(0)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    setMount(mount + 1)
  }, [])

  useEffect(() => {
    if (mount == 1) {
      initAnimation()
    }
  }, [mount])

  const initAnimation = () => {
    gsap.set('#title_skills', {
      opacity: 0,
      y: 50
    })

    gsap.set('.Home_subtitle__Fb0Fc', {
      opacity: 0
    })

    gsap.set('.skills_frontend', {
      scale: 0
    })

    gsap.set('.skills_backend', {
      scale: 0
    })

    gsap.set('.skills_dev_tools', {
      scale: 0
    })

    const itemFrontendTl = gsap.timeline({
      scrollTrigger: {
        trigger: '#skills',
        start: () => 'top center',
        end: () => `+=${window.innerHeight}`
      }
    })

    itemFrontendTl.to('#title_skills', {
      opacity: 1,
      y: 0
    })

    itemFrontendTl.to('.Home_subtitle__Fb0Fc', {
      opacity: 1
    })

    itemFrontendTl.to('.skills_frontend', {
      scale: 1,
      duration: 1,
      ease: 'bounce'
    })

    itemFrontendTl.to('.skills_backend', {
      scale: 1,
      ease: 'bounce'
    })

    itemFrontendTl.to('.skills_dev_tools', {
      scale: 1,
      ease: 'bounce'
    })
  }

  return <></>
}
