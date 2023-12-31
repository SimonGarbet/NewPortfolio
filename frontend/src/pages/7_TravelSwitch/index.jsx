import React from 'react';
import {useEffect, useState} from "react";

import Header from '../../components/Header';
import Error from '../6_Error404/index';
import Location from '../../components/Location';


import logomenuW from '../../assets/logomenuW.png';
import switchLogo from '../../assets/switch-logo.png';
import arrowLoopB from "../../assets/arrowloopB.png";
import arrowLoopW from "../../assets/arrowloopW.png";

import '../../scss/style.scss';

function TravelSwitch() {

  const [displayHome, setDisplayHome] = useState(true); // Détermine l'affichage de l'accueil
  const [displayEnd, setDisplayEnd] = useState(false); // Détermine l'affichage de l'accueil
  const randomValueDN = Math.floor(Math.random() * 2); // Détermine de manière aléatoire le mode jour ou nuit de la page d'accueil
  const [dayMode, setDayMode] = useState((randomValueDN=== 0) ? true : false); // Détermine le mode jour ou nuit de la ville à afficher

  const [isDataLoading, setDataLoading] = useState(true);
  const [error, setError] = useState(false);
  const [locationList, setLocationList] = useState([]); // Valeur de récupération du JSON

  const [randomLocation, setRandomLocation] = useState(); // Détermine l'id de la ville à afficher
  const [viewedRandom, setViewedRandom] = useState([]);  // Récupère les id pour ne pas les proposer deux fois
  const [locationTarget, setLocationTarget] = useState({}); // Valeur de récupération de l'objet à afficher en fonction de l'id


  useEffect(() => {
    const filteredLocation = locationList.filter((object) => object.id === randomLocation)[0];
    setLocationTarget(filteredLocation); // Génération de l'objet désiré
  }, [randomLocation]);


    useEffect(() => {
    async function fetchLocations() {
      setDataLoading(true)
      try {
        const response = await fetch(`/datas/locations.json`)
        const locationList = await response.json()
        setLocationList(locationList)

      } catch (err) {
        console.log('===== error =====', err)
        setError(true)
    } finally{
      setDataLoading(false)
    }
  }
  fetchLocations();
}, []);


  if (error) {
    return <Error />
  } 



  function DayNightToggle() {
    window.scrollTo(0, 0) // Reset en haut de la page
    setDisplayHome(false) // Display none la page d'accueil
    setDayMode(!dayMode) // Change le mode jour/nuit
    RerollRandom(viewedRandom);
  };



// Cette fonction a pour but de retirer l'id récupérée pour éviter de redonner une destination déjà vue.
  function RerollRandom (viewedRandom){  
    const randomLocation = (Math.floor(Math.random() * (locationList.length))+ 1) // Attribution d'un id random

    if (viewedRandom.length === locationList.length) {
      setDisplayEnd(true)
    }

    else if (viewedRandom.includes(randomLocation)){
    RerollRandom(viewedRandom) // Relance nombre aléatoire
  }  else {
    viewedRandom.push(randomLocation); // Intégration de l'id choisi pour le mettre dans le tableau
    setViewedRandom(viewedRandom) // Actualisation de viewedRandom

    setRandomLocation(randomLocation); // Actualisation de randomLocation
  }

}




  


  return (
    <div className='globalTravelSwitch'>


      <Header
        colorLogo='#000'
        colorBackgroundLogo = '#fff'
        logoMenu={logomenuW}
        colorMenu= '#fff'
        colorBackgroundMenu = "#000"
        menuVisible= "y"
      />

      <section className='globalTSHome'
      style = {{ background : (randomValueDN === 0) ? '#ECE2D0' : '#01295F' , display : displayHome ? "flex" : "none"}}>

          <h1>TRAVEL<br/>SWITCH</h1>

          <div className='blockSwitch' onClick={DayNightToggle}>
            <img src={switchLogo} className='switchLogoHome' alt='Interrupteur à cliquer'
            style = {{transform : (randomValueDN === 0) ? 'rotate(0)' : 'rotate(180deg)', cursor: "pointer"}}/>
            <img src = {(randomValueDN===0) ? `${arrowLoopB}` : `${arrowLoopW}` } className='arrowLoopHome' alt = "Flèche indiquant l'interrupteur"></img>
            <p style = {{color : (randomValueDN === 0) ? '#000' : '#FFF'}}>Appuie sur l'interrupteur pour démarrer</p>
          </div>

      </section>

      <section className='globalTSEnd'
      style = {{ background : dayMode ? '#ECE2D0' : '#01295F' , display : displayEnd ? "flex" : "none"}}>
        <h1>TRAVEL<br/>SWITCH</h1>
        <h2 style = {{color : dayMode ? '#000' : '#FFF'}}>Vous avez visité toutes les destinations</h2>
        <p onClick={() => {setDisplayHome(true); setDisplayEnd(false); setViewedRandom([]);}} className='homeRedirection' style = {{color : dayMode ? '#000' : '#FFF'}}>Revenir au début</p>
        <p style = {{color : dayMode ? '#000' : '#FFF'}}>Vous pouvez me suggérer de nouvelles destinations à l'adresse <strong>contact@simongarbet.com</strong></p>
      </section>

      { isDataLoading ? (
        <div>
          Loading
        </div>
      ) : (
        <section style= {{display : (displayHome || displayEnd ) ? "none" : "block"}}>
        <Location DayNightToggle={DayNightToggle} locationTarget={locationTarget} dayMode={dayMode}/>
        </section>
      )
      }

     


    </div>
  );
}

export default TravelSwitch;
