// eslint-disable-next-line no-unused-vars
import React from "react";
import { Navbar, Button, Dropdown } from "flowbite-react";

function NavBar() {
  return (
    <Navbar
      className="max-w-[1440px] justify-between mx-auto md:bg-[#F2F4F7] w-full md:rounded-full absolute md:relative md:w-auto py-6 md:mt-10 text-gray-normal "
      
    >
      <Navbar.Brand className="pl-5" href="">
        <img src="/src/images/clearlink-logo.png" alt="clearlink logo" />
      </Navbar.Brand>

      <div className="flex md:order-2 gap-4">
        <Button className="hidden px-4 text-center lg:block rounded-full bg-white text-gray-bold border-gray-semibold">
          Talk to sales
        </Button>
        <Button className="hidden lg:block rounded-full bg-button-blue">
          Sign up for free
        </Button>
        <Navbar.Toggle className="hover:bg-white pr-5 border-transparent" />
      </div>
      <Navbar.Collapse >
        <div className="mx-auto text-center">
          <Dropdown className="" label="Products" inline>
            <Dropdown.Item>Virtual Meetings</Dropdown.Item>
            <Dropdown.Item>Conferencing Devices</Dropdown.Item>
            <Dropdown.Item>VoIP Phone System</Dropdown.Item>
            <Dropdown.Item>Video Recording</Dropdown.Item>
          </Dropdown>
        </div>
        <div className="mt-4 md:mt-0 mx-auto text-center">
          <Dropdown label="Solutions" inline>
            <Dropdown.Item>For Schools</Dropdown.Item>
            <Dropdown.Item>For Government</Dropdown.Item>
            <Dropdown.Item>For SMEs</Dropdown.Item>
          </Dropdown>
        </div>
        <div className="mt-4 md:mt-0 mx-auto text-center">
          <Dropdown label="Resources" inline>
            <Dropdown.Item>Support</Dropdown.Item>
            <Dropdown.Item>Documentation</Dropdown.Item>
            <Dropdown.Item>Our Blog</Dropdown.Item>
            <Dropdown.Item>Meet the team</Dropdown.Item>
          </Dropdown>
        </div>
        <div className="mx-auto text-center mt-4 md:mt-0">
          <Navbar.Link className="text-gray" href="#">
            Pricing
          </Navbar.Link>
        </div>
        <Button className="mt-4  md:mt-0 md:hidden  bg-white text-gray-bold border-gray-semibold">
          Talk to sales
        </Button>
        <Button className="mt-4 md:mt-0 md:hidden  bg-button-blue ">
          Sign up for free
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
