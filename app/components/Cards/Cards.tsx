import React from 'react'

import cx from '@/utils/cx';
import styles from './Cards.module.css'

type CardsProps = {
  children: React.ReactNode
  title: string
  className?: string
}

const Cards = ({ children, className, title }: CardsProps) => {
  return <section className={cx(styles.container, className)}>
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
  </section>
}

export default Cards