import React from "react";
import { Card } from "flowbite-react";

function Features() {
  return (
    <div className=" max-w-[1440px] mx-auto flex flex-col-reverse lg:flex-row grid-col-2 mt-2 lg:mt-24 px-6">
      {/* Grid 1 */}
      <div className="lg:mr-14 lg:w-3/4 lg:pr-6">
        <div className="mt-8 sm:mt-20 lg:mt-0 space-y-4 lg:space-y-0">
          <h1 className="text-lg text-button-blue font-semibold">The ClearLink Advantage</h1>
          <h1 data-aos="fade-up"
     data-aos-duration="3000" className="text-[46px] text-[#1D2939] font-semibold pt-3">Why choose ClearLink?</h1>
          <p className="text-2xl text-[#667085] font-normal pt-5">
            In a world where connection is everything, ClearLink takes the lead.
            Our cutting-edge video conferencing app offers:
          </p>
        </div>

        <div className="px-5 lg:px-0 lg:mr-8 md:grid md:grid-rows-2 md:grid-flow-col space-y-4 md:space-y-0 mt-12 md:mt-14">
          <div className="">
            <Card className="max-w-sm lg:border-none lg:shadow-none">
              <img
                className="w-12 bg-[#F9FAFB] outline outline-[#EAECF0] outline-1 rounded-full p-3"
                src="/src/images/video-recorder.svg"
                alt="video recorder icon"
              />
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Crystal-clear HD video{" "}
              </h5>
              <p className="font-normal text-[#475467] ">
                No more pixelation or blurriness – just stunning, lifelike
                clarity that brings your team closer in meetings.
              </p>
            </Card>
          </div>
          <div>
          <Card className="max-w-sm lg:border-none lg:shadow-none">
              <img className="w-12 bg-[#F9FAFB] outline outline-[#EAECF0] outline-1 rounded-full p-3" src="/src/images/calendar-icon.svg" alt="calendar icon" />
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Scheduling made easy{" "}
              </h5>
              <p className="font-normal text-[#475467]">
                Streamline your agenda with ClearLink's intuitive scheduling.
                Set up meetings, send invitations, and receive reminders in one
                place.
              </p>
            </Card>
          </div>
          <div>
          <Card className="max-w-sm lg:border-none lg:shadow-none">
              <img className="w-12 bg-[#F9FAFB] outline outline-[#EAECF0] outline-1 rounded-full p-3" src="/src/images/sound-wave.svg" alt="sound wave icon" />
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noise-canceling audio{" "}
              </h5>
              <p className="font-normal text-[#475467]">
                Say goodbye to distractions with our advanced audio tech for
                crisp, interruption-free conversations.
              </p>
            </Card>
            
          </div>
          <div>
            <Card className="max-w-sm lg:border-none lg:shadow-none">
              <img className="w-12 bg-[#F9FAFB] outline outline-[#EAECF0] outline-1 rounded-full p-3" src="/src/images/lock-icon.svg" alt="padlock icon" />
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Bank-grade security{" "}
              </h5>
              <p className="font-normal text-[#475467]">
                Your privacy is our priority with bank-grade security protocols
                safeguarding your meetings and data from unwanted intruders.
              </p>
            </Card>
          </div>
        </div>
      </div>

      {/* Grid 2 */}
      <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="mr-8 flex flex-col-reverse lg:block mt-0 md:mt-20 md:scale-110">
        <img
          className="hidden lg:flex md:h-[30%] items-center mr-8 md:ml-14 md:mx-auto md:absolute "
          src="/src/images/arrow.svg"
          alt="hand drawn arrow"
        />
        <img
          className="lg:mt-48"
          src="/src/images/feature-image.svg"
          alt="image grid with many faces"
        />
      </div>
    </div>
  );
}

export default Features;
