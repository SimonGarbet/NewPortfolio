import React from 'react'

import Header from '../../components/Header';

import logomenuB from '../../assets/logomenuB.png';

import '../../scss/style.scss'

function Resume() {
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
    <h1>Resume Page</h1>
    </div>
  )
}

export default Resume;
