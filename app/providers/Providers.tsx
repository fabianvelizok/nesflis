'use client'

import { AuthProvider } from './AuthProvider'
import { UserProvider } from './UserProvider'
import { LoaderProvider } from './LoaderProvider'

export default function Providers({ children }: { children: React.ReactNode }) {
  return <>
    <LoaderProvider>
      <AuthProvider>
        <UserProvider>
          {children}
        </UserProvider>
      </AuthProvider>
    </LoaderProvider>
  </>
}