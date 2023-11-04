import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import NavBar from './components/NavBar.jsx'
import Hero from './components/Hero.jsx'
import Companies from './components/Companies.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <Hero />
    <Companies />
  </React.StrictMode>,
)
