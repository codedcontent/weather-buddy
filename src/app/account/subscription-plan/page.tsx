import React from "react";
import SubscriptionPlans from "@/components/subscriptionPlans/SubscriptionPlans";
import Link from "next/link";

const SupportCard = () => {
  return (
    <div className="flex w-full px-8 absolute bottom-0 left-0">
      {/* Show support card */}
      <div className="w-full px-6 py-2 bg-wb-secondary rounded-3xl">
        <p className="uppercase font-semibold text-sm">Loving weather buddy?</p>
        <p className="font-light text-sm">
          Support the creator of this project by buying them a coffee in 5 mins.
        </p>

        <div className="mt-1.5 w-full">
          <Link
            href={"https://www.patreon.com"}
            target="_blank"
            className="uppercase underline font-light text-sm"
          >
            Buy a coffee
          </Link>
        </div>
      </div>
    </div>
  );
};

const SubscriptionPlanPage = () => {
  return (
    <div className="w-full h-full relative">
      {/* Page title */}
      <p className="text-xl font-semibold capitalize px-8">
        Subscription plans
      </p>

      {/* Horizontal line */}
      <div className="lg:pl-8 pl-0 lg:my-6 my-4">
        <hr className="border-wb-silver" />
      </div>

      {/* Page description */}
      <div className="px-8">
        <p className="font-semibold">Select a subscription plan</p>
        <p className="font-light text-sm">
          Choose a Weather Buddy subscription plan that best suites your needs
        </p>
      </div>

      <div className="my-5 px-8">
        <SubscriptionPlans />
      </div>

      {/* Show support card container */}
      {/* <SupportCard /> */}
    </div>
  );
};

export default SubscriptionPlanPage;
