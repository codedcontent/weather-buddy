"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BiChevronRight } from "react-icons/bi";
import { RiAccountCircleFill } from "react-icons/ri";
import { MdBrightness6, MdUpgrade } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import CustomButton from "./CustomButton";
import { signOut } from "next-auth/react";

const navLinks = [
  {
    name: "Account Details",
    href: "/account/account-details",
    subtitle: "Update personal information",
  },
  {
    name: "Weather Alerts",
    href: "/account/weather-alerts",
    subtitle: "Update your weather alerts",
  },
  {
    name: "Notifications",
    href: "/account/notifications",
    subtitle: "Configure notification preferences",
  },
  {
    name: "Subscription Plan",
    href: "/account/subscription-plan",
    subtitle: "Manage your subscription plan",
  },
];

const Header = () => {
  const pathname = usePathname();

  const [menuExpanded, setMenuExpanded] = useState(false);

  const MenuOverlay = () => {
    return (
      <div className="lg:hidden flex justify-between items-center w-full border-b border-b-wb-silver text-center px-6 py-4 mb-6">
        <p className="text-lg font-bold">Weather Buddy</p>

        <div
          className="text-xl"
          onClick={() => {
            setMenuExpanded(false);
          }}
        >
          <AiOutlineClose />
        </div>
      </div>
    );
  };

  const iconStyle = `text-3xl text-neutral-400`;

  return (
    <div
      className={`lg:hidden w-full ${
        menuExpanded &&
        "absolute flex flex-col h-screen w-screen bg-wb-bgColor z-50"
      }`}
    >
      {/* Menu Nav */}
      <div className="w-full flex justify-between items-center mb-6 border-b border-b-wb-silver px-6 py-4">
        <p className="text-lg font-bold">Weather Buddy</p>

        {menuExpanded ? (
          <div
            className="text-xl"
            onClick={() => {
              setMenuExpanded(false);
            }}
          >
            <AiOutlineClose />
          </div>
        ) : (
          <div
            className="text-xl"
            onClick={() => {
              setMenuExpanded(true);
            }}
          >
            <AiOutlineMenu />
          </div>
        )}
      </div>

      {menuExpanded && (
        <div className="lg:hidden flex flex-col px-5 flex-1 justify-evenly items-center">
          <div className="flex flex-col gap-4">
            {navLinks.map((link, index) => {
              const isActive = pathname === link.href;
              const title = link.name.toLowerCase();

              const iconStyle = `text-3xl text-neutral-400`;

              const accountOptionIcon =
                title === "account details" ? (
                  <RiAccountCircleFill className={iconStyle} />
                ) : title === "weather alerts" ? (
                  <MdBrightness6 className={iconStyle} />
                ) : title === "notifications" ? (
                  <IoIosNotifications className={iconStyle} />
                ) : title === "subscription plan" ? (
                  <MdUpgrade className={iconStyle} />
                ) : null;

              return (
                <div
                  className="w-full"
                  key={index}
                  onClick={() => setMenuExpanded(false)}
                >
                  <div className="w-full">
                    <Link
                      href={link.href}
                      className={`flex items-start w-full ${
                        isActive ? "text-white" : "text-neutral-400"
                      } hover:brightness-125`}
                    >
                      {accountOptionIcon}

                      <div className="w-full border-b border-wb-silver flex-1 ml-4 pb-3">
                        <div className="w-full flex items-start">
                          <div
                            className={`mr-1 ${
                              isActive ? "text-white" : "text-neutral-400"
                            } hover:brightness-125 w-full`}
                          >
                            <p className="font-medium text-lg capitalize">
                              {title}
                            </p>

                            <p className="font-extralight">{link.subtitle}</p>
                          </div>

                          <BiChevronRight className="text-3xl" />
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <CustomButton label="LOGOUT" variant="filled" onClick={signOut} />
        </div>
      )}
    </div>
  );
};

export default Header;
