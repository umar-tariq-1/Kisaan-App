import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'
import {FiMenu} from "react-icons/fi";
import {FaTractor} from "react-icons/fa";


const Navbar = (props) => {
const [showNavbar, setShowNavbar] = useState(0/*props.About||props.Contact||props.Login||props.SignUp*/)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

const navLinkActiveTextColor={  //for textColor
  color: 'aliceblue'
}
const navLinkInactiveTextColor={}

  return (
    <nav className="navbar">
      <div className="container">
        <div style={{display:'flex'}} className="logo">
          <FaTractor size={60}/>
          <h2 style={{marginTop:8,marginLeft:15}}>KISAAN APP</h2>
        </div>
        <div className={`menu-icon  ${showNavbar && 'pressed'}`} onClick={handleShowNavbar}>
            <FiMenu size={45}/>
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            
            <li className={`padd ${props.Home && 'active-link'}`}>
              <NavLink style={(props.Home && !showNavbar)? navLinkActiveTextColor: navLinkInactiveTextColor} to='/'>Home</NavLink>
            </li>

            <li className={`padd ${props.SignUp && 'active-link'}`}>
              <NavLink style={(props.SignUp && !showNavbar)? navLinkActiveTextColor: navLinkInactiveTextColor} to='/signup'>Sign Up</NavLink>
            </li>
           
            <li className={`padd ${props.Login && 'active-link'}`}>
              <NavLink style={(props.Login && !showNavbar)? navLinkActiveTextColor: navLinkInactiveTextColor} to='/login'>Login</NavLink>
            </li>

            <li className={`padd ${props.About && 'active-link'}`}>
              <NavLink style={(props.About && !showNavbar)? navLinkActiveTextColor: navLinkInactiveTextColor} to='/about'>About</NavLink>
            </li>

            <li className={`padd ${props.Contact && 'active-link'}`}>
              <NavLink style={(props.Contact && !showNavbar)? navLinkActiveTextColor: navLinkInactiveTextColor} to='/contact'>Contact</NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;