import React from 'react'
import '../styles/Navbar.scss'
import logo from '../assets/images/logo_bdesh.svg'
import joint from '../assets/images/Joint_venture.png'


const Navbar = () => {
  return (
    <div id="navbar">
      <div className="container py-3 d-flex justify-content-between">
        <div className="logo">
          <a href="">
            <img src={logo} alt="" className="img-fluid" />
          </a>
        </div>
        <div>
            <img src={joint} alt="" />
        </div>
        <div>
            <p>Nafis Nihal</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar