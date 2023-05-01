import React from "react";
import SubscriptionPlan from "./SubscriptionPlan";

type Props = {};

const SubscriptionPlans: React.FC<Props> = (props: Props) => {
  return (
    <div className="w-full divide-y-2 flex flex-col">
      <SubscriptionPlan
        subscriptionTItle="Free plan"
        subscriptionDescription="Free is nice, the free plan is best for testing the basic weather buddy features"
        empTitle="current plan"
        empColor="primary"
      />

      <SubscriptionPlan
        subscriptionTItle="Standard Plan"
        subscriptionDescription="Easy and affordable, Best for daily weather updates to help you plan your day"
      />

      <SubscriptionPlan
        subscriptionTItle="Premium Plan"
        subscriptionDescription="Be in a league of your own. The premium plan is coming soon"
        empTitle="coming soon"
        empColor="green"
      />
    </div>
  );
};

export default SubscriptionPlans;
