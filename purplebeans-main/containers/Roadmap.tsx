import React from "react";
import { BiMap } from "react-icons/bi";
import { BsFill1CircleFill } from "react-icons/bs";
import { GiJellyBeans } from "react-icons/gi";
import {
  RiCheckboxBlankCircleLine,
  RiCheckboxCircleFill,
} from "react-icons/ri";

interface PhaseItem {
  name: string;
  isChecked: boolean;
}

interface Phase {
  number: string;
  items: PhaseItem[];
}

const data: Phase[] = [
  {
    number: "I",
    items: [
      { name: "Purple beans - Matic live", isChecked: true },
      { name: "dApp Listings", isChecked: true },
      { name: "Marketing campaign", isChecked: true },
      { name: "Partnership", isChecked: true },
      { name: "Giveaways", isChecked: true },
      { name: "Purple beans - USDC", isChecked: true },
    ],
  },
  {
    number: "II",
    items: [
      { name: "PB - Matic Compensation", isChecked: false },
      { name: "Website upgrade", isChecked: false },
      { name: "PBNS Token Launch", isChecked: false },
      { name: "Token Airdrops", isChecked: false },
      { name: "Presale", isChecked: false },
    ],
  },
  {
    number: "III",
    items: [
      { name: "Add Liquidity", isChecked: false },
      { name: "CG, CMC Listings", isChecked: false },
      { name: "Partnerships", isChecked: false },
      { name: "PBNS Staking dApp", isChecked: false },
      { name: "Giveaways", isChecked: false },
      { name: "NFT Launch", isChecked: false },
    ],
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const Roadmap = () => {
  return (
    <section
      id="roadmap"
      className="flex flex-col items-center justify-center px-4 py-8 sm:px-12 sm:py-16"
    >
      <h2 className="font-semibold md:text-[60px] text-[24px] md:mb-[40px] mb-[20px]">
        Roadmap
      </h2>
      <div className="grid grid-cols-1 gap-2 lg:gap-8 lg:grid-cols-3">
        {data.map((phase, phaseIndex) => (
          <div
            key={`phase-${phaseIndex}`}
            className="flex flex-col mt-5 rounded-[70px] p-8 bg-[#fff] drop-shadow-2xl shadow-inner"
          >
            <h2 className="flex flex-row justify-between mb-3 md:text-[30px] text-[22px] font-bold">
              Phase {phase.number} <GiJellyBeans className="text-[#fe349d]" />
            </h2>
            <ul>
              {phase.items.map((item, itemIndex) => (
                <li
                  key={`phase-${phaseIndex}-item-${itemIndex}`}
                  className="flex items-baseline space-x-2 shrink-0"
                >
                  {item.isChecked ? (
                    <RiCheckboxCircleFill className="text-[#fe349d]" />
                  ) : (
                    <RiCheckboxBlankCircleLine />
                  )}
                  <span>{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Roadmap;
