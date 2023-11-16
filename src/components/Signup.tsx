import React from 'react';
import checkCircle from '../images/check-circle.svg';

function Signup() {
  return (
    <div className="flex flex-col-reverse container lg:flex lg:flex-row mx-auto md:gap-24 px-5 md:px-0 lg:pt-16 md:pb-24 lg:pb-36">
      <div className="text-center lg:text-left lg:w-2/3 md:mt-0">
        <h1 className="text-4xl md:text-[40px] font-semibold text-[#101828]">
          Ready to clear the path to perfect communication?
        </h1>
        <ul className="mt-12 text-[#475467] md:text-lg lg:mt-8 md:space-y-5">
          <li data-aos="zoom-in-right" data-aos-duration="1500" className="flex gap-3">
            {' '}
            <img src={checkCircle} alt="check mark" />
            30 days free trial
          </li>
          <li data-aos="zoom-in-right" data-aos-duration="1800" className=" flex gap-3">
            {' '}
            <img src={checkCircle} alt="check mark" />
            Cancel at any time
          </li>
          <li data-aos="zoom-in-right"  data-aos-duration="2100" className=" flex gap-3">
            {' '}
            <img src={checkCircle} alt="check mark" />
            Access to all features
          </li>
          <li data-aos="zoom-in-right" data-aos-duration="2400" className="flex gap-3">
            {' '}
            <img src={checkCircle} alt="check mark" />
            Personalized onboarding
          </li>
        </ul>
        <div className="mt-12 md:mt-10 space-x-4">
          <button className="border border-[#98A2B3] rounded-full px-4 md:px-6 py-3 text-[#101828]">
            Talk to sales
          </button>
          <button className="bg-[#175CD3] rounded-full px-4 md:px-6 py-3 text-white">
            Start your free trial
          </button>
        </div>
      </div>
      {/* video section */}
      <div className='mt-14 lg:mt-0 lg:w-3/4'>
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
