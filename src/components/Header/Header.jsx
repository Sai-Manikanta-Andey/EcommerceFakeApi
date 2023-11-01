import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { HiMenu } from "react-icons/hi";
import {FaCartPlus} from 'react-icons/fa'
import { ToastContainer,toast } from "react-toastify";


const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const getStyles = (openMenu) => {
    if (document.documentElement.clientWidth <= 768) {
      return { top: !openMenu && -300 };
    }
  };

  return (
    <header className="header paddings maxWidth">
      <div className="logo">
        <Link className="home" to="/">
          <h4>Fake</h4>
        </Link>
      </div>
      <nav className="nav">
        <ul className="nav-links" style={getStyles(openMenu)}>
          <li>
            <Link className="nav-link" to="/cart"  >
              <FaCartPlus alt='cart' />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
