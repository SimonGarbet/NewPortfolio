import React from 'react'

import Header from '../../components/Header';

import logomenuW from '../../assets/logomenuW.png';
import darkSoul from '../../assets/DarkSoul.gif'

import '../../scss/style.scss'

function Error404() {
  return (
    <div className='globalError'>
      <Header
        colorLogo='#fff'
        colorBackgroundLogo = '#000'
        logoMenu={logomenuW}
        colorMenu= '#fff'
        colorBackgroundMenu = "#000"
      />

      <section className='titleError'>
      <h2>404</h2>
      <img src={darkSoul} alt="GIF d'un feu dans le jeu vidéo Dark Soul"></img>
      <h3><p>NOT</p><p>FOUND</p></h3>
      </section>

      <section className='scrollingRedirections'>

        <div className='scroll'>
          <div className='leftToRightProject'>
              <p className='galleryWord'>PROJECTS</p>
              <p className='poppinsWord'>PROJECTS</p>
              <p className='galleryWord'>PROJECTS</p>
              <p className='poppinsWord'>PROJECTS</p>
              <p className='galleryWord'>PROJECTS</p>
              <p className='poppinsWord'>PROJECTS</p>
              <p className='galleryWord'>PROJECTS</p>
              <p className='poppinsWord'>PROJECTS</p>
              <p className='galleryWord'>PROJECTS</p>
          </div>
        </div>

        <div className='scrollwhite'>
          <div className='rightToLeftAbout'>
              <p className='galleryWord'>ABOUT</p>
              <p className='poppinsWord'>ABOUT</p>
              <p className='galleryWord'>ABOUT</p>
              <p className='poppinsWord'>ABOUT</p>
              <p className='galleryWord'>ABOUT</p>
              <p className='poppinsWord'>ABOUT</p>
              <p className='galleryWord'>ABOUT</p>
              <p className='poppinsWord'>ABOUT</p>
              <p className='galleryWord'>ABOUT</p>
          </div>
        </div>

        <div className='scroll'>
          <div className='leftToRightResume'>
              <p className='galleryWord'>RESUME</p>
              <p className='poppinsWord'>RESUME</p>
              <p className='galleryWord'>RESUME</p>
              <p className='poppinsWord'>RESUME</p>
              <p className='galleryWord'>RESUME</p>
              <p className='poppinsWord'>RESUME</p>
              <p className='galleryWord'>RESUME</p>
              <p className='poppinsWord'>RESUME</p>
              <p className='galleryWord'>RESUME</p>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Error404;
