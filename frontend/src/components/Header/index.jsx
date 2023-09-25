import React from 'react'
import { Link } from 'react-router-dom'
import '../../scss/style.scss'

import logoMenuB from '../../assets/logomenuB.png';

function Header() {
  return (
    <div className='headerGlobal'>
        <div className='overlay'></div>
        <div className='basicHeader'>
        <Link to = {'/'} className='homePageLink'><h1>simongarbet<span>.com</span></h1></Link>
        <button>menu <img src={logoMenuB} alt='Logo du Menu' /></button>
        </div>
    </div>
  )
}

export default Header;