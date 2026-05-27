import React from 'react'
import profileimage from '../assets/profileimage.webp'
import Textanimation from './Textanimation'


function Profile() {
  const skills=['AI Enthusiast','Machine Learning Engineer','Deep Learning Expert','Computer Vision Researcher','Developer']
  const Personals=[
    {sign:'📍',
      title:'Location',
      des:'Ulhasnagar Thane India'
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
    <section className='home-section bg-black px-50'>
    <div className=' flex w-full  relative h-155 items-center justify-center gap-20 py-0'>
    <div className=' relative flex justify-center items-center '>
        <div className=' bg-transparent w-80 h-80 border-dashed border-3 border-green-300 rounded-[50%] box '></div>
        <div className='  css-img-box   w-75 h-75  absolute border-4 bg-transparent border-blue-500 rounded-[50%] overflow-hidden   '>
          <img src={profileimage} alt='profile' className='w-full object-contain'/>
        </div>
    </div>
    <div>
      <div className='flex flex-col p-'>
        <div>
          <h1 className='font-bold text-5xl mt-5'>Hi, I'm <span className='name'>Nagendra Singh</span></h1>
          <p className='mt-5 text-gray-300 text-2xl' >I'm  {<Textanimation/>} </p>
        </div>
        <div className='flex flex-wrap mt-9 gap-3 '>
          {skills.map((items)=>(
            <div className='border  py-2.5 px-5 rounded-full border-cyan-500 hover:bg-linear-65 hover:from-blue-400 hover:to-cyan-300 hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-106 transition-all duration-100 '>
              {items}
            </div>
          ))}
        </div>
        <div className='flex gap-4 mt-4 '>
          {Personals.map((items)=>(
            <div className='card text-center py-[12px] px-[18px]  cursor-pointer bg-[rgb(255,255,255,0.05)] rounded-2xl transition-all duration-initial hover:translate-y-[-4px] hover:scale-104 ease-in-out'>
              <h1>{items.sign} <span className='font-bold '>{items.title}</span></h1>
              <span>{items.des}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
    <div className='flex items-center justify-center-safe gap-35 text-center '>
      <div>
        <h1 className='font-medium text-2xl p-3 mb-2'>Connect with me</h1>
        <div className='flex gap-10 p-5'>
        <div className='icons p-3 bg-black rounded-full text-3xl'>
        <i class="fa-brands fa-linkedin-in"></i>
        </div>
        <div className='icons p-3 bg-black rounded-full text-3xl'>
       <i class="fa-regular fa-envelope"></i>
        </div>
        <div className='icons p-3 bg-black rounded-full text-3xl'>
        <i class="fa-brands fa-instagram"></i>
        </div>
        <div className='icons p-3 bg-black rounded-full text-3xl'>
        <i class="fa-brands fa-facebook-f"></i>
        </div>
        </div>
      </div>
      <div className='items-center'>
        <h1  className='font-medium text-2xl p-3 mb-1'>See what i'm doing</h1>
        <div className='flex gap-10 p-5 justify-center items-center'>
       
        <div className='icons p-3 bg-black rounded-full text-3xl'>
        <i class="fa-brands fa-github"></i>
        </div>
        <div className='icons p-3 bg-black rounded-full text-3xl text-black'>
        <i class="fa-brands fa-leetcode"></i>
        </div>
        </div>
      </div>
    </div>
    </section>
    </>
  )
}

export default Profile