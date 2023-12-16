'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

import cx from '@/utils/cx';
import styles from './Card.module.css'

type cardProps = {
  className?: string
  imageUrl: string
  size: 'small' | 'medium' | 'large'
  title: string
  isFirst?: boolean
  isLast?: boolean
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
  size,
  title,
  isFirst = false,
  isLast = false
}: cardProps) => {
  const [imagSrc, setImageSrc] = useState(imageUrl)
  const cardStyle = {
    originX: isFirst
    ? 0 // Scale first item to the right
    : (isLast
        ? 1 // Scale last item to the left
        : 0.5) // Scale item to the center by default
  }

  return <div className={styles.container}>
    <motion.div
      className={cx(styles.animatedWrapper, cardStyles[size], className)}
      whileHover={{
        scale: 1.1
      }}
      style={cardStyle}
    >

      <Image
        src={imagSrc}
        className={styles.cardImage}
        alt={title}
        fill
        onError={() => setImageSrc(fallbackImage)}
      />
    </motion.div>
  </div>
}

export default Card

