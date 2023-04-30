import Link from "next/link";
import React from "react";
import { TiArrowRight, TiWeatherCloudy } from "react-icons/ti";
import { FiUser } from "react-icons/fi";
import { BsBell } from "react-icons/bs";
import { IoIosPaper } from "react-icons/io";

type Props = {
  title: string;
  subtitle: string;
  href: string;
};

const AccountOption: React.FC<Props> = ({ title, subtitle, href }) => {
  const accountOptionIcon =
    title === "account details" ? (
      <FiUser />
    ) : title === "weather alerts" ? (
      <TiWeatherCloudy />
    ) : title === "notifications" ? (
      <BsBell />
    ) : title === "subscription plan" ? (
      <IoIosPaper />
    ) : null;

  return (
    <Link href={href} className="w-full flex">
      {accountOptionIcon}

      <div className="flex-1">
        <p className="font-bold">{title}</p>

        <p className="font-light">{subtitle}</p>
      </div>

      <TiArrowRight />
    </Link>
  );
};

export default AccountOption;
