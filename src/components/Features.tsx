import React from "react";
import { Card } from "flowbite-react";

function Features() {
  return (
    <div className=" flex grid-col-2">
      {/* Grid 1 */}
      <div className=" w-3/4">
        <div>
          <h1>The ClearLink Advantage</h1>
          <h1>Why choose ClearLink?</h1>
          <p>
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
                alt=""
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
              <img className="w-5" src="/src/images/sound-wave.svg" alt="" />
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
              <img className="w-5" src="/src/images/calendar-icon.svg" alt="" />
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
                <img className="w-5" src="/src/images/lock-icon.svg" alt="" />
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
      <div className="">
        <img className="h-[30%] items-center ml-14 mx-auto absolute" src="/src/images/arrow.svg" alt="hand drawn arrow" />
        <img className="mt-[40%]" src="/src/images/feature-image.svg" alt="image grid with many faces" />
      </div>
    </div>
  );
}

export default Features;
