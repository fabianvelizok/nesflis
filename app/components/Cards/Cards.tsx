import React from 'react'

import Container from '@/app/components/Container/Container';
import styles from './Cards.module.css'

type CardsProps = {
  children: React.ReactNode
  title: string
  className?: string
}

const Cards = ({ children, className, title }: CardsProps) => {
  return <Container className={styles.container} tag="section">
    <h2 className={styles.title}>{title}</h2>
    <div className={styles.cards}>
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            ...child.props,
            isFirst: index === 0,
            isLast: !Array.isArray(children) || index === children.length - 1,
          })
        }
        return null
      })}
    </div>
  </Container>
}

export default Cards