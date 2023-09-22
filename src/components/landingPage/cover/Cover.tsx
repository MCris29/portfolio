import { CoverAnimation } from '@/components'
import styles from '@/styles/Navigation.module.scss'
import { getStoredTheme } from '@/utils'
import { useEffect, useState } from 'react'

export const Cover = () => {
  const [mode, setMode] = useState('')

  useEffect(() => {
    const storedTheme = getStoredTheme()
    setMode('' + storedTheme)
  })

  return (
    <div id="cover" className={styles.cover}>
      <video autoPlay muted loop>
        <source src="/cover.mp4" type="video/mp4" />
      </video>
      <div id="title_cover">
        <p className={styles.p_1}>Hi, I am</p>
        <p className={styles.p_2}>Cristian Mañay,</p>
        <p className={styles.p_3}>Software Developer</p>
      </div>
      <CoverAnimation />
    </div>
  )
}
