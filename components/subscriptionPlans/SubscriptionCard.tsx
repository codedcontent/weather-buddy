"use client";

import { useState } from "react";
import { BiChevronRight } from "react-icons/bi";

type Subscription = {
  name: string;
  description: string;
  features: string[];
  price: number;
  empTitle?: string;
  empColor?: string;
};

type SubscriptionCardProps = {
  subscription: Subscription;
};

const SubscriptionCard: React.FC<SubscriptionCardProps> = ({
  subscription,
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="w-full">
      {!expanded && (
        <div
          className="w-full flex items-center pb-4 pt-6 transition-all duration-500 hover:scale-105 cursor-pointer"
          onClick={() => setExpanded(true)}
        >
          <div className="w-full">
            <div className="flex gap-2 items-center w-max">
              <p className="font-bold capitalize">{subscription.name}</p>

              {subscription.empTitle && (
                <p
                  className={`font-black uppercase text-[10px] ${
                    subscription.empColor === "primary"
                      ? "text-primary"
                      : "text-success-green"
                  }`}
                >
                  {subscription.empTitle}
                </p>
              )}
            </div>

            <div className="font-light text-sm">{subscription.description}</div>
          </div>

          <BiChevronRight className="text-4xl" />
        </div>
      )}

      {/* The expanded details */}
      {expanded && (
        <div className="mt-4">
          <ul className="list-disc list-inside">
            {subscription.features.map((feature, index) => (
              <li key={index} className="text-gray-500">
                {feature}
              </li>
            ))}
          </ul>
          <p className="font-bold mt-4">${subscription.price}/month</p>
        </div>
      )}
    </div>
  );
};

export default SubscriptionCard;
