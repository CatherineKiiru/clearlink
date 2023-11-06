import React from "react";
import shopify from "../images/Shopify.com svg.svg";
import coinbase from "../images/Coinbase svg.svg";
import dropbox from "../images/Dropbox svg.svg";
import intercom from "../images/Intercom svg.svg";
import marvel from "../images/Marvel svg.svg";
import automattic from "../images/Automattic.svg";


function Companies() {
  return (
    <div className="py-14 ">
      <div className="text-center px-6 md:px-0">
        <h1 className="text-xl text-[#475467]">
          Join 1,500+ companies already video conferencing the ClearLink way
        </h1>
      </div>
      <div className="mt-12 mt mx-auto grid grid-cols-3 gap-4 w-3/4 md:w-auto md:flex md:justify-between items-center">
        <img src={shopify} alt="shopify-logo" />
        <img src={coinbase} alt="coinbase-logo" />
        <img src={dropbox} alt="dropbox-logo" />
        <img src={intercom} alt="intercom-logo" />
        <img src={marvel} alt="marvel-logo" />
        <img src={automattic} alt="automattic-logo" />
      </div>
      </div>
  );
}

export default Companies;
