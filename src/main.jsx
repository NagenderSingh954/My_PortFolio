import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter, RouterProvider} from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import FloatingBubbles from './component/FloatingBubbles.jsx'
import Project from './pages/Project.jsx'
import Contact from './pages/Contact.jsx'
import About from './pages/About.jsx'

const route=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:'',
        element:<Home/>

      },
      {
        path:'projects',
        element:<Project/>
      },
      {
        path:'contact',
        element:<Contact/>
      },
      {
        path:'about',
        element:<About/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route}>
     <App />
    </RouterProvider>
   
    
  </StrictMode>,
)
