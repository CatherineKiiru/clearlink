import { Button } from "flowbite-react";


function Hero() {
  return (
    <div className="md:grid grid-cols-2 md:mt-28">
      <div>
        <h1 className="text-6xl font-semibold text-gray-bold">Uniting the world, one video call at a time</h1>
        <p className="text-2xl font-gray-normal">
          Experience the future of communication with ClearLink – where
          crystal-clear video conferencing meets unparalleled simplicity.
        </p>
        <div className="flex gap-4">
        <Button className="hidden px-4 text-center  md:block rounded-full bg-button-blue text-white ">
          Talk to sales
        </Button>
        <Button className=" px-4 text-center  md:block rounded-full  text-button-blue">
          <span className=""><img src="/src/images/ai-bot.svg" alt="" /></span>
          <h1 className="ml-4">Discover AI assistant</h1>
        </Button>
        </div>
        <div>
            <img src="/src/images/user-reviews.svg" alt="user reviews" />
        </div>
      </div>

      <div>
        <img src="/src/images/hero-image.png" alt="" />
      </div>
    </div>
  );
}

export default Hero;
