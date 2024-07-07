import Sidebar from './Sidebar';
import Header from './Header';
import Intro from './Intro';
import About from './About';
import Skills from './Skills';
import skill_list from '../skill_list';
import Tools from './Tools';
import Project from "./Project"
import project_list from '../project_list';
import Contact from './Contact';
import Footer from './Footer';
import { useState } from 'react';
import WorldCapitalQuiz from './WorldCapitalQuiz';




function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  function createSkillCard(skills){
    return(
    <Skills
        key={skills.id}
        id={skills.id}
        name={skills.name}
        img={darkMode ? skills.darkImg : skills.lightImg}
        desc={skills.desc}
    />
    );
  }
  
  function createProjectCard(projects){
    return(
    <Project
        key={projects.id}
        id={projects.id}
        name={projects.name}
        img= {projects.imgURL}
        desc={projects.desc}
        web= {projects.webLink}
    />
    );
  }
  return (
    <div className={`${darkMode && "dark"}`}>
    <div className='dark:bg-[#0d0d0d] flex flex-col scroll-sm'>
      <Sidebar/>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />  
      <Intro/>
      <About/>
      <Tools />
      <div  className='flex flex-col justify-center items-center gap-8 bg-[#eeeade] dark:bg-[#0d0d0d] pt-12 pb-12'>
      <h1 className=' text-4xl dark:text-white'>My Skills</h1>
      <div className='flex flex-col lg:flex-row gap-3'>
      {skill_list.map(createSkillCard)}
      </div>
      </div>
      <div id='projects' className='flex flex-col min-h-[90vh] justify-center items-center gap-8 pt-12 pb-12 bg-[#fdb854] dark:bg-[#29cb8c]'>
      <h1 className='text-4xl dark:text-white'>My Works</h1>
      <div className='flex flex-col lg:flex-row gap-8 '>
      {project_list.map(createProjectCard)}
      </div>
      </div>

      <Contact />
    </div>
    </div>
  );
}

export default App;
