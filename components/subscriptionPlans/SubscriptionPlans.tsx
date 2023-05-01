import React from "react";
import SubscriptionPlan from "./SubscriptionPlan";
import SubscriptionCard from "./SubscriptionCard";

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
    price: 0,
    empTitle: "current plan",
    empColor: "primary",
  },

  {
    id: 2,
    name: "Pro Plan",
    description:
      "Easy and affordable, Best for daily weather updates to help you plan your day",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    price: 5,
  },

  {
    id: 3,
    name: "Premium Plan",
    description: "Be in a league of your own. The premium plan is coming soon",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    price: 0,
    empTitle: "coming soon",
    empColor: "green",
  },
];

type Props = {};

const SubscriptionPlans: React.FC<Props> = (props: Props) => {
  // TODO: Enable single show subscription plan description
  return (
    <div className="w-full divide-y-2 flex flex-col">
      {subscriptions.map((subscription) => (
        <SubscriptionCard key={subscription.id} subscription={subscription} />
      ))}
    </div>
  );
};

export default SubscriptionPlans;
