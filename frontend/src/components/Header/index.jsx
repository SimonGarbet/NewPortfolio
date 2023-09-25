import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import '../../scss/style.scss';

import logoMenuB from '../../assets/logomenuB.png';



function Header() {

    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {}, [isOpen])

  return (
    <div className='headerGlobal'>

        <div className='overlay'  style={{ display: isOpen ? 'block' : 'none' }}></div>

        <section className='basicHeader'>
        <Link to = {'/'} className='homePageLink'><h1>simongarbet<span>.com</span></h1></Link>
        <button onClick={() => setIsOpen(true)} style={{ display: isOpen ? 'none' : 'flex' }}>menu <img src={logoMenuB} alt='Logo du Menu' /></button>
        </section>

        <section className='modalHeader' style={{ display: isOpen ? 'block' : 'none' }}>
            <FontAwesomeIcon icon={faXmark} onClick={() => setIsOpen(false)} />
            <section className='menuModalHeader'>
                <div>
                    <h3>Networks</h3>
                    <a href='https://www.linkedin.com/in/simongarbet/' target="_blank" rel="noopener noreferrer">Linkedin</a>
                    <a href='https://github.com/SimonGarbet' target="_blank" rel="noopener noreferrer">Github</a>
                </div>
                <div className='mainMenuModalHeader'>
                    <h3>Menu</h3>
                    <Link to = {'/achievements'}>What i <strong>do</strong>?</Link>
                    <Link to = {'/aboutme'}>About <strong>me</strong></Link>
                    <Link to = {'/resume'}><strong>Resume</strong></Link>
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