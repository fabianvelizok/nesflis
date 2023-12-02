import { ReactNode } from 'react'

import cx from '@/utils/cx';
import styles from './Container.module.css'

type ContainerProps = {
  children: ReactNode
  className?: string
}

const Container = ({ children, className }: ContainerProps) => {
  return <div className={cx(styles.container, className)}>{children}</div>
}

export default Container