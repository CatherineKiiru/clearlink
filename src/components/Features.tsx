import React from "react";
import { Card } from "flowbite-react";

function Features() {
  return (
    <div className="px-5 md:px-0 flex flex-col-reverse md:flex md:grid-col-2">
      {/* Grid 1 */}
      <div className=" md:w-3/4">
        <div className="mt-8 md:mt-0 space-y-6 md:space-y-0">
          <h1 className="text-lg text-button-blue font-semibold">The ClearLink Advantage</h1>
          <h1 className="text-5xl text-[#1D2939] font-semibold">Why choose ClearLink?</h1>
          <p className="text-2xl text-[#667085] font-normal">
            In a world where connection is everything, ClearLink takes the lead.
            Our cutting-edge video conferencing app offers:
          </p>
        </div>

        <div className="flex flex-wrap gap-8 mt-20">
          <div>
            <Card className="max-w-sm">
              <img
                className="w-5"
                src="/src/images/video-recorder.svg"
                alt="video recorder icon"
              />
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Crystal-clear HD video{" "}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                No more pixelation or blurriness – just stunning, lifelike
                clarity that brings your team closer in meetings.
              </p>
            </Card>
          </div>
          <div>
            <Card className="max-w-sm">
              <img className="w-5" src="/src/images/sound-wave.svg" alt="sound wave icon" />
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noise-canceling audio{" "}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Say goodbye to distractions with our advanced audio tech for
                crisp, interruption-free conversations.
              </p>
            </Card>
          </div>
          <div>
            <Card className="max-w-sm">
              <img className="w-5" src="/src/images/calendar-icon.svg" alt="calendar icon" />
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Scheduling made easy{" "}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Streamline your agenda with ClearLink's intuitive scheduling.
                Set up meetings, send invitations, and receive reminders in one
                place.
              </p>
            </Card>
          </div>
          <div>
            <Card className="max-w-sm">
              <img className="w-5" src="/src/images/lock-icon.svg" alt="padlock icon" />
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Bank-grade security{" "}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Your privacy is our priority with bank-grade security protocols
                safeguarding your meetings and data from unwanted intruders.
              </p>
            </Card>
          </div>
        </div>
      </div>

      {/* Grid 2 */}
      <div className="flex flex-col-reverse">
        <img
          className="h-36 md:h-[30%] items-center mr-8 md:ml-14 md:mx-auto md:absolute"
          src="/src/images/arrow.svg"
          alt="hand drawn arrow"
        />
        <img
          className=" md:mt-[40%]"
          src="/src/images/feature-image.svg"
          alt="image grid with many faces"
        />
      </div>
    </div>
  );
}

export default Features;