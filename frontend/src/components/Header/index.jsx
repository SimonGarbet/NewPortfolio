import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import '../../scss/style.scss';



function Header({colorLogo, colorBackgroundLogo, logoMenu, colorMenu, colorBackgroundMenu}) {

    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {}, [isOpen])

  return (
    <div className='headerGlobal'>

        <div className='overlay' onClick={() => setIsOpen(false)}  style={{ display: isOpen ? 'block' : 'none' }}></div>

        <section className='basicHeader'>

        <Link to = {'/'} className='homePageLink' 
            style={{color: isOpen ? 'white' : `${colorLogo}`, background: isOpen ? 'none' : `${colorBackgroundLogo}`}}>
            <h1>simongarbet<span>.com</span></h1>
        </Link>
        <button onClick={() => setIsOpen(true)} 
            style={{ display: isOpen ? 'none' : 'flex', color: `${colorMenu}`, background: `${colorBackgroundMenu}` }}>
            menu <img src={logoMenu} alt='Logo du Menu' />
        </button>

        </section>

        <section className='modalHeader' style={{ transform: isOpen ? 'translateX(0%)' : 'translateX(100%)' }}>

            <FontAwesomeIcon icon={faXmark} onClick={() => setIsOpen(false)} />
            
            <section className='menuModalHeader'>
                <div>
                    <h3>Networks</h3>
                    <a className='linkedinLink' href='https://www.linkedin.com/in/simongarbet/' target="_blank" rel="noopener noreferrer">Linkedin</a>
                    <a className='githubLink' href='https://github.com/SimonGarbet' target="_blank" rel="noopener noreferrer">Github</a>
                </div>
                <div className='mainMenuModalHeader'>
                    <h3>Menu</h3>
                    <Link to = {'/achievements'}><strong>R</strong>éalisations</Link>
                    <Link to = {'/aboutme'}><strong>À</strong> Propos</Link>
                    <Link to = {'/resume'}><strong>C</strong>urriculum/<strong>V</strong>itæ</Link>
                    <Link to = {'/404'} style={{fontSize: '30px'}}><strong>404</strong> Design</Link>
                </div>
            </section>

            <section className='contactModalHeader'>
                <h3>Contact</h3>
                <a href='mailto: contact@simongarbet.com' target="_blank" rel="noopener noreferrer">contact@simongarbet.com</a>
            </section>

        </section>

    </div>
  )
}

export default Header;