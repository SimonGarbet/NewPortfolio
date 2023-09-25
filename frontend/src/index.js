import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/1_Home';
import Achievements from './pages/2_Achievements';
import Project from './pages/3_Project';
import AboutMe from './pages/4_AboutMe';
import Resume from './pages/5_Resume';
import Error404 from './pages/6_Error404';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/achievements' element={<Achievements />}/>
        <Route path='/achievements/:id' element={<Project/>}/>
        <Route path='/aboutme' element={<AboutMe/>}/>
        <Route path='/resume' element={<Resume />}/>
        <Route path='*' element={<Error404 />}/>
      </Routes>
    </Router>
  </React.StrictMode>
);
