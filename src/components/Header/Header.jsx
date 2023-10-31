import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import {HiMenu} from 'react-icons/hi'

const Header = () => {

  const [openMenu,setOpenMenu]=useState(false)
  
  const getStyles = (openMenu)=>{
    if(document.documentElement.clientWidth <= 768){
      return  {top: !openMenu && -300  }
    }
  }

  return (
    <header className="header paddings maxWidth">
      <div className="logo">
        <h4>Fake</h4>
      </div>
      <nav className="nav">
        <ul className="nav-links" style={getStyles(openMenu)}>
         
           <li>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/cart">
              Cart
            </Link>
          </li>
          <button className="btn">
            <li>
              <Link style={{color:"white"}} className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </button>
         </ul>
        
        <div className="menu-icon">
            <HiMenu  onClick={()=>setOpenMenu(prev => !prev)}/>
        </div>
      </nav>
    </header>
  );
};

export default Header;
