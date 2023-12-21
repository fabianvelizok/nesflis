'use client'

import { useRouter } from 'next/navigation'

import cx from '@/utils/cx';
import AuthService from '@/lib/auth-service';
import { useUser } from '@/app/providers/UserProvider'
import styles from './LoginForm.module.css'

type LoginFormProps = {
  className?: string
}

const LoginForm = ({ className }: LoginFormProps) => {
  const router = useRouter()
  const { user, setUser } = useUser()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const email = form.get('email') as string

    // TODO: Handle email errors
    if (!email) {
      return
    }

    try {
      const didToken = await AuthService().login(email);
      if (didToken) {
        const userInfo = await AuthService().getUserInfo();
        setUser(userInfo?.email || '')
        router.push('/')
      } else {
        throw new Error('Unavailable token')
      }
    } catch (e) {
      console.error('Error logging user!', e) 
    }
  }

  return <form className={cx(styles.form, className)} onSubmit={handleSubmit}>
    <h2 className={styles.title}>Sign In</h2>
    {user
      ? <>
          <p className={styles.text}>Already Logged In!</p>
          <button className={styles.button} onClick={() => router.push('/')}>Home</button>
        </>
      : <>
          <input
            type="email"
            name="email"
            placeholder="Email address"
            required
            className={styles.input}
          />

          <button type="submit" className={styles.button}>Sign In</button>
        </>}
  </form>
}

export default LoginForm