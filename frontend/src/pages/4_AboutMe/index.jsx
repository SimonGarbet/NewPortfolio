import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';

import logomenuB from '../../assets/logomenuB.png';
import BannerPicture from '../../assets/BannerAbout.png';
import MNSPicture from '../../assets/MNS_Simon_Garbet.jpeg'
import ProfilePicture from '../../assets/imageProfil.jfif';
import SportyPicture from '../../assets/SportySection.jpg';
import GamerPicture from '../../assets/GamerSection.png';

import '../../scss/style.scss';

function AboutMe() {
  return (
    <div className='globalAbout'>

      <Header
        colorLogo='#000'
        colorBackgroundLogo = '#fff'
        logoMenu={logomenuB}
        colorMenu= '#000'
        colorBackgroundMenu = "#fff"
        menuVisible= "y"
      />


      <section className='titleAbout'>
      <h2 className='galleryWord'>CRÉATIVITÉ</h2>
      <p>&</p>
      <h2>PROGRAMMATION</h2>
      <img src={BannerPicture} alt="Photographie style Polaroïd d'un surfeur sur une vague prise par Simon Garbet"/>
      </section>


      <section className='devSection'>

        <div className='devDescription'>
          <h3>DÉVELOPPEUR</h3>
          <p>
            Je suis Simon, <strong>développeur web </strong> avec un attrait marqué pour le front-end, le web design, et l’UX/UI design.
            <br/>J’adore <strong>apprendre de nouvelles technologies</strong>, essayer de les comprendre, faire mes premières pages avec et me rendre compte 
            qu’il y a encore un énorme chemin à faire avant d’en devenir expert.
            <br/>J’adore aussi mettre la main sur une idée <strong>originale</strong> <strong>visuelle</strong> et <strong>technique</strong>, m'en inspirer et <strong>essayer de produire une création propre</strong>, avec à la clef un succès, 
            ou un raté (une occasion de comprendre et recommencer), c’est le jeu !
          </p>
        </div>

        <div className='devSummary'>

          <div>
            <h4>1 ANNÉE</h4>
            <p>EXPERIENCE</p>
          </div>

          <div>
            <h4>8+</h4>
            <p>RÉALISATIONS</p>
          </div>

          <div>
            <h4>REACT</h4>
            <p>FRAMEWORK FAVORI</p>
          </div>

        </div>

        <div className='devGallery'>
              <img src={ProfilePicture}  alt='Photographie de Simon Garbet'/>
              <img className="gapPicture" src={MNSPicture} alt='Photographie de Simon Garbet'/>
        </div>
        
      </section>


      <section className='sportySection'>

      <div className='sportyDescription'>
          <h3>SPORTIF</h3>
          <p>
            En dehors du monde du travail, je me définis comme un <strong>sportif</strong>. Natation, Surf, Bodysurf (auquel je couple la photographie), 
            course à pied (compétition 10 et 20km), trail, musculation, roller, escalade ... Dès que je peux <strong>découvrir</strong> et <strong>apprendre</strong> un nouveau sport je le fais, 
            <strong> en groupe</strong> et aussi en <strong>solo</strong>.
          </p>
        </div>

        <div className='sportySummary'>

          <div>
            <h4>PARTAGE</h4>
            <p>SOFT SKILL</p>
          </div>

          <div>
            <h4>DÉCOUVERTE</h4>
            <p>SOFT SKILL</p>
          </div>

          <div>
            <h4>ENVIRONNEMENT</h4>
            <p>SENSIBILISATION</p>
          </div>

        </div>

        <div className='sportyGallery'>
              <img src={SportyPicture} alt="Photographie d'un surfeur prise en GoPro par Simon Garbet"/>
        </div>

      </section>

      <section className='gamerSection'>

        <div className='gamerDescription'>
          <h3>GAMER</h3>
          <p>
            Dernière passion, celle du <strong>jeu-vidéo</strong>. Que ce soit devant un <strong>RPG</strong> comme God of War ou FF16 ou bien en communauté sur un <strong>MMORPG</strong> comme Dofus j’essaie toujours de garder du temps pour ce hobby.
            <br/>Je reste attaché aux <strong>guildes de MMORPG</strong> que j’ai pu rejoindre et dans lesquelles je passe de bon moments en groupe et me suis investi en proposant <strong>divers outils d’organisation</strong>.
          </p>
        </div>

        <div className='gamerSummary'>

          <div>
            <h4>ESPRIT D'ÉQUIPE</h4>
            <p>SOFT SKILL</p>
          </div>

          <div>
            <h4>CRÉATIVITÉ</h4>
            <p>SOFT SKILL</p>
          </div>

          <div>
            <h4>ORGANISATION</h4>
            <p>SOFT SKILL</p>
          </div>

        </div>

        <div className='gamerGallery'>
          <img src={GamerPicture} alt="Screenshot d'un personnage du jeu-vidéo Dofus"/>
        </div>

      </section>

      <section className="resumeRedirection" >

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

export default AboutMe;
