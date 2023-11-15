import React from 'react';
import checkCircle from '../images/check-circle.svg';

function Signup() {
  return (
    <div className="flex flex-col-reverse container md:flex md:flex-row mx-auto md:gap-24 px-5 md:px-0 py-8 md:py-24">
      <div className="text-center md:text-left md:w-2/3 mt-12 md:mt-0">
        <h1 className="text-[40px] font-semibold text-[#101828]">
          Ready to clear the path to perfect communication?
        </h1>
        <ul className="mt-4 text-[#475467] md:text-lg md:mt-8 md:space-y-5">
          <li className="flex gap-3">
            {' '}
            <img src={checkCircle} alt="check mark" />
            30 days free trial
          </li>
          <li className=" flex gap-3">
            {' '}
            <img src={checkCircle} alt="check mark" />
            Cancel at any time
          </li>
          <li className=" flex gap-3">
            {' '}
            <img src={checkCircle} alt="check mark" />
            Access to all features
          </li>
          <li className="flex gap-3">
            {' '}
            <img src={checkCircle} alt="check mark" />
            Personalized onboarding
          </li>
        </ul>
        <div className="mt-4 md:mt-10 md:space-x-4">
          <button className="border border-[#98A2B3] rounded-full px-6 py-3 text-[#101828]">
            Talk to sales
          </button>
          <button className="bg-[#175CD3] rounded-full px-6 py-3 text-white">
            Start your free trial
          </button>
        </div>
      </div>
      {/* video section */}
      <div className='mt-14 md:mt-0 md:w-3/4'>
        <video className="scale-125 rounded-lg" controls autoPlay muted>
          <source
            src="/src/images/pexels-diva-plavalaguna-6985525 (1440p).mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default Signup;
