import React, { Component } from 'react'

export class Contact extends Component {
  render() {
    return (
      <div id='contact' className='flex flex-col gap-6 justify-center items-center mb-5 pb-12 pt-20 min-h-[100vh]'>
      <h1 className=' text-4xl dark:text-white'>Contact</h1>
      <div className='contact-box max-w-[660px] flex flex-col md:flex-row justify-between gap-12 items-center p-4 bg-[#eeeade] dark:bg-[#29cb8c] rounded-3xl text-white dark:text-black'>
      <div className='bg-white rounded-xl'>
      <img className='w-[300px] rounded-xl' src='images/extra/contact.png'/>
      </div>
      <div className='flex flex-col gap-5'>
          <div className='flex items-center gap-4 bg-white p-2 pr-16 rounded-full'>
            <img className='w-[40px]' src='images/extra/email.png'/>
            <p className='text-black'>shkbaz@gmail.com</p>
          </div>

          <div className='flex items-center gap-4 bg-white p-2 pr-16 rounded-full'>
            <img className='w-[40px]' src='images/extra/phone.png'/>
            <p className='text-black'>+91 7406010515</p>
          </div>

          <button onClick={() => window.open('https://drive.google.com/u/0/uc?id=1E17xZP8Dza3FhA6Zb83JREQeDUDb9vnM&export=download', '_blank')}><div className='flex items-center gap-4 bg-white p-2 pr-16 rounded-full cursor-pointer hover:bg-slate-200 hover:border-[2px] hover:border-black transition-all'>
            <img className='w-[40px]' src='images/extra/resume.png'/>
            <p className='text-black'>Download Resume</p>
          </div></button>

  
      </div>
      
      </div>
      </div>
    )
  }
}

export default Contact