import React from 'react';
import checkCircle from '../images/check-circle.svg';

function Signup() {
  return (
    <div className="flex max-w-[1440px] mx-auto px-5 md:py-24">
      <div className="md:w-1/2">
        <h1 className="text-5xl font-semibold text-[#101828]">
          Ready to clear the path to perfect communication?
        </h1>
        <ul className='text-[#475467] md:text-lg md:mt-8 md:space-y-5'>
          <li className="flex gap-3">
            {' '}
            <img src={checkCircle} alt="check mark" />
            30 days free trial
          </li>
          <li className="flex gap-3">
            {' '}
            <img src={checkCircle} alt="check mark" />
            Cancel at any time
          </li>
          <li className="flex gap-3">
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
        <div className="md:mt-10 md:space-x-4">
          <button className="border border-[#98A2B3] rounded-full px-6 py-3 text-[#101828]">Talk to sales</button>
          <button className="bg-[#175CD3] rounded-full px-6 py-3 text-white">Start your free trial</button>
        </div>
      </div>
      <div>video</div>
    </div>
  );
}

export default Signup;
