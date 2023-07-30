import React from "react";
import Link from "next/link";

const AccountPage = () => {
  return (
    <div className="h-full w-full flex justify-center items-center flex-col p-10">
      <div className="space-y-3">
        <h1 className="text-5xl">This is the Account Page</h1>
        <h4 className="text-lg">
          Which account option would you like to check
        </h4>
      </div>

      <div className="flex flex-col gap-4 mt-10">
        <Link
          href="/account/account-details"
          className="p-2 border border-white rounded-lg"
        >
          Account Details
        </Link>

        <Link
          href="/account/weather-alerts"
          className="p-2 border border-white rounded-lg"
        >
          Weather alerts
        </Link>

        <Link
          href="/account/subscription-plan"
          className="p-2 border border-white rounded-lg"
        >
          Subscription plan
        </Link>

        <Link
          href="/account/notifications"
          className="p-2 border border-white rounded-lg"
        >
          Notifications plan
        </Link>
      </div>
    </div>
  );
};

export default AccountPage;
