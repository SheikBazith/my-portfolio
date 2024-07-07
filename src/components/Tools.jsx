import React from 'react'
import WorldCaptailQuiz from "./WorldCapitalQuiz"

function Tools(props) {
  return (
    <div id='skills' className='flex flex-col justify-center items-center gap-12 pb-12'>
    <div><h4 className='text-3xl dark:text-white'>Tools</h4></div>
    <div className='flex flex-col md:flex-row md:gap-6 lg:gap-24 md:justify-evenly lg:flex-row gap-20'>
    <div className='flex gap-6 lg:gap-24 justify-center items-center'>
    <img onClick={props.reactBtn} className='skill-img w-[80px]' src='images/skills/react.png'/>  
    <img onClick={props.htmlBtn} className='skill-img w-[80px]' src='images/skills/html5.jpg'/>
    <img onClick={props.tailwindBtn} className='skill-img w-[80px]' src='images/skills/tailwind.png'/>
    </div>
    <div className='flex gap-6 lg:gap-24 justify-center items-center'>
    <img onClick={props.cssBtn} className='skill-img w-[80px]' src='images/skills/css.png'/>
    <img onClick={props.JSBtn} className='skill-img w-[80px]' src='images/skills/js.png'/>
    <img onClick={props.psgBtn} className='skill-img w-[80px]' src='images/skills/postgres.png'/>
    </div>
    </div>
    </div>  
  )
  
}

export default Tools