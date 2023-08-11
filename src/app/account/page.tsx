"use client";

import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";

const navLinks = [
  {
    name: "Account Details",
    href: "/account/account-details",
  },
  {
    name: "Weather alerts",
    href: "/account/weather-alerts",
  },
  {
    name: "Subscription plan",
    href: "/account/subscription-plan",
  },
  {
    name: "Notifications",
    href: "/account/notifications",
  },
];

const AccountPage = () => {
  const pathname = usePathname();

  return (
    <div className="h-full w-full flex justify-center items-center flex-col p-10">
      <div className="space-y-3">
        <h1 className="text-5xl">This is the Account Page</h1>
        <h4 className="text-lg">
          Which account option would you like to check
        </h4>
      </div>

      <div className="flex flex-col gap-4 mt-10">
        {navLinks.map((link, index) => {
          const isActive = pathname === link.href;

          return (
            <Link
              href={link.href}
              className={`${
                isActive ? "" : ""
              } p-2 border border-white rounded-lg`}
              key={index}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default AccountPage;
