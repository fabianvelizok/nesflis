'use client'

import { useContext, createContext, useEffect, useState, useCallback } from 'react'

import { useAuth } from './AuthProvider';

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

  const getUserEmail = useCallback(async () => {
    try {
      const isLogged = await getIsLoggedIn()
      if (isLogged) {
        const userInfo = await getUserInfo()
        setUserEmail(userInfo?.email || '')
      }
    } catch (e) {
      console.error('Error getting user info!', e) 
    }
  }, [isProviderReady])

  const loginUser = useCallback(async (email: string) => {
    const didToken = await login(email);
    if (!didToken) {
      throw new Error('Unavailable Token!')
    }
    const userInfo = await getUserInfo();
    setUserEmail(userInfo?.email || '')
  }, [isProviderReady])

  const logoutUser = useCallback(async () => {
    const isLogged = await getIsLoggedIn()
    if (isLogged) {
      const logoutOk = await logout();
      if (!logoutOk) {
        throw new Error('Logout not okay')
      }
      setUserEmail('')
    }
  }, [isProviderReady])

  useEffect(() => {
    if (isProviderReady && !userEmail) {
      getUserEmail()
    }
  }, [isProviderReady, userEmail])

  const providerValue = {
    userEmail,
    loginUser,
    logoutUser,
  }

  return <UserContext.Provider value={providerValue}>
    {children}
  </UserContext.Provider>
}

export default UserContext.Provider