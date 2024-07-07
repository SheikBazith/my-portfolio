import React from 'react'

function Sidebar(props) {
  return (
    <div className='w-[60px] h-screen flex flex-col justify-center items-center fixed'>
    <div className='bg-[#5a4ff5] flex flex-col gap-3 p-3 rounded-r-xl'>
        <button onClick={() => window.open('https://github.com/SheikBazith', '_blank')}><img className='side-list' src='images/side-bar/light-mode/git.png' /></button>
        <button onClick={() => window.open('https://www.linkedin.com/in/sheik-bazith-439415205/', '_blank')}><img className='side-list' src='images/side-bar/light-mode/linkedin.png'/></button>
        <button onClick={() => window.open('https://www.behance.net/sheikbazith', '_blank')}><img className='side-list' src='images/side-bar/light-mode/behance.png'/></button>
        </div>
    </div>
  )
}

export default Sidebar;
