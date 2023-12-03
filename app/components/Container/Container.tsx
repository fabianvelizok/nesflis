import { ReactNode } from 'react'

import cx from '@/utils/cx';
import styles from './Container.module.css'

type ContainerProps = {
  children: ReactNode
  className?: string
  tag?: keyof JSX.IntrinsicElements
}

const Container = ({ children, className, tag }: ContainerProps) => {
  const ContainerTag = tag ?? 'div'
  return <ContainerTag className={cx(styles.container, className)}>{children}</ContainerTag>
}

export default Container