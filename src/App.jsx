import { useState } from 'react'
import Navbar from './component/header/Navbar'
import FloatingBubbles from './component/FloatingBubbles'
import './App.css'
import Profile from './component/Profile'
import Footer from './component/footer/Footer'
import Textanimation from './component/Textanimation'
import { Outlet } from 'react-router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
    <Navbar/>
      <Outlet/>
    <Footer/>
   
    </>
  )
}

export default App
