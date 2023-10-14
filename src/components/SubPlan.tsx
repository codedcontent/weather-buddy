import Link from "next/link";
import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";

type Props = {
  plan: {
    name: string;
    description: string;
    features: string[];
    price: number;
  };
};

const SubPlan = ({ plan }: Props) => {
  const { description, features, name, price } = plan;
  return (
    <div className="w-full space-y-4 items-center pb-4 pt-6 transition-all duration-300 lg:hover:scale-105 bg-wb-primary p-5 rounded-2xl text-white">
      <div className="flex justify-between items-center w-full">
        {/* Plan name */}
        <p className="font-bold text-lg capitalize">{name} Plan</p>
        {/* Plan price */}
        <p className="font-bold text-lg lowercase">${price}/per mo.</p>
      </div>

      <div className="text-sm">{description}</div>

      <ul className="list-none list-inside space-y-2 w-full">
        {features.map((feature, index) => (
          <li key={index} className=" flex gap-2">
            <AiFillCheckCircle className="text-lg text-white" />

            <p className="text-white text-sm font-light">{feature}</p>
          </li>
        ))}
      </ul>

      <div>
        <Link
          // href={`/checkout?plan=${name}`}
          href={"https://weather-buddy.ck.page/exclusive"}
          target="_blank"
        >
          <p className="text-center border border-white py-2 rounded-full cursor-pointer w-full">
            Choose Plan
          </p>
        </Link>
      </div>
    </div>
  );
};

export default SubPlan;
