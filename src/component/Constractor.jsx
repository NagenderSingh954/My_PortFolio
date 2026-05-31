import React from 'react'

function Constractor({title}) {
  return (
    <div className='w-full h-[100vh] flex justify-center items-center'>
        <h2 className='text-3xl font-bold text-white'>{title}</h2>
    </div>
  )
}

export default Constractor