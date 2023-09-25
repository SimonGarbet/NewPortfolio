import React from 'react'

import Header from '../../components/Header';

import logomenuW from '../../assets/logomenuW.png';

import '../../scss/style.scss'

function Error404() {
  return (
    <div>
    <Header
      colorLogo='#fff'
      colorBackgroundLogo = '#000'
      logoMenu={logomenuW}
      colorMenu= '#fff'
      colorBackgroundMenu = "#000"
    />
    <h1>404 Error</h1>
    </div>
  )
}

export default Error404;
