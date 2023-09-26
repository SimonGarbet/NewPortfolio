import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';

import logomenuB from '../../assets/logomenuB.png';
import BannerPicture from '../../assets/BannerAbout.png';
import ProfilePicture from '../../assets/imageProfil.jfif';
import SportyPicture from '../../assets/SportySection.jpg';
import GamerPicture from '../../assets/GamerSection.png';

import '../../scss/style.scss';

function AboutMe() {
  return (
    <div>

      <Header
        colorLogo='#000'
        colorBackgroundLogo = '#fff'
        logoMenu={logomenuB}
        colorMenu= '#000'
        colorBackgroundMenu = "#fff"
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
            Je suis Simon, <strong>développeur web junior</strong> et je me suis découvert une passion de front-end, de web design, et d’UX/UI design.
            <br/>J’adore <strong>apprendre de nouvelles technos</strong>, essayer de les comprendre, faire mes premières pages avec et me rendre compte 
            qu’il y a encore un énorme chemin à faire avant d’en devenir expert.
            <br/>J’adore aussi mettre la main sur une <strong>idée originale</strong> visuellement parlant, m'en inspirer et <strong>essayer de produire une création propre</strong>, avec un succès parfois critique, 
            parfois inexistant (une occasion de comprendre et recommencer), c’est le jeu !
          </p>
        </div>

        <div className='devSummary'>

          <div>
            <h4>1 ANNÉE</h4>
            <p>EXPERIENCE</p>
          </div>

          <div>
            <h4>7+</h4>
            <p>RÉALISATIONS</p>
          </div>

          <div>
            <h4>REACT</h4>
            <p>FRAMEWORK FAVORI</p>
          </div>

        </div>

        <div className='devGallery'>
              <img src={ProfilePicture} alt='Photographie de Simon Garbet'/>
              <img className="gapPicture" src={ProfilePicture} alt='Photographie de Simon Garbet'/>
        </div>
        
      </section>


      <section className='sportySection'>

      <div className='sportyDescription'>
          <h3>SPORTIF</h3>
          <p>
            En dehors du monde du travail, je me définis comme un <strong>sportif</strong>. Natation, Surf, Bodysurf (auquel je couple la photographie), 
            course à pied (compétition 10 et 20km), trail, musculation ... Dès que je peux <strong>découvrir</strong> et <strong>apprendre</strong> un nouveau sport je le fais, 
            <strong>en groupe</strong> avec les potes et aussi en <strong>solo</strong>.
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
            Dernière passion, celle du <strong>jeu-vidéo</strong>. Que ce soit devant un <strong>RPG</strong> à la God of War ou FF16 ou bien en communauté sur un <strong>MMORPG</strong> à la Dofus j’essaie toujours de me garder du temps pour ce hobby.
            <br/>Je reste attaché aux <strong>guildes de MMORPG</strong> que j’ai pu rejoindre et dans lesquelles je passe énormémént de bon temps et me suis investi en proposant <strong>divers outils d’organisation</strong>.
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

      <Link className="resumeRedirection" to = {'/resume'}>
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
      </Link>

    </div>
  )
}

export default AboutMe;
