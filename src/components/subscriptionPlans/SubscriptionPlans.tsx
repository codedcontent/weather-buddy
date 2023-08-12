"use client";

import React, { useContext, useEffect, useState } from "react";
import CustomButton from "../CustomButton";
import SubscriptionCard from "./SubscriptionCard";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { UserContext } from "@/context/UserProvider";
import ErrorOutError from "@/utils/errorOutError";

const subscriptions = [
  {
    id: 1,
    name: "Free Plan",
    description:
      "Enjoy the essentials with our Free Plan, perfect for testing basic Weather Buddy features.",
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
    name: "Pro Plan",
    description:
      "Stay informed and plan your days effectively with our Pro Plan, offering daily weather updates.",
    features: [
      "Unlimited location tracking",
      "Receive multiple daily weather alerts",
      "SMS and email notifications",
    ],
    price: 3,
  },

  {
    id: 3,
    name: "Premium Plan",
    description:
      "Experience Weather Buddy at its best with our Premium Plan. Unlock exclusive features and benefits.",
    features: [
      "Advanced weather insights",
      "Severe weather alerts",
      "Customizable notifications",
    ],
    badge: {
      title: "Coming Soon",
      color: "green",
    },
    price: 5,
  },
];

const SubscriptionPlans = () => {
  const session = useSession();
  const { state, dispatch } = useContext(UserContext);

  //   const fetcher = (...args: any[]) =>
  //     // @ts-ignore
  //     fetch(...args).then((res) => res.json());

  //   // SWR users fetch data
  //   const { data, mutate, isLoading } = useSWR(
  //     //   @ts-ignore
  //     `/api/subscriptions/${session.data?.id}`,
  //     fetcher
  //   );

  const [selectedSubscriptionPlan, setSelectedSubscriptionPlan] = useState<
    number | null
  >(null);

  const [isLoading, setIsLoading] = useState(false);

  const changeSubscriptionPlan = () => {};

  const cancelSubscriptionChange = async () => {
    setIsLoading(true);
    // Cancel the users subscription
    const url =
      // @ts-ignore
      `/api/subscriptions/${state.id}`;

    try {
      const resp = await fetch(url, {
        method: "PATCH",
        body: JSON.stringify("free"),
      });

      const data = await resp.json();

      console.log(data);
    } catch (error) {
      ErrorOutError(error);
    } finally {
      setIsLoading(false);
    }

    // Update subscription details
    // dispatch({
    //   type: "CANCEL_SUBSCRIPTION",
    //   payload: {
    //     subscription: "standard",
    //   },
    // });

    // setSelectedSubscriptionPlan(null);
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
          <CustomButton
            label="Upgrade Subscription Plan"
            onClick={changeSubscriptionPlan}
            variant="filled"
            disabled={isLoading}
          />

          <CustomButton
            label="Cancel"
            onClick={cancelSubscriptionChange}
            variant="outlined"
            disabled={isLoading}
          />
        </div>
      )}
    </div>
  );
};

export default SubscriptionPlans;
