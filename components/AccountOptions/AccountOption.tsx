import Link from "next/link";
import React from "react";
import { TiArrowRight } from "react-icons/ti";
import { MdBrightness6 } from "react-icons/md";
import { RiAccountCircleFill } from "react-icons/ri";
import { IoIosNotifications } from "react-icons/io";
import { MdUpgrade } from "react-icons/md";

type Props = {
  title: string;
  subtitle: string;
  href: string;
};

const AccountOption: React.FC<Props> = ({ title, subtitle, href }) => {
  const iconStyle = `text-3xl`;

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
    <div className="">
      <Link href={`account/${href}`} className="flex items-start w-full">
        {accountOptionIcon}

        <div className="w-full border-b border-r-silver flex-1 ml-4 pb-3">
          <div className="w-[80%] flex">
            <div className="mr-1 flex-1">
              <p className="font-medium text-lg capitalize">{title}</p>

              <p className="font-extralight">{subtitle}</p>
            </div>

            <TiArrowRight className="text-3xl" />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default AccountOption;
