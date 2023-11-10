import React from 'react';

function Testimonals() {
  return (
    <div className="bg-[#F9FAFB] w-full">
      <div className=" flex flex-col-reverse md:gap-12 md:flex md:grid-col-2 md:py-24 max-w-[1440px] px-5 mx-auto justify-center">
        <div className="md:max-w-[40rem] mt-10 md:mt-0 space-y-6 md:space-y-0">
          <img
            className="pt-10 md:pt-0"
            src="/src/images/shopify.svg"
            alt="shopify logo"
          />
          <img src="/src/images/stars.svg" alt="rating stars" />
          <h1 className=" text-text-blue font-medium md:text-[44px]">
            ClearLink has upgraded our remote meetings. High-quality video,
            screen sharing, and top-notch security make it essential for our
            team.
          </h1>

          <div className="md:flex md:justify-between">
            <div className="flex gap-4 items-center">
              <div className="">
                <img src="/src/images/avatar.svg" alt="" />
              </div>
              <div>
                <h1>Sarah Thompson</h1>
                <p>Project Manager, Shopify</p>
              </div>
            </div>

            <div className="flex scale-75 md:scale-0 gap-4">
              <img src="/src/images/carousel-arrow-left.svg" alt="" />
              <img src="/src/images/carousel-arrow-right.svg" alt="" />
            </div>
          </div>
        </div>
        <div className=" md:scale-110 md:ml-10 mt-10 md:mt-0">
          <img src="/src/images/contents.svg" alt="testimonials images" />
        </div>
      </div>
    </div>
  );
}

export default Testimonals;
