import SocialIcons from "@/components/SocialIcons";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full mt-20 border-t border-[#EAEAEA] py-12">
      <div className="max-w-5xl px-10 mx-auto">
        {/* Company CTA */}
        <div className="w-max space-y-6">
          {/* Logo */}
          <Link href="/">
            <p className="font-black text-lg text-wb-primary">Weather Buddy</p>
          </Link>

          <div className="w-full text-wb-gray">
            {/* Copyright */}
            <p className="text-light text-xs">
              Copyright © 2023 Weather Buddy.
            </p>
            <p className="text-light text-xs">All rights reserved</p>
          </div>

          <SocialIcons />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
