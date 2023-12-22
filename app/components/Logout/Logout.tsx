'use client'

import { useEffect } from 'react';
import cx from '@/utils/cx';
import styles from './logout.module.css'
import { useUser } from '@/app/providers/UserProvider'

type logoutProps = {
  className?: string
}

const Logout = ({ className }: logoutProps) => {
  const { logoutUser } = useUser()

  useEffect(() => {
    async function logout() {
      try {
        await logoutUser()
      } catch (e) {
        console.error('Error logging out user!', e) 
      }
    }
    logout()
  }, [])
  
  return <div className={cx(styles.form, className)}>
    <h2 className={styles.title}>Leaving Already?</h2>
    <p className={styles.text}>Thanks for stopping by!</p>
    <p className={styles.text}>Don{"'"}t forget to return tomorrow for more great experiences.</p>
    <p className={styles.text}>See you soon! 😊</p>
</div>
}

export default Logout