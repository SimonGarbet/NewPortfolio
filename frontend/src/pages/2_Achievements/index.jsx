import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Error from '../6_Error404/index';

import Preview from '../../components/Preview';

import Header from '../../components/Header';

import logomenuB from '../../assets/logomenuB.png';

import '../../scss/style.scss';

function Achievements() {


  const [isDataLoading, setDataLoading] = useState(true);
  const [error, setError] = useState(false);
  const [projectList, setProjectList] = useState([]);



    useEffect(() => {
    async function fetchProject() {
      setDataLoading(true)
      try {
        const response = await fetch(`/datas/achievements.json`)
        const projectList = await response.json()
        setProjectList(projectList)
      } catch (err) {
        console.log('===== error =====', err)
        setError(true)
      } finally {
        setDataLoading(false)
      }
    }
    fetchProject()
  }, []);


  if (error) {
    return <Error />
  } 

  return (
    <div className='totalAchievements'>

      <section className='globalAchievementsVertical'>

      <Header 
      colorLogo='#000'
      colorBackgroundLogo = '#fff'
      logoMenu={logomenuB}
      colorMenu= '#000'
      colorBackgroundMenu = "#fff"
      menuVisible= "y"
      />

      {isDataLoading ? (
          <h2>Loading Screen</h2>
        ) :(
          <div className='allAchievementsVertical'>
            {projectList?.map((project) => (
              <Preview
              key = {project.id}
              id = {project.id}
              maincolor = {project.maincolor}
              type = {project.type}
              shortTitle = {project.shortTitle}
              techno = {project.techno}
              imageSelect = {project.pictures.Select}
              />
            ))}

          </div> 

      )}




      </section>


    <section className='globalAchievementsHorizontal'>
      
      <section className='blocHorizontal' style={{width: `${40*(projectList.length+1)}vw`}}>

      <Header 
      colorLogo='#000'
      colorBackgroundLogo = '#fff'
      logoMenu={logomenuB}
      colorMenu= '#000'
      colorBackgroundMenu = "#fff"
      menuVisible= "n"
      />

        {isDataLoading ? (
          <h2>Loading Screen</h2>
        ) :(
          <div className='allAchievements'>
            {projectList?.map((project) => (
              <Preview
              key = {project.id}
              id = {project.id}
              maincolor = {project.maincolor}
              type = {project.type}
              shortTitle = {project.shortTitle}
              techno = {project.techno}
              imageSelect = {project.pictures.Select}
              />
            ))}
          <Link to = {`/aboutme`} className='endAchievements'>
            <h2>DÉCOUVREZ MON PROFIL</h2>
            <h3>SIMON GARBET</h3>
          </Link>

          </div> 
        )}
        
    

      </section>
    </section>


    </div>
  )
}

export default Achievements;
