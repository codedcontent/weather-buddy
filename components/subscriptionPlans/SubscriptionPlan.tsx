import React from "react";
import { BiChevronRight } from "react-icons/bi";

type Props = {
  empTitle?: string;
  empColor?: string;
  subscriptionTItle: string;
  subscriptionDescription: string;
};

const SubscriptionPlan: React.FC<Props> = ({
  empTitle,
  empColor,
  subscriptionTItle,
  subscriptionDescription,
}) => {
  return (
    <div className="w-full flex items-center pb-4 pt-6 transition-all duration-500 hover:scale-105 cursor-pointer">
      <div className="w-full">
        <div className="flex gap-2 items-center w-max">
          <p className="font-bold capitalize">{subscriptionTItle}</p>

          {empTitle && (
            <p
              className={`font-black uppercase text-[10px] ${
                empColor === "primary" ? "text-primary" : "text-success-green"
              }`}
            >
              {empTitle}
            </p>
          )}
        </div>

        <div className="font-light text-sm">{subscriptionDescription}</div>
      </div>

      <BiChevronRight className="text-4xl" />
    </div>
  );
};

export default SubscriptionPlan;
