import { CTA, TinySocials } from "@/components";
import Image from "next/image";
import React from "react";
import { GoChevronRight } from "react-icons/go";
import { RiCheckboxCircleFill } from "react-icons/ri";

const Hero = () => {
  return (
    <section
      id="home"
      className="md:w-[1230px] mx-auto md:h-[753px] pt-[110px] flex flex-col justify-center min-h-[90vh] px-4 py-14 hero sm:px-12 sm:py-16 lg:items-center"
    >
      <div className="flex flex-col gap-4 lg:flex-row-reverse lg:min-w-full lg:justify-center lg:gap-36">
        <div className="relative inline-block ease-in-out transform duration-150 lg:h-[20rem] w-full lg:m-auto md:mb-0 mb-[30px] md:float-right">
          <Image
            src={"/nftdemo.webp"}
            alt={""}
            width={500}
            height={0}
            className="block h-auto max-w-full"
            priority
          />
          <Image
            src={"/star1.svg"}
            alt={""}
            width={50}
            height={0}
            className="absolute left-[100px] lg:left-[150px] h-auto duration-150 ease-in-out transform top-[-10px] hover:rotate-12"
          />
          <Image
            src={"/star1.svg"}
            alt={""}
            width={50}
            height={0}
            className="absolute left-[210px] lg:left-[270px] h-auto duration-150 ease-in-out transform top-[-10px] hover:rotate-12"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="mt-3 mb-[5px] text-xl font-semibold text-start sm:text-2xl lg:text-2xl">
            Welcome to
          </h3>
          <h1 className="mb-[15px] text-4xl font-bold text-start sm:text-5xl lg:text-6xl">
            PurpleBeans
          </h1>
          <div className="flex flex-col mt-2 ">
            <p className="mb-[15px] text-lg text-start">
              Stake ,Earn & Play With one stop defi Solution.Trade your favourite Tokens &
              stake to Earn APY.Mint and Mine NFT's and more..🔥 
            </p>
            <div className="flex flex-row gap-6 mb-6">
              <span className="flex items-center gap-2">
                <GoChevronRight />
                <a
                  className="border-b font-medium border-black hover:font-semibold hover:border-[#fe349d]"
                  href="https://purplebeans.finance/Whitepaper.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read Docs
                </a>
                <RiCheckboxCircleFill className="text-[#fe349d]" />
              </span>
             
            </div>
            <CTA name="Buy $PBNS Token" href="https://buypbns.com" />
            <TinySocials />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
