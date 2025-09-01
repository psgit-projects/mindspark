import React, { useEffect, useState } from 'react';
import './Navbar.css'
import menu_icon from '../../asset/menu-icon.png'
import logo from '../../asset/logo.png' // make sure this is NextLearn logo
import { Link } from 'react-scroll';

function Navbar() {

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
     window.addEventListener('scroll',()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
     })
  },[])

  const [mm, setMm] = useState(false)
  const toggleMenu = ()=>{
       mm ? setMm(false) : setMm(true)
  }

  return (
    <nav className={`ct ${sticky ? 'dark-nav': ''}`}>
      {/* Logo for NextLearn */}
      <img className='logo' src={logo} alt="NextLearn Logo" />

      <ul className={mm ? '' : 'hide-m-m'}>
        <li><Link to="hero" smooth={true} offset={-260} duration={500}>Home</Link></li>
        <li><Link to="pgs" smooth={true} offset={-260} duration={500}>Program</Link></li>
        <li><Link to="ab" smooth={true} offset={-260} duration={500}>About Us</Link></li>
        <li><Link to="cm" smooth={true} offset={-260} duration={500}>Campus</Link></li>
        <li><Link to="re" smooth={true} offset={-260} duration={500}>Review</Link></li>
        <li><Link to='co' smooth={true} offset={-260} duration={500} className='btn-1'>Contact</Link></li>
      </ul>

      <img className='menu-icon' src={menu_icon} alt="menu-icon" onClick={toggleMenu}/>
    </nav>
  );
}

export default Navbar;
