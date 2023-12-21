import type { Metadata } from 'next'
import Logout from '@/app/components/Logout/Logout'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Youflix | Logout',
  description: 'Youflix | Logout',
}

export default function Login() {
  return <div className={styles.container}><Logout /></div>
}