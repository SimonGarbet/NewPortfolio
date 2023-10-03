import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';

import logomenuW from '../../assets/logomenuW.png';
import darkSoul from '../../assets/DarkSoul.gif';

import '../../scss/style.scss';

function Error404() {
  return (
    <div className='globalError'>
      <Header
        colorLogo='#fff'
        colorBackgroundLogo = '#000'
        logoMenu={logomenuW}
        colorMenu= '#fff'
        colorBackgroundMenu = "#000"
        menuVisible= "y"
      />

      <section className='titleError'>
      <h2>404</h2>
      <img src={darkSoul} alt="GIF d'un feu dans le jeu vidéo Dark Soul"></img>
      <h3><p>NOT</p><p>FOUND</p></h3>
      </section>

      <section className='scrollingRedirections'>

      <Link to = {'/achievements'}>
        <div className='scroll'>
          <div className='leftToRightProject'>
              <p className='galleryWord'>RÉALISATIONS</p>
              <p className='poppinsWord'>RÉALISATIONS</p>
              <p className='galleryWord'>RÉALISATIONS</p>
              <p className='poppinsWord'>RÉALISATIONS</p>
              <p className='galleryWord'>RÉALISATIONS</p>
              <p className='poppinsWord'>RÉALISATIONS</p>
              <p className='galleryWord'>RÉALISATIONS</p>
              <p className='poppinsWord'>RÉALISATIONS</p>
              <p className='galleryWord'>RÉALISATIONS</p>
          </div>
        </div>
        </Link>

        <Link to = {'/aboutme'}>
        <div className='scrollwhite'>
          <div className='rightToLeftAbout'>
              <p className='galleryWord'>À PROPOS</p>
              <p className='poppinsWord'>À PROPOS</p>
              <p className='galleryWord'>À PROPOS</p>
              <p className='poppinsWord'>À PROPOS</p>
              <p className='galleryWord'>À PROPOS</p>
              <p className='poppinsWord'>À PROPOS</p>
              <p className='galleryWord'>À PROPOS</p>
              <p className='poppinsWord'>À PROPOS</p>
              <p className='galleryWord'>À PROPOS</p>
          </div>
        </div>
        </Link>

        <Link to = {'/resume'}>
        <div className='scroll'>
          <div className='leftToRightResume'>
              <p className='galleryWord'>CURRICULUM</p>
              <p className='poppinsWord'>CURRICULUM</p>
              <p className='galleryWord'>CURRICULUM</p>
              <p className='poppinsWord'>CURRICULUM</p>
              <p className='galleryWord'>CURRICULUM</p>
              <p className='poppinsWord'>CURRICULUM</p>
              <p className='galleryWord'>CURRICULUM</p>
              <p className='poppinsWord'>CURRICULUM</p>
              <p className='galleryWord'>CURRICULUM</p>
          </div>
        </div>
        </Link>

        
      </section>

    </div>
  )
}

export default Error404;
