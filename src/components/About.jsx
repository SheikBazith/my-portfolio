import React, { Component } from 'react'

function About(props) {
    return (
      <div id='about' className='flex justify-center items-center pt-12 pb-12 lg:pb-0 min-h-[80vh]'>
      <div className='flex flex-col lg:flex-row w-[80%] lg:gap-6'>
      <div className='flex flex-col justify-center items-center basis-1/2 bg-[#eeeade] dark:bg-[#c3ffe8] text-white rounded-xl p-3 mb-6 lg:mb-0'>
      <h3 className='text-xl text-center text-[#292929]'>About Me</h3>
        <p className='text-sm mt-3 text-[#797979]'>An individual who has the ability to understand concepts easily and loves to 
          implement those concepts in daily life, a person who never gives up and tries 
          until he accomplishes the goal. Highly interested in drawing, designing,
          coding, marketing, advertising and researching. My career goal is to give my 
          best in my professional pursuit for overall benefit and growth of the company 
          while seeking a career to utilize my knowledge and personal skills to gain 
          comprehensive understanding of a reputed organization.</p>
      </div>
      <div className='basis-1/2 flex flex-col justify-between gap-2'>
        <div className='text-black border-[2px] border-black dark:border-[#2acc8d] rounded-xl bg-white p-2'>
          <h3>School</h3>
          <p className='text-sm'>Ling Liang High School</p>
          <p className='text-sm'>Kolkata</p>
        </div>
        <div className='flex flex-col md:flex-row gap-2'>
          <div className='basis-1/2 bg-white text-black border-[2px] dark:border-[#2acc8d] border-black rounded-xl p-2'>
            <h3>BCA</h3>
            <p className='text-sm'>Jain University, Bangalore</p>
            <p className='text-sm'>CGPA: 8.6</p>
          </div>
          <div className='basis-1/2 bg-white text-black border-[2px] dark:border-[#2acc8d] border-black rounded-xl p-2'>
            <h3>MCA</h3>
            <p className='text-sm'>Jain University, Bangalore</p>
            <p className='text-sm'>CGPA: 9.07</p>
          </div>
        </div>
        <div className='text-black bg-white border-[2px] dark:border-[#2acc8d] border-black rounded-xl p-2'>
            <h3>IBM</h3>
            <p className='text-sm'>Associate System Engineer</p>
            <p className='text-sm'>2023-Present</p>
        </div>
      </div>
      </div>
      </div>
    )
  }


export default About