import React, { Children, createContext, useState } from 'react'

const AuthContext = createContext({
  user: {},
  token: '',
  userIsLoggedIn: false,
  login: (token: string, user: {}) => {},
  logout: () => {}
})

interface PropsType {
  children?: React.ReactNode
}

export const AuthContextProvider: React.FC<PropsType> = ({ children }) => {
  const [token, setToken] = useState('')
  const [user, setUser] = useState({})

  const login = (token: string, user: {}) => {
    setToken(token)
    setUser(user)
  }

  const logout = () => {
    setToken('')
  }

  return (
    <AuthContext.Provider
      value={{ login, logout, token, user, userIsLoggedIn: !!token }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
