import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Skills', path: '/skills' },
    { name: 'Certificates', path: '/certificates' },
    { name: 'Blog', path: '/blog' },
    { name: 'Resume', path: '/resume' },
    { name: 'About Me', path: '/about' },
    { name: 'Contact', path: '/contact' },
    ]

  return (
    <>
    <nav className="flex text-white bg-black p-4 items-center px-[2rem] py-[1rem] z-10 border-b-[1px] border-white">  {/*blut TODO*/}
     <div className="flex  items-center space-x-4">
       <div> 
         <h1 className="text-2xl font-bold text-blue-400">NS</h1>
       </div>
       <div>
         <h1 className='font-bold text-sm'>Nagendra Singh</h1>
         <span className='text-gray-400 text-sm'>&#8226; Frontend-Developer</span>
       </div>
     </div>
        <div className="flex-1 flex justify-center">
            <ul className="flex space-x-9">
               { navItems.map((item)=>(
                    <li key={item.name} className="  text-white hover:scale-108 font-medium text-md relative" >
                        <NavLink to={item.path} className={({ isActive }) =>` ${isActive ? 'text-blue-400 nav-item active bottom-1' : 'text-white nav-item'}`} >
                            {item.name}
                        </NavLink>
                    </li>
                ))}
                
            </ul>
        </div>
    </nav>
    </>
  )
}

export default Navbar