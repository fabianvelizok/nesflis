'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from './Card.module.css'

type cardProps = {
  className?: string
  imageUrl: string
  size: 'small' | 'medium' | 'large'
}

const cardStyles = {
  small: styles.smallSize,
  medium: styles.mediumSize,
  large: styles.largeSize,
}

const fallbackImage = 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2959&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

const Card = ({
  className = '',
  imageUrl,
  size
}: cardProps) => {
  const [imagSrc, setImageSrc] = useState(imageUrl)

  return <div className={`${cardStyles[size]} ${styles.container} ${className}`}>
    {/* TODO: Add sizes prop to improve performance */}
    <Image
      src={imagSrc}
      className={styles.cardImage}
      alt="Card image" // TODO: Improve
      fill={true}
      onError={() => setImageSrc(fallbackImage)}
    />
  </div>
}

export default Card

