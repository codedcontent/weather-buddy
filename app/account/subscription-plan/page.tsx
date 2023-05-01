"use client";

import Link from "next/link";
import React from "react";
import SubscriptionPlans from "@/components/subscriptionPlans/SubscriptionPlans";

type Props = {};

const SubscriptionPlan: React.FC<Props> = (props: Props) => {
  return (
    <div className="w-full h-full relative">
      {/* Page title */}
      <p className="text-xl font-semibold capitalize px-8">Subscription Plan</p>

      {/* <-- --> */}
      <div className="pl-8 my-6">
        <hr className="border-silver" />
      </div>

      {/* Page description */}
      <div className="px-8">
        <p className="font-semibold">Select a subscription plan</p>
        <p className="font-light text-sm">
          Choose a Weather Buddy subscription plan that best suites your needs
        </p>
      </div>

      {/* Updatable subscription plans container */}
      <div className="px-8">
        {/* Updatable subscription plans */}
        <SubscriptionPlans />
      </div>

      {/* Show support card container */}
      <div className="flex w-full px-8 absolute bottom-0 left-0">
        {/* Show support card */}
        <div className="w-full px-6 py-2 bg-secondary rounded-3xl">
          <p className="uppercase text-sm">support us</p>
          <p className="font-light text-xs">
            Do you like what we do and want to show some support?
          </p>

          <div className="mt-1.5 w-full">
            <Link
              href={"https://www.patreon.com"}
              target="_blank"
              className="uppercase underline font-light text-sm"
            >
              Buy us a coffee
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlan;
