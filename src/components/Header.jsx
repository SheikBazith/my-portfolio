import React, { useState } from 'react'
import Intro from './Intro';

function Header(props) {

  return (
    <div className='nav-bar fixed md:flex justify-between items-center p-5 z-50'>
      <h1 className='dark:text-white'></h1>
        <ul className='nav-button hidden lg:flex flex-row gap-4 shadow-black bg-white dark:shadow-lg dark:shadow-[#8b84ec] dark:bg-[#5a4ff5] dark:text-white'>
          <button className='border-[1px] border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-[#5a4ff5]'><a href='#home'>Home</a></button>
          <button className='border-[1px] border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-[#5a4ff5]'><a href='#about'>About</a></button>
          <button className='border-[1px] border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-[#5a4ff5]'><a href='#skills'>Skills</a></button>
          <button className='border-[1px] border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-[#5a4ff5]'><a href='#projects'>Projects</a></button>
          <button className='border-[1px] border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-[#5a4ff5]'><a href='#contact'>Contact</a></button>

        </ul>
        <button className='mode-btn float-right bg-black text-white dark:bg-white dark:text-black' onClick={props.toggleDarkMode}><img src={`images/mode/${props.darkMode ? "sun" : "moon"}.png`}/></button>
        </div>
  )
}

export default Header

