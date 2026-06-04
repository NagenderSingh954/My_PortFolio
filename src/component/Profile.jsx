import React from 'react'
import profileimage from '../assets/profileimage.webp'
import Textanimation from './Textanimation'


function Profile() {
const skills = [
  'Full Stack Developer',
  'Problem Solver',
  'DSA Enthusiast',
  'JavaScript Expert',
  'Tech Explorer'
];  const Personals=[
    {sign:'📍',
      title:'Location',
      des:'Ulhasnagar, Thane India'
    },
    {
      sign:'📍',
      title:'Experience',
      des:'Web Development,Problem Solving'
    },
    {
      sign:'📍',
      title:'Contact',
      des:'nagendersingh954@gmail.com'
    }
  ]
  return (
    <>
    <section className='home-section pb-20 bg-black px-50 max-md:pt-14 max-md:px-16 h-100% w-full '>
    <div className=' flex w-full max-md:flex-wrap relative min-h-155 items-center justify-center gap-20 py-0 '>
    <div className='hero-img relative flex justify-center items-center  '>
        <div className=' bg-transparent w-80 h-80 border-dashed border-3 border-green-300 rounded-[50%] box '></div>
        <div className='  css-img-box   w-75 h-75  absolute border-4 bg-transparent border-blue-500 rounded-[50%] overflow-hidden   '>
         
            <img src={profileimage} alt='Nagender Singh' className='hero-photo w-full object-contain rounded-full '/>
          
        </div>
    </div>
    
      <div className='hero-info flex flex-col max-md:justify-center '>
        <div>
          <h1 className='font-bold text-5xl mt-5'>Hi, I'm <span className='name'>Nagendra Singh</span></h1>
          <p className='mt-5 text-gray-300 text-2xl' >I'm  {<Textanimation/>} </p>
        </div>
        <div className='flex flex-wrap mt-9 gap-3 max-md:justify-center '>
          {skills.map((items)=>(
            <div className='border  py-2.5 px-5 rounded-full border-cyan-500 hover:bg-linear-65 hover:from-blue-400 hover:to-cyan-300 hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-106 transition-all duration-100 '>
              {items}
            </div>
          ))}
        </div>
        <div className='flex gap-4 max-md:flex-wrap mt-4 items-centen justify-center'>
          {Personals.map((items)=>(
            <div className='card text-center py-[12px] px-[18px]  cursor-pointer bg-[rgb(255,255,255,0.05)] rounded-2xl transition-all duration-initial hover:translate-y-[-4px] hover:scale-104 ease-in-out'>
              <h1>{items.sign} <span className='font-bold '>{items.title}</span></h1>
              <span>{items.des}</span>
            </div>
          ))}
        </div>
      </div>
    
    </div>
    <div className='flex flex-wrap items-center justify-center gap-44 text-center max-md:justify-center max-md:gap-8 max-md:my-12 '>
      <div>
        <h1 className='font-medium text-2xl p-3 mb-2'>Connect with me</h1>
        <div className='flex gap-10 p-5'>
        <div className='icons p-3 bg-black rounded-full text-3xl'>
          <a href="https://www.linkedin.com/in/nagender-singh-3a4b89221" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-linkedin-in"></i>
          </a>
        </div>
        <div className='icons p-3 bg-black rounded-full text-3xl'>
          <a href="mailto:nagendersingh954@gmail.com" target="_blank" rel="noopener noreferrer">
            <i class="fa-regular fa-envelope"></i>
          </a>
        </div>
        <div className='icons p-3 bg-black rounded-full text-3xl'>
          <a href="https://www.instagram.com/nagender.s_?igsh=Z205ZHZzNGF2Ym81" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-instagram"></i>
          </a>
        </div>
        <div className='icons p-3 bg-black rounded-full text-3xl'>
          <a href="https://www.facebook.com/share/1X59mADHq2" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-facebook-f"></i>
          </a>
        </div>
        </div>
      </div>
      <div className='items-center'>
        <h1  className='font-medium text-2xl p-3 mb-1'>See what i'm doing</h1>
        <div className='flex gap-10 p-5 justify-center items-center'>
       
        <div className='icons p-3 bg-black rounded-full text-3xl'>
         <a href="https://github.com/NagenderSingh954" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-github"></i>
          </a>
        </div>
        <div className='icons p-3 bg-black  rounded-full text-3xl '>
        <a href="https://leetcode.com/u/Nagender_singh" target="_blank" rel="noopener noreferrer" >
            <i class="fa-solid fa-code"></i>
          </a>
        </div>
        </div>
      </div>
    </div>
    </section>
    </>
  )
}

export default Profile