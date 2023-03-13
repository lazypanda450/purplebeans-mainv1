import Image from "next/image";
import React from "react";




import {
  FaDiscord,
  FaMediumM,
  FaTelegram,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center content-center justify-between py-10 lg:px-16 ">
      <Image
        src={"/friendly-beans.webp"}
        alt={""}
        height={0}
        width={500}
        className="h-auto"
      />
      <div className="flex flex-row gap-4 text-xl lg:gap-6">
        <a
          className="shrink-0"
          href="https://t.me/purplebeans"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTelegram className="w-10 h-auto text-[#0088cc]" />
        </a>
        <a
          className="shrink-0"
          href="https://t.me/purplebeansbsc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTelegram className="w-10 h-auto text-[#0088cc]" />
        </a>
        <a
          className="shrink-0"
          href="https://twitter.com/purplebeansdapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter className="w-10 h-auto text-[#1DA1F2]" />
        </a>
        <a
          className="shrink-0"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaMediumM className="w-10 h-auto text-[#000]" />
        </a>
        <a
          className="shrink-0"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaDiscord className="w-10 h-auto text-[#7289da]" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
