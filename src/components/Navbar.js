import React from 'react'
import { Link, useLocation } from "react-router-dom";

import logo from '../assets/img/IITDh_logo.png'


export default function Navbar() {

  let location = useLocation();

  return (
    <div className="navbar navbar-fixed-top">
      <div className="navbar-inner">
        <div className="container">
          {/* <!-- logo --> */}
           <Link className="brand logo" to='/'><img src={logo} height="80px" width="80px" alt="" /></Link>
          {/* <!-- end logo --> */}
          {/* <!-- top menu --> */}
          <div className="navigation">
            <nav>
              <ul className="nav topnav">
                <li className={location.pathname === '/' ? 'active' : ''}>
                  <Link to="/">Home</Link>
                </li>
                <li className={location.pathname === '/donate' ? 'active' : ''}>
                  <Link to="/donate">Donate Us</Link>
                </li>
                <li className={location.pathname === '/contact' ? 'active' : ''}>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </nav>
          </div>
          {/* <!-- end menu --> */}
        </div>
      </div>
    </div>
  )
}
