import { Button } from "flowbite-react";


function Hero() {
  return (
    <div className="grid grid-cols-2">
      <div>
        <h1>Uniting the world, one video call at a time</h1>
        <p>
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
      </div>
      <div>2</div>
    </div>
  );
}

export default Hero;
