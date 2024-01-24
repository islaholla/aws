import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"
import DropdownMenu from "./DropdownMenu"

const Header = () => {
  const [click, setClick] = useState(false)
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li >
              <Link to='/'>Home</Link>
            </li>
            <li>
              <a target="_blank" href='https://www.mastersystem.co.id/about-us'>About</a>
            </li>
             <li   onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}> 
              <Link  to='/solutions'  
            
              >Solution</Link>
               {isDropdownVisible && <DropdownMenu />}
            </li>
            <li>
              <Link to='/journal'>Success Story</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
          <div className='start'>
            <div className='button'>Request Quote</div>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
