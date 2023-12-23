'use client'

import { ReactNode } from 'react'

import cx from '@/utils/cx';
import styles from './Button.module.css'

type ButtonProps = {
  children: ReactNode
  onClick: () => void
  className?: string
  variant?: 'primary' | 'secondary'
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

const Button = ({ onClick, children, className, variant = 'primary', type = 'button', disabled = false }: ButtonProps) => {
  return <button
      className={cx(styles[variant], className)}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
}

export default Button