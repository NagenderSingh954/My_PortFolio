import React from 'react'

function Education({course,school,score,year,city,logo}) {
  return (
    <>
     <div className='flex justify-self-start w-full items-center gap-3 edu-card p-2 mt-5'>
                    <div className='font-bold text-blue-400 text-4xl'>
                    {logo}</div>
                    <div className='flex flex-col text-[#0fff] justify-center'>
                        <h1 className='text-2xl mt-5 text-blue-400 mb-5 font-bold' >{course}</h1>
                        <p className='text-white'><span className='font-bold'>{school}</span>  — {city}</p>
                        <span className='text-slate-500 font-medium mt-3'>{score}</span>
                        <span className='text-slate-500 font-medium mt-3 mb-4'>{year}</span>
                    </div>
                </div>
    </>
  )
}

export default Education