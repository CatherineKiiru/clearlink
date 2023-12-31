'use client';

import { Footer } from 'flowbite-react';
import React from 'react';
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
  BsLinkedin,
  BsArrowUpCircleFill,
} from 'react-icons/bs';
import playStore from "../images/playstore-badge.svg"
import appStore from "../images/appstore-badge.svg"
import logo from "../images/clearlink-logo.png"

function FooterSection() {
  return (
    <Footer className="shadow-none border-none">
      <div className="w-full">
        <div className=" mb-12 px-5 md:px-0 container mx-auto grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="w-full md:w-1/2 lg:w-1/2 space-y-6">
            <Footer.Brand
              href=""
              src={logo}
              alt="CLearLink Logo"
              name="Clearlink"
            />
            <h1 className="md:w-3/4 text-[#475467]">
              ClearLink is your gateway to effortless, high-quality video
              conferencing. Join us in shaping the future of communication!
            </h1>
          </div>
          <div className="grid grid-cols-5 mt-8 md:mt-0 lg:grid-cols-5 sm:gap-6 w-full">
            <div>
              <Footer.Title title="Product" className="text-[10px] md:text-base"/>
              <Footer.LinkGroup col className="text-[10px] md:text-base">
                <Footer.Link href="#">Overview</Footer.Link>
                <Footer.Link href="#">Features</Footer.Link>
                <Footer.Link href="#">Solutions</Footer.Link>
                <Footer.Link href="#">Tutorials</Footer.Link>
                <Footer.Link href="#">Pricing</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Company" className="text-[10px] md:text-base"/>
              <Footer.LinkGroup col className="text-[10px] md:text-base">
                <Footer.Link href="#">About Us</Footer.Link>
                <Footer.Link href="#">Careers</Footer.Link>
                <Footer.Link href="#">Press</Footer.Link>
                <Footer.Link href="#">News</Footer.Link>
                <Footer.Link href="#">Contact</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Resources" className="text-[10px] md:text-base"/>
              <Footer.LinkGroup col className="text-[10px] md:text-base">
                <Footer.Link href="#">Blog</Footer.Link>
                <Footer.Link href="#">Events</Footer.Link>
                <Footer.Link href="#">Help Center</Footer.Link>
                <Footer.Link href="#">Tutorials</Footer.Link>
                <Footer.Link href="#">Support</Footer.Link>
              </Footer.LinkGroup>
            </div>

            <div>
              <Footer.Title title="Legal" className="text-[10px] md:text-base"/>
              <Footer.LinkGroup col className="text-[10px] md:text-base">
                <Footer.Link href="#">Terms</Footer.Link>
                <Footer.Link href="#">Privacy</Footer.Link>
                <Footer.Link href="#">Cookies</Footer.Link>
                <Footer.Link href="#">Licenses</Footer.Link>
                <Footer.Link href="#">Contact</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div className=" lg:mt-0 ">
              <Footer.Title title="Get the app" className="text-[#004EEB] text-[10px] md:text-base" />

              <Footer.LinkGroup className="lg:flex lg:space-y-8 scale-10 lg:scale-100">
                <Footer.Brand
                  href=""
                  src={appStore}
                  alt="App store download link"
                  name="App store"
                  className=""
                />
                <Footer.Brand
                  href=""
                  src={playStore}
                  alt="playstore logo"
                  name="Playstore"
                />
              </Footer.LinkGroup>
              <button
                className="mt-6 md:mt-12 lg:pl-16 animate-pulse"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <BsArrowUpCircleFill className="w-6 h-6 md:w-12 md:h-12 shadow-md rounded-full fill-blue-500" />
              </button>
            </div>
          </div>
        </div>
        <div className="bg-[#F9FAFB] py-6 md:py-12">
          <div className="container mx-auto w-full text-center md:flex-left sm:flex sm:items-center sm:justify-between ">
            <Footer.Copyright
              href="https://twitter.com/CatherineKiiru"
              
              by="Clearlink™, All Rights Reserved. Website Developed by Catherine Kiiru"
              year={2023}
            />
            <div className="mt-4 justify-center md:justify-normal flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon href="#" icon={BsFacebook} />
              <Footer.Icon href="#" icon={BsInstagram} />
              <Footer.Icon href="#" icon={BsTwitter} />
              <Footer.Icon href="#" icon={BsGithub} />
              <Footer.Icon href="#" icon={BsLinkedin} />
            </div>
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default FooterSection;
