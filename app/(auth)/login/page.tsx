import Image from 'next/image'

import styles from './page.module.css'

export default function Login() {
  return <div className={styles.container}>
   <Image
      className={styles.image}
      src="/static/login-background.jpeg"
      fill
      alt="Background"
    />
    <div className={styles.loginWrapper}>Sign In</div>
  </div>
}