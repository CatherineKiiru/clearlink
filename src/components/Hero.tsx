import { Button } from "flowbite-react";
import React from "react";

function Hero() {
  return (
    <div className="max-w-[1440px] mx-auto md:grid grid-cols-2 pt-32 px-6 md:pt-0 md:mt-28">
      <div>
        <h1 className="text-5xl md:w-auto md:text-6xl font-extrabold text-gray-bold">
          Uniting the world, one video call at a time
        </h1>
        <p className="text-xl w-11/12 px-2 md:text-2xl mt-6 font-normal text-[#667085]">
          Experience the future of communication with ClearLink – where
          crystal-clear video conferencing meets unparalleled simplicity.
        </p>
        <div className="hidden md:flex md:mt-12 gap-4">
          <Button className=" px-4 text-center  rounded-full bg-button-blue text-white ">
            Talk to sales
          </Button>

          <Button className="hidden md:mx-0 px-4 md:block rounded-full  text-button-blue">
            <span className="flex gap-4 ">
              <img className="" src="/src/images/ai-bot.svg" alt="" />
              <h1 className="mt-1">Discover AI assistant</h1>
            </span>
          </Button>
        </div>
        <div className="hidden md:block md:mt-14 md:w-auto justify-center items-center mx-auto">
          <img className="w-1/2 md:w-1/3" src="/src/images/user-reviews.svg" alt="user reviews" />
        </div>
      </div>
      <div className="mt-6 md:mt-0">
        <img src="/src/images/hero-image.png" alt="" />
      </div>
    </div>
  );
}

export default Hero;
