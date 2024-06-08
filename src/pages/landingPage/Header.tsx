"use client";

import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

const linkStyles =
  "font-light text-wb-bgColor hover:text-wb-primary hover:font-medium";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavMenu = () => {
    setIsNavOpen((prev: boolean) => !prev);
  };

  return (
    <header className="w-full lg:h-24 h-16 flex lg:justify-center justify-between items-center bg-white md:px-10 px-6 m-auto">
      {/* Logo */}
      <Link href="#">
        <p className="font-black text-xl text-wb-primary">Weather Buddy</p>
      </Link>

      <div className="flex-1 lg:flex hidden justify-between items-center">
        {/* Nav items - large screen */}
        <div className="flex justify-center items-center w-full gap-10">
          <Link href="#features" className={`${linkStyles}`}>
            Features
          </Link>
          <Link href="#use-case" className={`${linkStyles}`}>
            Use Case
          </Link>
          <Link href="#how-it-works" className={`${linkStyles}`}>
            How it works
          </Link>
          <Link href="#pricing" className={`${linkStyles}`}>
            Pricing
          </Link>
        </div>

        {/* Account access options */}
        <div className="flex gap-6 w-max">
          <Link
            href="login"
            target="_blank"
            className="px-12 py-1.5 border border-wb-primary rounded-2xl text-wb-primary text-sm"
          >
            <p className="w-max">Log in</p>
          </Link>

          <Link
            href="register"
            target="_blank"
            className="px-12 py-1.5 border bg-wb-primary rounded-2xl text-white text-sm"
          >
            <p className="w-max">Register</p>
          </Link>
        </div>
      </div>

      <div className="lg:hidden block text-2xl">
        <AiOutlineMenu onClick={handleNavMenu} />
      </div>

      {isNavOpen && (
        <div className="absolute h-screen w-screen bg-wb-primary text-white left-0 top-0">
          {/* Nav close */}
          <div
            className="absolute right-[6%] top-6 text-white text-2xl"
            onClick={handleNavMenu}
          >
            <IoClose />
          </div>

          {/* Nav items - mobile screen */}
          <div className="flex flex-col w-full h-full justify-center items-center gap-10">
            <Link
              href=""
              className={`font-semibold text-white tracking-wider`}
              onClick={() => setIsNavOpen(false)}
            >
              Home
            </Link>

            <Link
              href="#features"
              className={`font-semibold text-white tracking-wider`}
              onClick={() => setIsNavOpen(false)}
            >
              Features
            </Link>

            <Link
              href="#use-case"
              className={`font-semibold text-white tracking-wider`}
              onClick={() => setIsNavOpen(false)}
            >
              Use Case
            </Link>

            <Link
              href="#how-it-works"
              className={`font-semibold text-white tracking-wider`}
              onClick={() => setIsNavOpen(false)}
            >
              How it works
            </Link>

            <Link
              href="#pricing"
              className={`font-semibold text-white tracking-wider`}
              onClick={() => setIsNavOpen(false)}
            >
              Pricing
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
