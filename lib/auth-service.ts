import { Magic, MagicUserMetadata } from 'magic-sdk';

const AuthService = () => {
  let magicLink: Magic | null = null
  
  if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_MAGIC_API_KEY) {
    magicLink = new Magic(process.env.NEXT_PUBLIC_MAGIC_API_KEY!);
  }

  const checkInstance = () => {
    if (!magicLink) {
      throw new Error('Magic instance was not created!')
    }
  }

  return {
    async login(email: string, showUI = true): Promise<string | null> {
      try {
        checkInstance()
        return await (magicLink!).auth.loginWithMagicLink({ email, showUI });
      } catch {
        console.error('Error logging user!')
        return null
      }
    },
    async getUserInfo(): Promise<MagicUserMetadata | null> {
      try {
        checkInstance()
        return await (magicLink!).user.getInfo()
      } catch {
        console.error('Error getting user info!')
        return null
      }
    },
    async getIsLoggedIn(): Promise<boolean | null> {
      try {
        checkInstance()
        return await (magicLink!).user.isLoggedIn()
      } catch {
        console.error('Error getting isLoggedIn info !')
        return null
      }
    },
    async logout(): Promise<boolean | null> {
      try {
        checkInstance()
        return await (magicLink!).user.logout()
      } catch {
        console.error('Error logging out user!')
        return null
      }
    }
  }
}

export default AuthService