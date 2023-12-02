'use client'

import { ReactNode } from 'react'

import cx from '@/utils/cx';
import styles from './Button.module.css'

type ButtonProps = {
  children: ReactNode
  onClick: () => void
  className?: string
}

const Button = ({ onClick, children, className }: ButtonProps) => <button className={cx(styles.button, className)} onClick={onClick}>{children}</button>

export default Button