import React from 'react';
import {useState} from "react";

import '../../scss/style.scss';

function LoaderScreen() {


  const [loadVisiblity, setLoadVisibility] = useState(false);

  setTimeout(() => {
    setLoadVisibility(false);
  }, "4000");


  return (
    <div className="globalLoader" style={{display: loadVisiblity ? 'block' : 'none'}}>

          <section className='loaderTitle'>
            <p className='loaderMainS'>s</p>
            <p className='loaderMainI'>i</p>
            <p className='loaderMainM'>m</p>
            <p className='loaderMainO'>o</p>
            <p className='loaderMainN'>n</p>
            <p className='loaderMainG'>g</p>
            <p className='loaderMainA'>a</p>
            <p className='loaderMainR'>r</p>
            <p className='loaderMainB'>b</p>
            <p className='loaderMainE'>e</p>
            <p className='loaderMainT'>t</p>
            <div className='loaderPoint'><div></div></div>
            <p className='loaderCOM'>com</p>
            </section>

           <section className='loadingSentence'>
            <p className='mainSentence'>Bienvenue</p>
            <p>Chargement</p>
            <div className='loaderLogo'>
            </div>
           </section>
     
    </div>
  )
}

export default LoaderScreen;
