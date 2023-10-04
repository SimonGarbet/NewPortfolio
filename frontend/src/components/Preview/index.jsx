import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faSquare, faPlay, faShield } from '@fortawesome/free-solid-svg-icons';

import iPhone from '../../assets/Iphone15Screen.png'


import '../../scss/style.scss'

function Preview({id, maincolor, type, shortTitle, techno, imageSelect}) {

    let iconFontAwesome = 0;
    let backgroundColorPreview = '#fff'
    let textColorPreview = '#000'

    if (type === 'Fullstack'){
        iconFontAwesome = faPlay
    } else if (type === 'Optimisation') {
        iconFontAwesome = faShield
    } else if (type === 'Backend') {
        iconFontAwesome = faSquare
    } else if (type === 'Frontend') {
        iconFontAwesome = faCircle
    }

    if (id % 2 === 0){
        backgroundColorPreview = '#000'
        textColorPreview = ' #fff'
    } else {
        backgroundColorPreview = ' #fff'
        textColorPreview = '#000'
    }

    const [onPreview, setOnPreview] = useState(false)

    useEffect(() => {}, [onPreview])


    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

  return (
    <div className='globalPreview'
    onMouseEnter={() => setOnPreview(true)} 
    onMouseLeave={() => setOnPreview(false)}
    style={{ background: backgroundColorPreview, filter: onPreview ? "brightness(1)" : "brightness(0.75)"}}
    >

        <Link onClick={scrollToTop} to = {`/achievements/${id}`} 
        style={{color: textColorPreview}}
        >
            <div  className='titlePreview' style={{transform: onPreview ? "scale(1.1) translateY(15vh)" : "scale(1) translateY(15vh)"}}>
            <FontAwesomeIcon icon= {iconFontAwesome} className='fontAwesomeTitleProject' style={{color: maincolor}}/>
            <h2>{shortTitle}</h2>
            {techno.map((tech) => (
                <p key={tech}>{tech}</p>
            ))}
            </div>

            <div className='picPreviewPart' style={{transform: onPreview ? "scale(1.05) translateY(-15vh)" : "scale(1) translateY(-15vh)"}} >
                <div className='cutterPic'>
                <img className='iphoneContainer' src={iPhone} alt="Prévisualisation du site web sur un Iphone"/>
                <img className='picAchievement' src={imageSelect} alt="Prévisualisation du site web sur un Iphone" />
                </div>
            </div>
        </Link>

        <div className='scrollBar'>
            <p>(SCROLL)</p>
            <p>(SCROLL)</p>
        </div>

    </div>


  )
}

export default Preview;