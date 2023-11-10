import React from "react";

function Testimonals() {
  return (
    <div className="bg-[#F9FAFB] w-full ">
    <div className=" md:flex md:grid-col-2 md:py-24 max-w-[1440px] mx-auto justify-center">
      <div className="md:max-w-[640px] ">
        <img src="/src/images/shopify.svg" alt="shopify logo" />
        <img src="/src/images/stars.svg" alt="rating stars" />
        <h1 className="text-text-blue font-medium md:text-[44px]">
          ClearLink has upgraded our remote meetings. High-quality video, screen
          sharing, and top-notch security make it essential for our team.
        </h1>

        <div className="flex items-center gap-4">
          <div className="">
            <img src="/src/images/avatar.svg" alt="" />
          </div>
          <div>
            <h1>Sarah Thompson</h1>
            <p>Project Manager, Shopify</p>
          </div>
        </div>
      </div>
      <div>
        <img src="/src/images/contents.svg" alt="testimonials images" />
      </div>
    </div>
    </div>
  );
}

export default Testimonals;
