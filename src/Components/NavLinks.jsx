import React from 'react'
import UserContainer from './UserContainer'

const NavLinks = () => {
  return (
    <div className="nav-container" >
        <ul>
           <li><a href="#">home</a> </li> 
           <li><a href="#">about</a> </li> 
        </ul>
        <UserContainer  />
    </div>
  )
}

export default NavLinks