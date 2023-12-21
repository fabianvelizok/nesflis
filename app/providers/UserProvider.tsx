import { useContext, createContext } from 'react'

const UserContext = createContext({ user: '', setUser: (user: string) => {}})

export const useUser = () => useContext(UserContext)

export default UserContext.Provider