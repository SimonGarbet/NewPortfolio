import React from 'react';
import { Link } from 'react-router-dom';

import '../../scss/style.scss';

import Header from '../../components/Header';

import widPicture from '../../assets/whatido.png';
import blackHole from '../../assets/Blackhole.gif';
import surfPicture from '../../assets/surfer.png';
import resumePicture from '../../assets/CV_Simon_Garbet_Portfolio.png';
import logomenuB from '../../assets/logomenuB.png';


function Home() {
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
        <h2 className='galleryWordHome'>QUICK </h2>
        <h2>START</h2>
      </section>

      <section className='menuHome'>

      <Link to = {'/achievements'} className='widPartHome'>

          <section className='allBarret'>
          <section className='redBarret1'></section>
          <section className='redBarret2'></section>
          <section className='redBarret3'></section>
          <section className='redBarret4'></section>
          </section>

          <img src={widPicture} alt='icone Ordinateur'/>
          <h3>WHAT I DO ?</h3>
        </Link>

        <Link to = {'/aboutme'} className='surfPartHome'>
          <img src={surfPicture} alt='icone Ordinateur'/>
          <h3>ABOUT ME</h3>
        </Link>

        <Link to = {'/resume'} className='resumePartHome'>
          <section className='yellowBlok1'></section>
          <section className='yellowBlok2'></section>
          <img src={resumePicture} alt='icone Ordinateur'/>
          <h3>RESUME</h3>
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
