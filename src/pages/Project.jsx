import React from 'react'
import Card from '../component/Card'

function Project() {
  return (
    <>
    <section className='py-5 px-10'>
        <div className='text-4xl text-cyan-400 font-bold mt-8 p-2' >My Projects</div>
        <h1 className=' text-gray-500 p-2 mt-2 font-medium'>A collection of my major works — Showcasing my Jurny</h1>
        <div className='my-9'>
            <Card/>
        </div>
        
    </section>
    </>
  )
}

export default Project