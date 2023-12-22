'use client'

import { useContext, createContext, useEffect, useState, useCallback } from 'react'

import { useAuth } from './AuthProvider';
import { useLoader } from './LoaderProvider';

const UserContext = createContext({
  userEmail: '',
  loginUser: async function(email: string) {},
  logoutUser: async function() {}
})

export const useUser = () => useContext(UserContext)

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [userEmail, setUserEmail] = useState('')
  const {
    getIsLoggedIn,
    getUserInfo,
    isProviderReady,
    login,
    logout
  } = useAuth()
  const { setLoading } = useLoader()

  const getUserEmail = useCallback(async () => {
    try {
      setLoading(true)
      const isLogged = await getIsLoggedIn()
      if (isLogged) {
        const userInfo = await getUserInfo()
        setUserEmail(userInfo?.email || '')
      }
      setLoading(false)
    } catch (e) {
      setLoading(false)
      console.error('Error getting user info!', e) 
    }
  }, [isProviderReady])

  const loginUser = useCallback(async (email: string) => {
    setLoading(true)
    const didToken = await login(email);
    if (!didToken) {
      setLoading(false)
      throw new Error('Unavailable Token!')
    }
    const userInfo = await getUserInfo();
    setUserEmail(userInfo?.email || '')
      setLoading(false)
  }, [isProviderReady])

  const logoutUser = useCallback(async () => {
    setLoading(true)
    await logout();
    setUserEmail('')
    setLoading(false)
  }, [isProviderReady])

  useEffect(() => {
    if (isProviderReady && !userEmail) {
      getUserEmail()
    }
  }, [isProviderReady, userEmail])

  const providerValue = {
    userEmail,
    loginUser,
    logoutUser
  }

  return <UserContext.Provider value={providerValue}>
    {children}
  </UserContext.Provider>
}