"use client"

import Image from "next/image"
import styles from "./Banner.module.css"
import Button from "../Button/Button"
import Container from "../Container/Container"

type BannerProps = {
  title: string
  subtitle: string
  imageUrl: string
}

const Banner = ({ title, subtitle, imageUrl }: BannerProps) => {
  const handlePlay = () => {
    console.log('Handle play')
  }

  return <div className={styles.container}>
    <Container>
      <div className={styles.information}>
        <h2 className={styles.title}>{title}</h2>
        <h3 className={styles.subtitle}>{subtitle}</h3>
        <Button onClick={handlePlay} className={styles.playButton}>
          <Image src="/static/play_arrow.svg" height={20} width={20} alt="Play icon"/>
          <span>Play</span>
        </Button>
      </div>
    </Container>

    <Image
      src={imageUrl}
      alt="Banner image"
      // TODO: Check sizes
      width={1000} 
      height={1000}
      className={styles.image}
    />
  </div>
}

export default Banner