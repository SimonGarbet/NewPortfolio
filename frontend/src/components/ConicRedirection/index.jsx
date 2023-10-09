import React from 'react';

import '../../scss/style.scss';

function ConicRedirection({color1, color2, maintitle}) {


  return (
    <div className="globalConic">

          <div className='conicForm'>
            <div className='conicColor' style={{ background: `conic-gradient(${color1} 0deg, ${color2} 180deg, ${color1} 360deg)`}}></div>
          </div>

        <h3>{maintitle}</h3>
     
    </div>
  )
}

export default ConicRedirection;
