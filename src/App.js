import React from 'react';
import Header from './components/Header/Header';
import TopContainer from './components/TopContainer/TopContainer';
import SkillContainer from './components/SkillContainer/SkillContainer';
import ProjectContainer from './components/ProjectContainer/ProjectContainer';
import ExperienceContainer from './components/ExperienceContainer/ExperienceContainer';
import Contact from './components/Contact/Contact';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <TopContainer/>
      <SkillContainer/>
      <ProjectContainer />
      <ExperienceContainer />
      <Contact />
    </div>
  )
}

export default App
