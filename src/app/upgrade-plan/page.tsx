/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React from "react";

const UpgradeSubscriptionPage = () => {
  return (
    <div className="flex flex-col h-screen w-screen justify-center items-center m-auto">
      <div className="w-[70%] flex flex-col gap-4">
        <p className="text-7xl text-wb-primary font-bold">We're excited</p>

        <p className="text-lg">
          Hey, we're exited you're ready to upgrade to the pro plan. We will add
          you to the wait list while we get things ready for you.
        </p>

        <Link href="account" className="text-wb-primary underline">
          Go back to your account
        </Link>
      </div>
    </div>
  );
};

export default UpgradeSubscriptionPage;
