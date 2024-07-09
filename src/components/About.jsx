import React, { Component } from 'react'

function About(props) {
    return (
      <div id='about' className=''>
      <div className='flex flex-col gap-12 justify-center p-12 pl-20 pr-20'>
      <div className='flex flex-col gap-7 p-12 bg-[#eeeade] dark:bg-[#c3ffe8] text-white'>
      <h3 className='text-6xl text-center text-[#292929]'>About Me</h3>
        <p className='text-3xl text-[#797979]'>An individual who has the ability to understand concepts easily and loves to 
          implement those concepts in daily life, a person who never gives up and tries 
          until he accomplishes the goal. Highly interested in drawing, designing,
          coding, marketing, advertising and researching. My career goal is to give my 
          best in my professional pursuit for overall benefit and growth of the company 
          while seeking a career to utilize my knowledge and personal skills to gain 
          comprehensive understanding of a reputed organization.</p>
      </div>
      <div className='flex flex-col gap-6 basis-1/2 text-3xl'>
        <div className=' flex flex-col text-3xl gap-2 p-5 text-black border-[2px] border-black dark:border-[#2acc8d] rounded-xl bg-white'>
          <h3>School</h3>
          <p>Ling Liang High School</p>
          <p>Kolkata</p>
        </div>
        <div className='flex flex-col gap-6'>
          <div className='basis-1/2 p-5 bg-white text-black border-[2px] dark:border-[#2acc8d] border-black rounded-xl'>
            <h3>BCA</h3>
            <p>Jain University, Bangalore</p>
            <p>CGPA: 8.6</p>
          </div>
          <div className='basis-1/2 p-5 bg-white text-black border-[2px] dark:border-[#2acc8d] border-black rounded-xl'>
            <h3>MCA</h3>
            <p>Jain University, Bangalore</p>
            <p>CGPA: 9.07</p>
          </div>
        </div>
        <div className='text-black p-5 bg-white border-[2px] dark:border-[#2acc8d] border-black rounded-xl p-2'>
            <h3>IBM</h3>
            <p>Associate System Engineer</p>
            <p>2023-Present</p>
        </div>
      </div>
      </div>
      </div>
    )
  }


export default About
