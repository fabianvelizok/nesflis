'use client'

import cx from '@/utils/cx';
import styles from './Loader.module.css'

type LoaderProps = {
  className?: string
  show: boolean
}

const Loader = ({ className, show }: LoaderProps) => {
  if (!show) return null
  return <div className={styles.backdrop}>
    <div className={styles.loader}><div></div><div></div></div>
  </div>
}

export default Loader