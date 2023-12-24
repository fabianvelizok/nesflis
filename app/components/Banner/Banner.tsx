'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

import Button from '@/app/components/Button/Button'
import Container from '@/app/components/Container/Container'
import cx from '@/utils/cx'
import Player from '@/app/components/Player/Player';
import styles from './Banner.module.css'

type BannerProps = {
  className?: string
  title: string
  videoId: string
  videoUrl: string
}

const Banner = ({ title, videoId, videoUrl, className }: BannerProps) => {
  const router = useRouter()
  const handlePlay = () => router.push(videoUrl)

  return <Container className={cx(styles.container, className)} tag="section">
    <div className={styles.information}>
      <h2 className={styles.title}>{title}</h2>
      <Button className={styles.playButton} onClick={handlePlay}>
        <Image
          src="/static/play_arrow.svg"
          height={20}
          width={20}
          alt="Play icon"
        />
        <span>Play</span>
      </Button>
    </div>
    
    <Player id={videoId} autoPlay={1} className={styles.player} />
  </Container>
}

export default Banner