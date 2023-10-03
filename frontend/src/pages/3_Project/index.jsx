import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Header from '../../components/Header';
import Error from '../6_Error404/index';

import logomenuB from '../../assets/logomenuB.png';
import iPhone from '../../assets/Iphone15Screen.png'

import '../../scss/style.scss'



function Project() {

  const [isDataLoading, setDataLoading] = useState(true);
  const [error, setError] = useState(false);
  const [projectList, setProjectList] = useState([]);
  const [projectTarget, setProjectTarget] = useState([]);


  const idProject =useParams();

    useEffect(() => {
    async function fetchProject() {
      setDataLoading(true)
      try {
        const response = await fetch(`/datas/achievements.json`)
        const projectList = await response.json()
        setProjectList(projectList)
        setProjectTarget(projectList.filter((profile) => profile.id === idProject.id))
      } catch (err) {
        console.log('===== error =====', err)
        setError(true)
      } finally {
        setDataLoading(false)
      }
    }
    fetchProject()
  }, [idProject]);

  if (error) {
    return <Error />
  } 


let idPrev = parseInt(idProject.id)+1;
let idNext = parseInt(idProject.id)-1;

 function calculRedirect(){

  if (parseInt(idProject.id) === projectList.length){
    idPrev = 1;
  }

  if (parseInt(idProject.id) === 1){
    idNext = projectList.length;
  }

}

calculRedirect()



  return (
    <div>

    { isDataLoading ? (
      <div>Loading Screen</div>
    ):(
      <div className='globalProject'>

    <Header
      colorLogo='#000'
      colorBackgroundLogo = '#fff'
      logoMenu={logomenuB}
      colorMenu= '#000'
      colorBackgroundMenu = "#fff"
      menuVisible= "y"
    />

        <section className='titleProject'>
          <h2>{projectTarget[0].longTitle[0]}</h2>
          <h3>{projectTarget[0].longTitle[1]}</h3>
        </section>

        <section className='switchProject'>
          <Link to = {`/achievements/${idPrev}`}>RÉALISATION PRÉCÉDENTE</Link>
          <Link to = {`/achievements/${idNext}`}>RÉALISATION SUIVANTE</Link>
        </section>

        <section className='bannerProject'>
            {projectTarget[0].pictures.Summary.map((picture) =>(
              <img className={picture.id} key={picture.id} src={picture.url} alt='Bannière de la réalisation illustrée en trois images' />
            ))}
        </section>

        <section className='dataProject'>

          <div>
            <p>CLIENT</p>
            <h5>{projectTarget[0].client}</h5>
          </div>

          <div>
            <p>ANNÉE</p>
            <h5>{projectTarget[0].year}</h5>
          </div>

          <div>
            <p>CATEGORIE</p>
            <h5>{projectTarget[0].category}</h5>
          </div>

        </section>

        <section className='descriptionProject'>

              <h4>{projectTarget[0].summarySentence}</h4>

              <div className='splitterChallengeProject'>
                <h6>OBJECTIF</h6>
                <div>
                  <p>{projectTarget[0].challenge}</p>
                  <div className='gfLinks'>
                  <a href={projectTarget[0].githubLink} target="_blank" rel="noopener noreferrer">Github</a>
                  <a style={{display: (projectTarget[0].figmaLink === "") ? "none" : "block" }} href={projectTarget[0].figmaLink} target="_blank" rel="noopener noreferrer">Figma</a>
                  <a style={{display: (projectTarget[0].actualSite === "") ? "none" : "block" }} href={projectTarget[0].actualSite} target="_blank" rel="noopener noreferrer">Modèle</a>
                  </div>
                </div>
              </div>
        </section>


        <section className='screenDeskProject'>
            {projectTarget[0].pictures.DescriptionDesk.map((picture) =>(
              <div key={picture.id} className={picture.id} >
              <img src={picture.url} alt='Screenshots desktop de chaque page du site web développé' />
              </div>
            ))}
        </section>

        <section className='screenMobProject' 
        style = {{ background: (projectTarget[0].pictures.DescriptionDesk.length % 2 === 0) ? '#000' :  '#fff',}}
        >
            {projectTarget[0].pictures.DescriptionMob.map((picture) =>(
              <div key={picture.id}  className={picture.id}>
              <div className='cutterPic'>
              <img className='iphoneContainer' src={iPhone} alt="Prévisualisation du site web sur un Iphone"/>
              <img className= "screenMobileProject" src={picture.url} alt='Screenshots mobile de chaque page du site web développé' />
              </div>
              </div>
            ))}
        </section>

        <section className='projectRedirections'>


        <Link className='prevProjectRedirection' to = {`/achievements/${idPrev}`}>
        <div className='scroll'>
          <div className='leftToRightProject'>
              <p className='galleryWord'>RÉALISATION PRÉCÉDENTE</p>
              <p className='poppinsWord'>RÉALISATION PRÉCÉDENTE</p>
              <p className='galleryWord'>RÉALISATION PRÉCÉDENTE</p>
              <p className='poppinsWord'>RÉALISATION PRÉCÉDENTE</p>
              <p className='galleryWord'>RÉALISATION PRÉCÉDENTE</p>
              <p className='poppinsWord'>RÉALISATION PRÉCÉDENTE</p>
              <p className='galleryWord'>RÉALISATION PRÉCÉDENTE</p>
          </div>
        </div>
        </Link>

        <Link className='nextProjectRedirection' to = {`/achievements/${idNext}`}>
        <div className='scroll'>
          <div className='leftToRightProject'>
              <p className='galleryWord'>RÉALISATION SUIVANTE</p>
              <p className='poppinsWord'>RÉALISATION SUIVANTE</p>
              <p className='galleryWord'>RÉALISATION SUIVANTE</p>
              <p className='poppinsWord'>RÉALISATION SUIVANTE</p>
              <p className='galleryWord'>RÉALISATION SUIVANTE</p>
              <p className='poppinsWord'>RÉALISATION SUIVANTE</p>
              <p className='galleryWord'>RÉALISATION SUIVANTE</p>
          </div>
        </div>
        </Link>

        </section>


      </div>
    )}
    </div>
  )
}

export default Project;
