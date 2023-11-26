import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from '../routes/NavBar.tsx';
import Hero from '../routes/Hero.tsx';
import Companies from '../routes/Companies.tsx';
import Testimonals from '../routes/Testimonals.tsx';
import Features from '../routes/Features.tsx';
import Support from '../routes/Support.tsx';
import Signup from '../routes/Signup.tsx';
import { ThemeProvider } from '@material-tailwind/react';
import FooterSection from '../routes/Footer.tsx';
import Root from '../routes/Root.tsx';
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import Contacts from '../routes/Contacts.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Root />}>
        <Route path="navbar" element={<NavBar />} />
        <Route path="hero" element={<Hero />} />
        <Route path="companies" element={<Companies />} />
        <Route path="features" element={<Features />} />
        <Route path="testimonials" element={<Testimonals />} />
        <Route path="signup" element={<Signup />} />
        <Route path="support" element={<Support />} />
        <Route path="footer" element={<FooterSection />} />
      </Route>
      <Route>
        <Route path="/contact" element={<Contacts />} />
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ThemeProvider>
      
    </ThemeProvider>
  </React.StrictMode>
);
