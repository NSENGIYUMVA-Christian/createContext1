import React from 'react'
import NavLinks from './NavLinks'
import { useState, createContext } from 'react'

export const NavbarContext = createContext()

const Navbar = () => {
   const [user,setUser] = useState({name:"Chris"})
   const logout = ()=>{
    setUser(null)
   }
  return (
        <NavbarContext.Provider value={{user,logout}} >
      <nav>
        <h5>CONTEXT API</h5>
        <NavLinks  />
    </nav>
    </NavbarContext.Provider>
  )
}

export default Navbar