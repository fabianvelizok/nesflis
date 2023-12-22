'use client'

import { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react'
import { Magic, MagicUserMetadata } from 'magic-sdk';

type AuthContextProps = {
  isProviderReady: boolean
  login: (email: string, showUI?: boolean) => Promise<string | null>
  getUserInfo: () => Promise<MagicUserMetadata | null>
  getIsLoggedIn: () => Promise<boolean | null>
  logout: () => Promise<boolean | null>
}

const AuthContext = createContext<AuthContextProps>({
  isProviderReady: false,
  login: async function(email: string, showUI?: boolean) { return null },
  getUserInfo: async function() { return null }, 
  getIsLoggedIn: async function() { return null },
  logout: async function() { return null }
})

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [providerInstance, setProviderInstance] = useState<Magic | null>(null)
  const isProviderReady = !!providerInstance

  useEffect(() => {
    if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_MAGIC_API_KEY) {
      const magic = new Magic(process.env.NEXT_PUBLIC_MAGIC_API_KEY!)
      setProviderInstance(magic)
    }
  }, [])

  const login = useCallback(async (email: string, showUI = true): Promise<string | null> => {
    if (!isProviderReady) return null
    try {
      return await providerInstance.auth.loginWithMagicLink({ email, showUI });
    } catch (e) {
      console.error('Error logging in user!', e)
      return null
    }
  }, [isProviderReady])

  const getUserInfo = useCallback(async (): Promise<MagicUserMetadata | null> => {
    if (!isProviderReady) return null
    try {
      return await providerInstance.user.getInfo()
    } catch (e) {
      console.error('Error getting user info!', e)
      return null
    }
  }, [isProviderReady])

  const getIsLoggedIn = useCallback(async (): Promise<boolean | null> => {
    if (!isProviderReady) return null
    try {
      return await providerInstance.user.isLoggedIn()
    } catch (e) {
      console.error('Error getting isLoggedIn info!', e)
      return null
    }
  }, [isProviderReady])

  const logout = useCallback(async (): Promise<boolean | null> => {
    if (!isProviderReady) return null
    try {
      return await providerInstance.user.logout()
    } catch (e) {
      console.error('Error logging out user!', e)
      return null
    }
  }, [isProviderReady])

  const providerValue = useMemo(() => ({
    isProviderReady,
    login,
    getUserInfo, 
    getIsLoggedIn,
    logout
  }), [isProviderReady])

  return <AuthContext.Provider value={providerValue}>
    {children}
  </AuthContext.Provider>
}