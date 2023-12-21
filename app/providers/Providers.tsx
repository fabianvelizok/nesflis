'use client'

import AuthService from '@/lib/auth-service';
import { useEffect, useState } from 'react'
import UserProvider from './UserProvider'

export default function Providers({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState('')

  useEffect(() => {
    async function getUserInfo() {
      try {
        const isLogged = await AuthService().getIsLoggedIn()
        if (isLogged) {
          const userInfo = await AuthService().getUserInfo();
          setUser(userInfo?.email || '')
        }
      } catch (e) {
        console.error('Error getting user info!', e) 
      }
    }

    if (!user) {
      getUserInfo()
    }
  }, [user])

  const handleUser = (newUser: string) => setUser(newUser)

  return <UserProvider value={{ user, setUser: handleUser }}>
    {children}
  </UserProvider>
}