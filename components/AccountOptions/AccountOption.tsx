import Link from "next/link";
import React from "react";
import { BiChevronRight } from "react-icons/bi";
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
    <div className="w-full">
      <Link
        href={`account/${href}`}
        className="flex items-start w-full text-neutral-400"
      >
        {accountOptionIcon}

        <div className="w-full border-b border-b-silver flex-1 ml-4 pb-3">
          <div className="w-[80%] flex items-start">
            <div className="mr-1 flex-1 text-neutral-400">
              <p className="font-medium text-lg capitalize">{title}</p>

              <p className="font-extralight">{subtitle}</p>
            </div>

            <BiChevronRight className="text-3xl" />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default AccountOption;
