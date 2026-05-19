import React, { createContext } from 'react'
export const dataContext = createContext();
const AuthContext = ({children}) => {
    let serverUrl = "http://localhost:7000"

    let value = {
        serverUrl,
    }
  return (
      <dataContext.Provider value={value}>
        {children}
      </dataContext.Provider>
  )
}

export default AuthContext
