import React, { Component } from 'react'

export class Contact extends Component {
  render() {
    return (
      <div id='contact' className='flex flex-col justify-center items-center gap-12 p-12'>
      <h1 className='  text-6xl dark:text-white'>Contact</h1>
      <div className='contact-box border-[1px] rounded-3xl p-12 flex flex-col gap-12 bg-[#eeeade] dark:bg-[#29cb8c] dark:text-black'>
      <div className=''>
      <img className='w-[800px]' src='images/extra/contact.png'/>
      </div>
      <div className='flex flex-col gap-6'>
          <div className='flex items-center gap-4 bg-white p-6 rounded-full cursor-pointer hover:bg-slate-200 hover:border-[2px] hover:border-black transition-all'>
            <img className='w-[120px]' src='images/extra/email.png'/>
            <p className='text-5xl'>shkbaz@gmail.com</p>
          </div>

          <div className='flex items-center gap-4 bg-white p-6 rounded-full cursor-pointer hover:bg-slate-200 hover:border-[2px] hover:border-black transition-all'>
            <img className='w-[120px]' src='images/extra/phone.png'/>
            <p className='text-5xl'>+91 7406010515</p>
          </div>

          <button onClick={() => window.open('https://drive.google.com/u/0/uc?id=1E17xZP8Dza3FhA6Zb83JREQeDUDb9vnM&export=download', '_blank')}>
          <div className='flex items-center gap-4 bg-white p-6 rounded-full cursor-pointer hover:bg-slate-200 hover:border-[2px] hover:border-black transition-all'>
            <img className='w-[120px]' src='images/extra/resume.png'/>
            <p className='text-5xl'>Download Resume</p>
          </div></button>

  
      </div>
      
      </div>
      </div>
    )
  }
}

export default Contact
