'use client'

import { AuthProvider } from './AuthProvider'
import { UserProvider } from './UserProvider'

export default function Providers({ children }: { children: React.ReactNode }) {
  return <>
    <AuthProvider>
      <UserProvider>
        {children}
      </UserProvider>
    </AuthProvider>
  </>
}