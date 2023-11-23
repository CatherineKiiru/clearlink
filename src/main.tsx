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
import ContactForm from '../routes/ContactForm.tsx';
import Root from './components/root.tsx';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import Contacts from '../routes/Contacts.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavBar />, //this is the root layout

    children: [
      {
        path: '/contact',
        element: <Contacts />,
      },
    ],
  },
  {
    path: '/',
    element: <Hero />,
  },
  {
    path: '/companies',
    element: <Companies />,
  },
  {
    path: '/',
    element: <Features />,
  },
  {
    path: '/testimonals',
    element: <Testimonals />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/support',
    element: <Support />,
  },
  {
    path: '/footer',
    element: <FooterSection />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />

    <ThemeProvider></ThemeProvider>
  </React.StrictMode>
);
