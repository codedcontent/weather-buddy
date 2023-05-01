"use client";

import React, { useState } from "react";
import SubscriptionCard from "./SubscriptionCard";
import Button from "@/components/Button";

const subscriptions = [
  {
    id: 1,
    name: "Free plan",
    description:
      "Free is nice, the free plan is best for testing the basic weather buddy features",
    features: [
      "Track weather for 1 location",
      "Get 1 alert daily",
      "Email notification",
    ],
    empTitle: "current plan",
    empColor: "primary",
    price: 0,
  },

  {
    id: 2,
    name: "Pro Plan",
    description:
      "Easy and affordable, Best for daily weather updates to help you plan your day",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    price: 3,
  },

  {
    id: 3,
    name: "Premium Plan",
    description: "Be in a league of your own. The premium plan is coming soon",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    empTitle: "coming soon",
    empColor: "green",
    price: 5,
  },
];

type Props = {};

const SubscriptionPlans: React.FC<Props> = (props: Props) => {
  const [selectedSubscriptionPlan, setSelectedSubscriptionPlan] = useState<
    number | null
  >(null);

  const changeSubscriptionPlan = () => {};

  const cancelSubscriptionChange = () => {
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
              .filter((x) => x.id === selectedSubscriptionPlan)
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
      {selectedSubscriptionPlan && (
        <div className="flex flex-col w-full gap-4 mt-8">
          <Button
            title="Upgrade Subscription Plan"
            onClick={changeSubscriptionPlan}
            width="full"
          />

          <Button
            title="Cancel"
            onClick={cancelSubscriptionChange}
            width="full"
            filled={false}
          />
        </div>
      )}
    </div>
  );
};

export default SubscriptionPlans;
