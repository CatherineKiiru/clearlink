import React from 'react';
import shopifyLogo from "../src/images/shopify.svg"
import stars from "../src/images/stars.svg";
import avatar from "../src/images/avatar.svg";
import testimonials from "../src/images/contents.svg"

function Testimonals() {
  return (
    <div className="bg-[#F9FAFB] w-full">
      <div className="md:py-24 md:gap-12 lg:flex md:grid-col-2 max-w-[1440px] px-5 mx-auto justify-center">
        <div className="lg:max-w-[40rem] mt-10 md:mt-0 space-y-4 lg:space-y-12">
          <img
            className="pt-10 md:pt-0 items-center justify-center mx-auto"
            src={shopifyLogo}
            alt="shopify-logo"
          />
          <img
            className="items-center justify-center mx-auto "
            src={stars}
            alt="rating stars"
          />
          <h1 className="text-center justify-center mx-auto text-text-blue font-medium text-2xl md:text-4xl lg:text-[44px]">
            "ClearLink has upgraded our remote meetings. High-quality video,
            screen sharing, and top-notch security make it essential for our
            team."
          </h1>

          <div className="md:flex md:justify-between">
            <div className="flex gap-4 items-center justify-center mx-auto">
              <div className="">
                <img src={avatar} alt="" />
              </div>
              <div>
                <h1 className="text-[#101828] font-semibold text-xl">
                  Sarah Thompson
                </h1>
                <p>Project Manager, Shopify</p>
              </div>
            </div>

            {/* <div className="items-center justify-center mx-auto flex scale-75 gap-4">
              <img src="/src/images/carousel-arrow-left.svg" alt="" />
              <img src="/src/images/carousel-arrow-right.svg" alt="" />
            </div> */}
          </div>
        </div>
        <div className="lg:scale-110 md:ml-10 mt-10 lg:mt-8">
          <img
            data-aos="zoom-in"
            data-aos-duration="3000"
            src={testimonials}
            alt="testimonials images"
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonals;
