import React from 'react'

import Header from '../../components/Header';

import logomenuB from '../../assets/logomenuB.png';
import ProfilePicture from '../../assets/imageProfil.jfif';
import MongoDBLogo from '../../assets/mongoDBlogo.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone,  faLocationDot, faEnvelope, faCar, faPuzzlePiece, faUserGraduate, faUserCheck, faHammer, faBriefcase, faTable, faLanguage, faStarOfLife, faAnglesRight} from '@fortawesome/free-solid-svg-icons';
import {  faLinkedin, faGithub, faHtml5, faCss3Alt, faSass, faJs, faSquareGit, faReact, faVuejs, faNodeJs } from '@fortawesome/free-brands-svg-icons';

import '../../scss/style.scss';


function Resume() {

  const onButtonClick = () => {
    fetch('CV_Simon_Garbet.pdf').then(response => {
        response.blob().then(blob => {
            const fileURL = window.URL.createObjectURL(blob);
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'CV_Simon_Garbet.pdf';
            alink.click();
        })
    })
  }



  return (
    <div>

<Header
      colorLogo='#000'
      colorBackgroundLogo = '#fff'
      logoMenu={logomenuB}
      colorMenu= '#000'
      colorBackgroundMenu = "#fff"
        menuVisible= "y"
      />

<div className = 'downloadPDF' >
<button onClick={onButtonClick}>Export CV en .PDF</button>
</div>

      <div className='globalResume'>

      <section className='headResume'>

        <div className='leftSideHeadResume'>
          <div className='titleResume'>
            <h2>SIMON GARBET</h2>
            <h3>DÉVELOPPEUR WEB</h3>
          </div>
          
          <div className='generalInfoResume'>
            <span><FontAwesomeIcon icon={faPhone} /> 06 46 85 05 73</span>
            <span><FontAwesomeIcon icon={faLocationDot} />33 000 Bordeaux</span>
            <a href='mailto: contact@simongarbet.com' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope} />contact@simongarbet.com</a>
            <a href='https://www.linkedin.com/in/simongarbet/' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} />linkedin.com/in/simongarbet</a>
            <a href='https://github.com/SimonGarbet' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} />github.com/SimonGarbet</a>
            <span><FontAwesomeIcon icon={faCar} />Permis B et véhiculé</span>
          </div>

        </div>


        <div className='picResume'>

          <img src={ProfilePicture} alt="Photographie de Simon Garbet"/>

        </div>

      </section>


      <div className='descriptionResume'>


        <section className='leftSideDescriptionResume'>

          <div className='skillsPart'>
            <h4><FontAwesomeIcon icon={faPuzzlePiece} />COMPÉTENCES</h4>

            <p className='greenBox'><strong>CRÉER</strong>, ÉLABORER DES <strong>CONCEPTS <br/>INNOVANTS</strong></p>
            <p className='orangeBox'><strong>CODER</strong>, CONCEVOIR UNE <br/>APPLICATION WEB</p>
            <p className='greenBox'>PROPOSER DES <strong>PISTES <br/>D'AMÉLIORATION</strong></p>
            <p className='orangeBox'><strong>PROMOUVOIR</strong> UNE PROPOSTION, UN <br/>PROJET</p>
            <p className='greenBox'>ACTUALISER RÉGULIÈREMENT <strong>SES <br/>CONNAISSANCES</strong></p>
            <p className='orangeBox'>RÉALISER DES <strong>FICHIERS EXCELS</strong> <br/>PERFORMANTS</p>
          </div>

          <div className='graduationPart'>
            <h4><FontAwesomeIcon icon={faUserGraduate} />FORMATIONS</h4>

            <div>
            <h5>FORMATION DEVELOPPEUR <br/>WEB</h5>
            <p className='orangeWord'>OPENCLASSROOMS</p>
            <p>DIPLÔME <strong>BAC+2</strong></p>
            <p>2023</p>
            </div>

            <div>
            <h5>FORMATION INGÉNIEUR <br/>GÉNIE CIVIL</h5>
            <p className='orangeWord'>INSA TOULOUSE</p>
            <p>3 SEMESTRES VALIDÉS</p>
            </div>
          </div>

        </section>

        <section className='rightSideDescriptionResume'>

          <div className='toolsPart'>
            <h4><FontAwesomeIcon icon={faHammer} />OUTILS</h4>
            <div className='tools_1'>
              <div><FontAwesomeIcon icon={faHtml5} style={{color: "#e75f3c",}} />HTML</div>
              <div><FontAwesomeIcon icon={faCss3Alt} style={{color: "#3c5fe7",}}/>CSS</div>
              <div><FontAwesomeIcon icon={faSass} style={{color: "#cf649a",}}/>Sass</div>
              <div><FontAwesomeIcon icon={faJs} style={{color: "#ecd51f",}}/>Javascript</div>
              <div><FontAwesomeIcon icon={faSquareGit} style={{color: "#f05033",}}/>Git</div>
            </div>
            <div className='tools_2'>
            <div><FontAwesomeIcon icon={faNodeJs} style={{color: "#65a856",}}/>NodeJS</div>
            <div><img src={MongoDBLogo} alt='MongoDB Logo'/>MongoDB</div>
            <div><FontAwesomeIcon icon={faReact} style={{color: "#1adcff",}}/>React</div>
            <div><FontAwesomeIcon icon={faVuejs} style={{color: "#54bf90",}}/>Vue3</div>
            <div><FontAwesomeIcon icon={faGithub}/>Github</div>
            </div>
            <p className='sentenceTools'>OUTILS <strong>DÉVELOPPEUR WEB</strong></p>
            <div className='otherTools'>
              <div>
                <FontAwesomeIcon icon={faTable} style={{color: "#388159",}}/> 
                <p className='titleTools'>EXCEL</p>
                <p>TRÈS BONNES NOTIONS</p>
              </div>
              
              <div>
              <FontAwesomeIcon icon={faLanguage} style={{color: "#1c3779",}}/>
              <p className='titleTools'>ANGLAIS</p>
              <p>NIVEAU B1</p>
              </div>

              <div>
              <FontAwesomeIcon icon={faStarOfLife} style={{color: "#ea543b",}}/>
              <p className='titleTools'>SECOURISME</p>
              <p>NIVEAU PSE2</p>
              </div>
              
               
            </div>

          </div>

          <div className='plusPart'>
            <h4><FontAwesomeIcon icon={faUserCheck} />LES PLUS</h4>

            <div>
              <p className='titlePlus'>SUR MA <br/><strong>MÉTHODE</strong></p>
              <FontAwesomeIcon className='arrow1' icon={faAnglesRight} />
              <FontAwesomeIcon className='arrow2' icon={faAnglesRight} />
              <FontAwesomeIcon className='arrow3' icon={faAnglesRight} />
              <section>
                <p>CR<strong>É</strong>ATIF</p>
                <p>RIGOUR<strong>E</strong>UX</p>
                <p><strong>É</strong>PIST<strong>É</strong>MOPHIL<strong>E</strong></p>
              </section>
            </div>

            <div>
              <p className='titlePlus'>SUR MON <br/><strong>RELATIONNEL</strong></p>
              <FontAwesomeIcon className='arrow1' icon={faAnglesRight} />
              <FontAwesomeIcon className='arrow2' icon={faAnglesRight} />
              <FontAwesomeIcon className='arrow3' icon={faAnglesRight} />
              <section>
                <p><strong>S</strong>OCIABLE</p>
                <p><strong>S</strong>PORTIF</p>
                <p><strong>S</strong>OLIDAIRE</p>
              </section>
            </div>
            
          </div>

          <div className='xpPart'>
            <h4><FontAwesomeIcon icon={faBriefcase} />EXPÉRIENCES</h4>
            
            <div>
              <h5>LIFEGUARD SECOURISTE</h5>
              <p><span>CAMPING SIBLU GASTES</span> - 2022</p>
            </div>

            <div>
              <h5>PREPARATEUR DE COMMANDES</h5>
              <p><span>GERS ÉQUIPEMENT</span> - 2021/2022</p>
            </div>

            <div>
              <h5>BÉNÉVOLE</h5>
              <p><span>RESTOS DU COEUR AUCH</span> - 2021</p>
            </div>

            <div>
              <h5>PREPARATEUR DE COMMANDES</h5>
              <p><span>GERS ÉQUIPEMENT</span> - 2018/2019</p>
            </div>
          </div>         
          
        </section>

      </div>

      </div>

      <section className='whiteFoot'>
        
      </section>

    </div>
  )
}

export default Resume;
