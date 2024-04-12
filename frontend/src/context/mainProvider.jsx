import React, { createContext, useEffect, useState } from 'react'

export const mainContext = createContext()

const MainProvider = ({children}) => {
    const [user, setUser] = useState()
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [emailVerified, setEmailVerified] = useState(false)
    const [token, setToken] = useState(null)


  return (
<>
        <mainContext.Provider value={{user, setUser,username, setUsername}}>
            {children}
        </mainContext.Provider>
    </> 
  )
}

export default MainProvider
