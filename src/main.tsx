import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import NavBar from './components/NavBar.tsx'
import Hero from './components/Hero.tsx'
import Companies from './components/Companies.tsx'
import Testimonals from './components/Testimonals.tsx'
import Features from './components/Features.tsx'
import Support from './components/Support.tsx'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <NavBar />
    <Hero />
    <Companies />
    <Features/>
    <Testimonals/>
    <Support />    
  </React.StrictMode>,
)
