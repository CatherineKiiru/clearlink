import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import Hero from './Hero';
import Companies from './Companies';
import Features from './Features';
import Testimonals from './Testimonals';
import Signup from './Signup';
import Support from './Support';
import FooterSection from './Footer';


function Root() {
  return (
    <div>
        <NavBar/>
        <Hero/>
        <Companies/>
        <Features/>
        <Testimonals/>
        <Signup/>
        <Support/>
        <FooterSection/>
    </div>
  );
}

export default Root;
