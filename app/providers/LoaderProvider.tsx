'use client'

import { useContext, createContext, useState } from 'react'
import Loader from '@/app/components/Loader/Loader'

const LoaderContext = createContext({
  loading: false,
  setLoading: (loading) => {}
})

export const useLoader = () => useContext(LoaderContext)

export const LoaderProvider = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(false)

  return <LoaderContext.Provider value={{ loading, setLoading }}>
    <>
      {children}
      <Loader show={loading} />
    </>
  </LoaderContext.Provider>
}