"use client";

import React, { useState } from "react";
import CustomButton from "../CustomButton";
import SubscriptionCard from "./SubscriptionCard";
import { TSubscriptionOption } from "@/types/types";
import { useAppSelector } from "@/hooks/redux-hooks";
import { selectAuth } from "@/slices/authSlice";
import { useRouter } from "next/navigation";

const subscriptions: TSubscriptionOption[] = [
  {
    id: 1,
    name: "free plan",
    description:
      "You get essentials with our Free Plan, perfect for testing out Weather Buddy features.",
    features: [
      "Track weather for 1 location",
      "Receive 1 daily weather alert",
      "Email notifications",
    ],
    badge: {
      title: "Current Plan",
      color: "primary",
    },
    price: 0,
  },

  {
    id: 2,
    name: "pro plan",
    description:
      "Stay informed and plan your days effectively with our Pro Plan, offering daily weather updates.",
    features: [
      "Unlimited location tracking",
      "Receive multiple daily weather alerts",
      "SMS and email notifications",
    ],
    price: 3,
    badge: {
      title: "Coming soon",
      color: "new",
    },
  },

  // {
  //   id: 3,
  //   name: "premium plan",
  //   description:
  //     "Experience Weather Buddy at its best with our Premium Plan. Unlock exclusive features and benefits.",
  //   features: [
  //     "Advanced weather insights",
  //     "Severe weather alerts",
  //     "Customizable notifications",
  //   ],
  //   badge: {
  //     title: "Coming Soon",
  //     color: "green",
  //   },
  //   price: 5,
  // },
];

const SubscriptionPlans = () => {
  const auth = useAppSelector(selectAuth);
  const router = useRouter();

  const [selectedSubscriptionPlan, setSelectedSubscriptionPlan] =
    useState<TSubscriptionOption | null>(null);

  const [isLoading, setIsLoading] = useState(false);

  const changeSubscriptionPlan = () => {
    setIsLoading(true);

    // router.push(`/premium-plan?email=${auth.email}`);
    router.push(`/upgrade-plan`);

    // const url = `/api/subscriptions/${auth.id}`;
  };

  const handleClose = async () => {
    setSelectedSubscriptionPlan(null);
  };

  return (
    <div>
      <div className="w-full divide-y-2 flex flex-col h-full justify-between">
        {/* If the user hasn't selected any subscription plan cards, display the all plan cards */}
        {!selectedSubscriptionPlan ? (
          <>
            {subscriptions.map((subscription) => (
              <SubscriptionCard
                key={subscription.id}
                subscription={subscription}
                setSelectedSubscriptionPlan={setSelectedSubscriptionPlan}
                selectedSubscriptionPlan={selectedSubscriptionPlan}
              />
            ))}
          </>
        ) : (
          // The user has selected a subscription plan card, hide the ones that weren't selected
          <div>
            {subscriptions
              .filter((x) => x.id === selectedSubscriptionPlan.id)
              .map((subscription) => (
                <SubscriptionCard
                  key={subscription.id}
                  subscription={subscription}
                  setSelectedSubscriptionPlan={setSelectedSubscriptionPlan}
                  selectedSubscriptionPlan={selectedSubscriptionPlan}
                />
              ))}
          </div>
        )}
      </div>

      {/* Upgrade & cancel subscription buttons */}
      {selectedSubscriptionPlan?.id && (
        <div className="flex flex-col w-full gap-4 mt-8">
          {selectedSubscriptionPlan.name === "pro plan" && (
            <CustomButton
              label={`Upgrade Subscription to ${selectedSubscriptionPlan.name}`}
              onClick={changeSubscriptionPlan}
              variant="filled"
              disabled={isLoading}
            />
          )}

          <CustomButton
            label="Close"
            onClick={handleClose}
            variant="outlined"
          />
        </div>
      )}
    </div>
  );
};

export default SubscriptionPlans;
