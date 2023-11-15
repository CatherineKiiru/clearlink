import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from './components/NavBar.tsx';
import Hero from './components/Hero.tsx';
import Companies from './components/Companies.tsx';
import Testimonals from './components/Testimonals.tsx';
import Features from './components/Features.tsx';
import Support from './components/Support.tsx';
import Signup from './components/Signup.tsx';
import { ThemeProvider } from '@material-tailwind/react';
import FooterSection from './components/Footer.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <NavBar />
      <Hero />
      <Companies />
      <Features />
      <Testimonals />
      <Support />
      <Signup />
      <FooterSection />
    </ThemeProvider>
  </React.StrictMode>
);
