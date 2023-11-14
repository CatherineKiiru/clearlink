import React from 'react';
import { Accordion } from 'flowbite-react';

function Support() {
  return (
    <div className="max-w-[1440px] px-5 py-12 md:py-24 mx-auto space-y-6 md:space-y-0 md:flex md:gap-24">
      {/* grid 1 */}
      <div className="md:w-1/2">
        <h3 className='text-lg font-semibold text-[#175CD3]'>Support</h3>
        <h1 className='text-5xl font-bold text-[#1D2939] mt-3'>FAQs</h1>
        <p className='text-[#667085] mt-5'>
          Everything you need to know about the product and billing. Can’t find
          the answer you’re looking for? Please chat to our friendly team.
        </p>
      </div>

      {/* grid 2 */}
      <div className="md:w-3/4">
        <Accordion id="accordion-open" data-accordion="open" className='outline-none border-none'>
          <Accordion.Panel className="">
            <Accordion.Title className='bg-[#F9FAFB]'>
              How many participants can join a ClearLink video conference?
            </Accordion.Title>
            <Accordion.Content className='bg-[#F9FAFB] border-none'>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                ClearLink offers flexible meeting options. Depending on your
                subscription plan, you can host meetings with varying numbers of
                participants. Our plans are designed to accommodate small team
                collaborations and large-scale webinars, ensuring you have the
                right fit for your needs.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Check out this guide to learn how to&nbsp;
                <a
                  href="https://flowbite.com/docs/getting-started/introduction/"
                  className="text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  get started&nbsp;
                </a>
                and start developing websites even faster with components on top
                of Tailwind CSS.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
              Can I use ClearLink on multiple devices?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Yes, ClearLink can be used on multiple devices. ClearLink is
                designed to be a versatile and flexible tool that can be
                accessed from various devices such as smartphones, tablets,
                laptops, and desktop computers. This allows users to seamlessly
                switch between devices and continue using ClearLink without any
                interruptions
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
              Is ClearLink compatible with other video conferencing platforms?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Absolutely! ClearLink is designed to seamlessly integrate with
                all major video conferencing platforms. Whether you prefer Zoom,
                Microsoft Teams, Google Meet, or any other platform, ClearLink
                has got you covered. Our user-friendly interface ensures a
                smooth and hassle-free experience, allowing you to connect with
                colleagues and clients effortlessly. Say goodbye to
                compatibility issues and hello to crystal-clear video
                conferencing with ClearLink.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
              How does ClearLink ensure the security of my video conferences?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Our robust encryption technology ensures that your video
                conferences are completely private and shielded from any
                unauthorized access. With end-to-end encryption, your data
                remains encrypted throughout the entire conference, providing
                you with peace of mind and confidence in the security of your
                discussions. ClearLink also implements multi-factor
                authentication, adding an extra layer of protection to ensure
                that only authorized participants can join your meetings. This
                prevents any potential intruders from infiltrating your
                confidential conversations.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
              Do I need to download any software to use ClearLink?{' '}
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                No need to worry about downloading any software! ClearLink is a
                hassle-free, cloud-based solution that allows you to connect and
                collaborate effortlessly. Simply log in to your account from any
                device with an internet connection, and you'll have instant
                access to all of ClearLink's powerful features. It's convenience
                at its best, without the need for any software installations.
                Start using ClearLink today and experience seamless
                communication like never before!
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
              What kind of customer support does ClearLink provide?{' '}
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                ClearLink offers exceptional customer support that goes above
                and beyond expectations. Our dedicated team of customer service
                professionals is available 24/7 to assist you with any inquiries
                or concerns you may have. We pride ourselves on providing prompt
                and personalized support, ensuring that your questions are
                answered and issues are resolved in a timely manner. With
                ClearLink, you can expect friendly, knowledgeable, and efficient
                support that truly puts the customer first. Experience the
                difference with ClearLink - your satisfaction is our top
                priority.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>
    </div>
  );
}

export default Support;
