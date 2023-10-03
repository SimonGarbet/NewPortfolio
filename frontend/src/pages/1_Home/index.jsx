import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import '../../scss/style.scss';

import Header from '../../components/Header';

import widPicture from '../../assets/whatido.png';
import blackHole from '../../assets/Blackhole.gif';
import surfPicture from '../../assets/surfer.png';
import resumePicture from '../../assets/CV_Simon_Garbet_Portfolio.png';
import logomenuB from '../../assets/logomenuB.png';


function Home() {

  const [onAchievements, setOnAchievements] = useState(false)
  const [onAbout, setOnAbout] = useState(false)
  const [onResume, setOnResume] = useState(false)

    useEffect(() => {}, [onAchievements, onAbout, onResume])


  return (
    <div className="globalHome">

      <Header 
      colorLogo='#fff'
      colorBackgroundLogo = '#000'
      logoMenu={logomenuB}
      colorMenu= '#000'
      colorBackgroundMenu = "#fff"
      menuVisible= "y"
      />

      <section className='backgroundGIF'>
        <img src={blackHole} className="blackHoleHome" alt="Animation GIF Cercle Noir"></img>
      </section>


      <section  className='titleHome'>
        <h2 className='galleryWordHome'>QUICK</h2>
        <h2>START</h2>
      </section>

      <section className='menuHome'>

      <Link to = {'/achievements'} className='widPartHome'
      onMouseOver={() => setOnAchievements(true)}
      onMouseLeave={() => setOnAchievements(false)}
      style={{ filter: (onAbout || onResume) ? "brightness(0.6)" : "brightness(1)",}}
      >

          <section className='allBarret'>
          <section className='redBarret1' ></section>
          <section className='redBarret2'></section>
          <section className='redBarret3'></section>
          <section className='redBarret4' ></section>
          </section>

          <img style={{  transform: onAchievements ? "scale(1.1)" : "scale(1)",}} src={widPicture} alt='icone Ordinateur'/>
          <h3 style={{  transform: onAchievements ? "scale(1.03)" : "scale(1)",}}>RÉALISATIONS</h3>
        </Link>

        <Link to = {'/aboutme'} className='surfPartHome'
        onMouseOver={() => setOnAbout(true)}
        onMouseLeave={() => setOnAbout(false)}
        style={{  filter: (onAchievements || onResume) ? "brightness(0.6)" : "brightness(1)",}}
        >
          <img style={{  transform: onAbout ? "scale(1.1)" : "scale(1)",}} src={surfPicture} alt='icone Ordinateur'/>
          <h3 style={{  transform: onAbout ? "scale(1.03)" : "scale(1)",}}>À PROPOS</h3>
        </Link>

        <Link to = {'/resume'} className='resumePartHome'
        onMouseOver={() => setOnResume(true)}
        onMouseLeave={() => setOnResume(false)}
        style={{ filter: (onAchievements || onAbout) ? "brightness(0.6)" : "brightness(1)",}}
        >
          <section className='yellowBlok1'></section>
          <section className='yellowBlok2'></section>
          <img style={{  transform: onResume ? "scale(1.1)" : "scale(1)",}} src={resumePicture} alt='icone Ordinateur'/>
          <h3 style={{  transform: onResume ? "scale(1.03)" : "scale(1)",}}>C.VITÆ</h3>
        </Link>

      </section>

      <section className='clickHome'>
        <p>(CLICK)</p>
        <p>(CLICK)</p>
        <p>(CLICK)</p>
        <p>(CLICK)</p>
        <p>(CLICK)</p>
        <p>(CLICK)</p>
      </section>

    </div>
  )
}

export default Home;
