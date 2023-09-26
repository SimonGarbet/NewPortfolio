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
      style={{ border: onAchievements ? '10px solid #fff' : 'none', filter: (onAbout || onResume) ? "grayscale(0.8)" : "grayscale(0)",}}
      >

          <section className='allBarret'>
          <section className='redBarret1' ></section>
          <section className='redBarret2'></section>
          <section className='redBarret3'></section>
          <section className='redBarret4'></section>
          </section>

          <img src={widPicture} alt='icone Ordinateur'/>
          <h3>RÉALISATIONS</h3>
        </Link>

        <Link to = {'/aboutme'} className='surfPartHome'
        onMouseOver={() => setOnAbout(true)}
        onMouseLeave={() => setOnAbout(false)}
        style={{ border: onAbout ? '10px solid #fff' : 'none',  filter: (onAchievements || onResume) ? "grayscale(0.8)" : "grayscale(0)",}}
        >
          <img src={surfPicture} alt='icone Ordinateur'/>
          <h3>À PROPOS</h3>
        </Link>

        <Link to = {'/resume'} className='resumePartHome'
        onMouseOver={() => setOnResume(true)}
        onMouseLeave={() => setOnResume(false)}
        style={{ filter: (onAchievements || onAbout) ? "grayscale(0.8)" : "grayscale(0)",}}
        >
          <section className='yellowBlok1' style={{ border: onResume ? '5px solid #fff' : 'none',}}></section>
          <section className='yellowBlok2' style={{ border: onResume ? '5px solid #fff' : 'none',}}></section>
          <img src={resumePicture} alt='icone Ordinateur'/>
          <h3>C.VITÆ</h3>
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
