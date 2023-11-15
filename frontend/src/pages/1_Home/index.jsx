import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import '../../scss/style.scss';

import Loader from '../../components/LoaderScreen';
import Header from '../../components/Header';
import ConicRedirection from '../../components/ConicRedirection';
import logomenuW from '../../assets/logomenuW.png';


function Home() {

  const [onAchievements, setOnAchievements] = useState(false)
  const [onAbout, setOnAbout] = useState(false)
  const [onResume, setOnResume] = useState(false)

    useEffect(() => {}, [onAchievements, onAbout, onResume])


    const scrollToTop = () => {
      window.scrollTo(0, 0)
  }


  return (

    <div className='totalHome'>

      <Loader/>

      <div className="globalHome">

        <Header 
        colorLogo='#fff'
        colorBackgroundLogo = '#000'
        logoMenu={logomenuW}
        colorMenu= '#fff'
        colorBackgroundMenu = "#000"
        menuVisible= "y"
        />

        <section className='menuHome'>

          <Link onClick={scrollToTop} to = {'/achievements'} className='widPartHome'
          onMouseOver={() => setOnAchievements(true)}
          onMouseLeave={() => setOnAchievements(false)}
          style={{ filter: (onAbout || onResume) ? "brightness(0.6)" : "brightness(1)",}}
          >
            <ConicRedirection
            color1='#A31621'
            color2= '#FED766'
            maintitle='RÉALISATIONS'
            />
            
          </Link>

          <Link onClick={scrollToTop} to = {'/aboutme'} className='surfPartHome'
          onMouseOver={() => setOnAbout(true)}
          onMouseLeave={() => setOnAbout(false)}
          style={{  filter: (onAchievements || onResume) ? "brightness(0.6)" : "brightness(1)",}}
          >

            <ConicRedirection
            color1='#007991'
            color2='#EA526F'
            maintitle='À PROPOS'
            />
          </Link>

          <Link onClick={scrollToTop} to = {'/resume'} className='resumePartHome'
          onMouseOver={() => setOnResume(true)}
          onMouseLeave={() => setOnResume(false)}
          style={{ filter: (onAchievements || onAbout) ? "brightness(0.6)" : "brightness(1)",}}
          >

          <ConicRedirection
            color1="#DEEFB7"
            color2="#358600"
            maintitle="CURRICULUM"
            />

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
    </div>
  )
}

export default Home;
