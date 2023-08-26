"use client";

import { useState, useEffect } from "react";
import { BiChevronRight } from "react-icons/bi";
import { AiFillCheckCircle } from "react-icons/ai";
import { TSubscriptionOption } from "@/types/types";
import { useAppSelector } from "@/hooks/redux-hooks";
import { selectSubscription } from "@/slices/subscriptionSlices";

type SubscriptionCardProps = {
  subscription: TSubscriptionOption;
  setSelectedSubscriptionPlan: React.Dispatch<
    React.SetStateAction<TSubscriptionOption | null>
  >;
  selectedSubscriptionPlan: TSubscriptionOption | null;
};

const SubscriptionCard: React.FC<SubscriptionCardProps> = ({
  subscription,
  setSelectedSubscriptionPlan,
  selectedSubscriptionPlan,
}) => {
  const userSubscription = useAppSelector(selectSubscription);

  const [expanded, setExpanded] = useState(false);

  // Handle what happens when the users clicks a subscription plan card
  const handleCardClick = () => {
    setExpanded(true);
    setSelectedSubscriptionPlan(subscription);
  };

  useEffect(() => {
    setExpanded(selectedSubscriptionPlan?.id ? true : false);
  }, [selectedSubscriptionPlan]);

  // Subscription status

  return (
    <div className="w-full">
      {!expanded && (
        <div
          className="w-full flex items-center pb-4 pt-6 transition-all duration-300 hover:scale-105 cursor-pointer"
          onClick={handleCardClick}
        >
          <div className="w-full">
            <div className="flex gap-2 items-center w-max">
              {/* Plan name */}
              <p className="font-bold capitalize">{subscription.name}</p>

              {/* Badge */}
              {subscription.badge?.title && (
                <p
                  className={`font-black uppercase text-[10px] ${
                    subscription.badge.color === "primary"
                      ? "text-wb-primary"
                      : "text-wb-success-green"
                  }`}
                >
                  {subscription.badge.title}
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
        <div className="mt-6">
          <div className="flex gap-2 items-center w-full justify-between ">
            <p className="font-bold capitalize">{subscription.name}</p>

            <p className="font-black lowercase text-2xl text-primary">
              ${subscription.price}/mo.
            </p>
          </div>

          <ul className="list-none list-inside space-y-2">
            {subscription.features.map((feature, index) => (
              <li key={index} className=" flex gap-2">
                <AiFillCheckCircle className="text-lg text-white" />

                <p className="text-white text-sm font-light">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SubscriptionCard;
