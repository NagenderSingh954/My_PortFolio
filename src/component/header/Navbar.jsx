import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Certificates', path: '/certificates' },
    { name: 'Blog', path: '/blog' },
    { name: 'Resume', path: '/resume' },
    { name: 'About Me', path: '/about' },
    { name: 'Contact', path: '/contact' },
    ]
    const [mobilemenu,setMobilemenu] = useState(true)

  return (
    <>
    <nav className="flex text-white bg-transparent backdrop-blur-sm p-4 items-center px-[2rem] py-[1rem] z-10 border-b-[1px] border-white sticky top-0 w-full">  {/*blut TODO*/}
     <div className="flex  items-center space-x-4">
       <div> 
         <h1 className="text-2xl font-bold text-blue-400">NS</h1>
       </div>
       <div>
         <h1 className='font-bold text-sm'>Nagendra Singh</h1>
         <span className='text-gray-400 text-sm'>&#8226; Frontend-Developer</span>
       </div>
     </div>
        <div className={`nav-items-container transition-transform duration-300 ${mobilemenu ?'max-md:-translate-y-full':'max-md:translate-y-0 max-md:bg-black'} flex-1 flex justify-center`}>
            <ul className={`nav-items flex space-x-9`}>
               { navItems.map((item)=>(
                    <li key={item.name} className="  text-white hover:scale-108 font-medium text-md relative" onClick={()=> setMobilemenu((pre)=>!pre)} >
                        <NavLink to={item.path} className={({ isActive }) =>` ${isActive ? 'text-blue-400 nav-item active bottom-1' : 'text-white nav-item'}`} >
                            {item.name}
                        </NavLink>
                    </li>
                ))}
                
            </ul>
        </div>
        <div className='text-3xl z-10 absolute right-6  md:hidden'>
         <button onClick={()=> setMobilemenu((pre)=>!pre)}>{
          mobilemenu ? <i class="fa-solid fa-bars"></i>:<i class="fa-solid fa-xmark"></i>}</button> 
        </div>
    </nav>
    </>
  )
}

export default Navbar