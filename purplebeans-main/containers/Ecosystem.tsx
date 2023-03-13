import React from "react";
import Image from "next/image";
import { GoChevronRight } from "react-icons/go";
import { RiCheckboxCircleFill } from "react-icons/ri";

import { GiJellyBeans } from "react-icons/gi";

import { CTA } from "@/components";

import presale from "../public/ecosystem/presale.png";
import swap from "../public/ecosystem/swap.png";
import staking from "../public/ecosystem/staking.png";
import airdrop from "../public/ecosystem/airdrop.png";
import usdc from "../public/ecosystem/usdc.png";
import nft from "../public/ecosystem/nft.png";

const Ecosystem = () => {
  return (
    <section
      id="ecosystem"
      className="flex flex-col items-center justify-center px-4 py-8 pb-32 sm:px-12 sm:py-16"
    >
      <div>
        <h2 className="font-semibold md:text-[60px] text-[24px] md:mb-[40px] mb-[20px]">
          Ecosystem
        </h2>
      </div>
      <div className="cards-wrapper">
        <div className="card rounded-[70px] bg-white drop-shadow-md shadow-inner">
          <figure>
            <Image
              src={usdc}
              alt={""}
              width={230}
              height={0}
              className="h-auto"
            />
          </figure>
          <div className="p-8 card__body md:pb-4">
            <div className="card__text">
              <span className="flex gap-2 card__title">
                <span className="flex gap-2 font-medium">
                  <GoChevronRight />
                  PurplebeansUSDC 
                </span>{" "}
                <GiJellyBeans className="text-[#fe349d]" />
              </span>
              <span className="card__content">
                <p>
                  Stake USDC and Earn 3% Daily with Immutable and Audited Contarct.
                </p>
              </span>
            </div>
            <span className="flex items-center gap-2">
                <GoChevronRight />
                <a
                  className="border-b font-medium border-black hover:font-semibold hover:border-[#fe349d]"
                  href="https://the-stamp.com/2023/02/purple-beans-bsc/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Audit
                </a>
                <RiCheckboxCircleFill className="text-[#fe349d]" />
              </span>

              <span className="flex items-center gap-2">
                <GoChevronRight />
                <a
                  className="border-b font-medium border-black hover:font-semibold hover:border-[#fe349d]"
                  href="https://the-stamp.com/2023/02/purple-beans-bsc/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Whitepaper
                </a>
                <RiCheckboxCircleFill className="text-[#fe349d]" />
              </span>
            <div className="grid w-full grid-cols-2 gap-4 mt-4 justify-items-center">
              <CTA name="Open dApp" href="https://purplebeans.finance/usdc/Whitepaper.pdf" />
            </div>
          </div>
        </div>{" "}
        <div className="card rounded-[70px] bg-white drop-shadow-md shadow-inner">
          <figure>
            <Image
              src={swap}
              alt={""}
              width={230}
              height={0}
              className="h-auto"
            />
          </figure>
          <div className="p-8 card__body md:pb-4">
            <div className="card__text">
              <span className="flex gap-2 card__title">
                <span className="flex gap-2 font-medium">
                  <GoChevronRight />
                  Swap
                </span>{" "}
                <GiJellyBeans className="text-[#fe349d]" />
              </span>
              <span className="card__content">
                <p>
                  Swap your favourite Tokens on Bsc with ease and Use our Bridge to swap Token with Different Networks.
                </p>
              </span>
            </div>
            <div className="grid w-full grid-cols-2 gap-4 mt-4 justify-items-center">
              <CTA
                name="Swap Now"
                href="https://exchange.purplebeans.finance/#/swap"
              />
            </div>
          </div>
        </div>
        <div className="card rounded-[70px] bg-white drop-shadow-md shadow-inner">
          <figure>
            <Image
              src={presale}
              alt={""}
              width={230}
              height={0}
              className="h-auto"
            />
          </figure>
          <div className="p-8 card__body md:pb-4">
            <div className="card__text">
              <span className="flex gap-2 card__title">
                <span className="flex gap-2 font-medium">
                  <GoChevronRight />
                  Presale
                </span>
                <GiJellyBeans className="text-[#fe349d]" />
              </span>
              <span className="card__content">
                <p>
                  Buy $PBNS and become an Early Adopter and Buy 
                  at a Special  discounted rate. The Presale will be in 3 Rounds and 50% of the total
                  supply.
                </p>
              </span>
            </div>
            <div className="grid w-full grid-cols-2 gap-4 mt-4 justify-items-center">
              <CTA name="Buy Presale" href="https://buypbns.com" disabled={false} />
            </div>
          </div>
        </div>
        <div className="card rounded-[70px] bg-white drop-shadow-md shadow-inner">
          <figure>
            <Image
              src={airdrop}
              alt={""}
              width={230}
              height={0}
              className="h-auto"
            />
          </figure>
          <div className="p-8 card__body md:pb-4">
            <div className="card__text">
              <span className="flex gap-2 card__title">
                <span className="flex gap-2 font-medium">
                  <GoChevronRight />
                  Airdrop
                </span>{" "}
                <GiJellyBeans className="text-[#fe349d]" />
              </span>
              <span className="card__content">
                <p>
                  Participate in the $PBNS Airdrop and Get a change to win Free $PBNS tokens worth 100$.
                </p>
              </span>
            </div>
            <div className="grid w-full grid-cols-2 gap-4 mt-4 justify-items-center">
              <CTA name="Get Airdrop" href="" disabled={true} />
            </div>
          </div>
        </div>
        <div className="card rounded-[70px] bg-white drop-shadow-md shadow-inner">
          <figure>
            <Image
              src={staking}
              alt={""}
              width={230}
              height={0}
              className="h-auto"
            />
          </figure>
          <div className="p-8 card__body md:pb-4">
            <div className="card__text">
              <span className="flex gap-2 card__title">
                <span className="flex gap-2 font-medium">
                  <GoChevronRight />
                  $PBNS Staking
                </span>{" "}
                <GiJellyBeans className="text-[#fe349d]" />
              </span>
              <span className="card__content">
                <p>
                  Stake $PBNS and Earn 3% Daily. Mint and NFT to Increase your ROI. Stake PBNS-BNB Lp Earn Triple Passive Income.
                </p>
              </span>
            </div>
            <div className="grid w-full grid-cols-2 gap-4 mt-4 justify-items-center">
              <CTA name="Coming Soon" href="" disabled={true} />
            </div>
          </div>
        </div>
        <div className="card rounded-[70px] bg-white drop-shadow-md shadow-inner">
          <figure>
            <Image
              src={nft}
              alt={""}
              width={230}
              height={0}
              className="h-auto"
            />
          </figure>
          <div className="p-8 card__body md:pb-4">
            <div className="card__text">
              <span className="flex gap-2 card__title">
                <span className="flex gap-2 font-medium">
                  <GoChevronRight />
                  MeanBeans NFT
                </span>{" "}
                <GiJellyBeans className="text-[#fe349d]" />
              </span>
              <span className="card__content">
                <p>
                  Mint and Mine our Mean Beans NFT collection to Get Additional ROI on your Stakes and Get Rewards From Ecosystem. 
                </p>
              </span>
            </div>
            <div className="grid w-full grid-cols-2 gap-4 mt-4 justify-items-center">
              <CTA name="Coming Soon" href="" disabled={true} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
