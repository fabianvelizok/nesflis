import type { Metadata } from 'next'
import Image from 'next/image'

import LoginForm from '@/app/components/LoginForm/LoginForm'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Youflix | Login',
  description: 'Youflix | Login',
}

export default function Login() {
  return <div className={styles.container}>
   <Image
      className={styles.image}
      src="/static/login-background.jpeg"
      fill
      alt="Background"
    />

    <LoginForm className={styles.form} />
  </div>
}