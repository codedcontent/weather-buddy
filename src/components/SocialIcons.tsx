import Link from "next/link";
import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";

const SocialIcons = () => {
  const iconStyle = "bg-[#F2F1F1] text- p-2 text-[#515251] rounded-full";
  return (
    <div className="flex justify-start items-center gap-2">
      <Link
        href="https://twitter.com"
        target="_blank"
        className={`${iconStyle}`}
      >
        <AiOutlineInstagram />
      </Link>
      <Link
        href="https://twitter.com"
        target="_blank"
        className={`${iconStyle}`}
      >
        <AiOutlineTwitter />
      </Link>
      <Link
        href="https://twitter.com"
        target="_blank"
        className={`${iconStyle}`}
      >
        <BiLogoLinkedin />
      </Link>
      <Link
        href="https://twitter.com"
        target="_blank"
        className={`${iconStyle}`}
      >
        <AiOutlineWhatsApp />
      </Link>
    </div>
  );
};

export default SocialIcons;
