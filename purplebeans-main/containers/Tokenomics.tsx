import Image from "next/image";
import React from "react";
import tokenomics from "../public/tokenomics.webp";


import binance from "../public/partners/binance.webp";
import bscscan from "../public/partners/bscscan.webp";
import dextools from "../public/partners/dextools.webp";
import pancakeswap from "../public/partners/pancakeswap.webp";
import polygon from "../public/partners/polygon.webp";
import usdc from "../public/partners/usdc.webp";

import Marquee from "react-fast-marquee";

const Tokenomics = () => {
  return (
    <section id="tokenomics">
      <div className="flex flex-col items-center content-center pb-32 overflow-hidden">
        <Marquee speed={40} className="h-[160px] md:h-[220px] overflow-hidden">
          <Image
            src={polygon}
            alt={""}
            width={300}
            height={0}
            className="h-auto mx-14 grayscale"
          />
          <Image
            src={usdc}
            alt={""}
            width={300}
            height={0}
            className="h-auto mx-14 grayscale"
          />
          <Image
            src={binance}
            alt={""}
            width={300}
            height={0}
            className="h-auto mx-14 grayscale"
          />
          <Image
            src={bscscan}
            alt={""}
            width={300}
            height={0}
            className="h-auto mx-14 grayscale"
          />
          <Image
            src={dextools}
            alt={""}
            width={300}
            height={0}
            className="h-auto mx-14 grayscale"
          />
          <Image
            src={pancakeswap}
            alt={""}
            width={300}
            height={0}
            className="h-auto mx-14 grayscale"
          />
        </Marquee>
      </div>
      <div className="relative">
        <div className="w-full absolute bottom-0 z-[-1]">
          <svg width="1920px" height="984px" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <g transform="translate(0.000000, -4521.000000)">
                <g transform="translate(-77.000000, 4521.000000)">
                  <circle fill="#000000" cx="1978.5" cy="877.5" r="106.5" />
                  <circle fill="#FFDEDE" cx="109.5" cy="877.5" r="51.5" />
                  <circle fill="#F8DEFF" cx="121" cy="121" r="121" />
                </g>
              </g>
            </g>
          </svg>
        </div>
        <div className="flex items-center content-center flex-col md:pb-[120px] pb-[50px]">
          <h2 className="font-semibold md:text-[60px] text-[24px] md:mb-[40px] mb-[20px]">
            Tokenomics
          </h2>
          <div className="flex flex-col items-center content-center md:flex-row">
            <div className="flex flex-col">
              <div className="flex flex-col">
                <Image
                  className="w-[344px] hidden md:block mr-[50px]"
                  src={tokenomics}
                  alt={""}
                />
                <img
                  className="w-[296px] md:hidden mb-[20px]"
                  src="/tokenomics-mobile.webp"
                />
                <p className="my-8">
                  <span className="font-semibold">*</span> Unsold Tokens
                  in Presale will be Burned.
                </p>
              </div>
            </div>
            <img className="md:w-[343px] w-[284px]" src="/chart.webp" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
