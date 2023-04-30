"use client";

import AccountOptions from "@/components/AccountOptions/AccountOptions";
import Button from "@/components/Button";
import ProfileCard from "@/components/ProfileCard";
import UpgradePlanCard from "@/components/UpgradePlanCard";
import Link from "next/link";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const AccountLayout = (props: Props) => {
  const handleLogout = () => {};

  return (
    <main className="w-screen h-screen bg-bgColor text-white flex items-center">
      {/* Quick info and actions view */}
      <div className="w-[30%] h-full px-8 py-16 flex flex-col justify-between items-start">
        <ProfileCard />

        {/* Link to something interesting */}
        <Link href={"https://google.com"}>
          <div className="bg-primary py-4 px-6 rounded-3xl">
            See what the weathers like somewhere in the world?
          </div>
        </Link>

        <div>
          <Button title="LOGOUT" onClick={handleLogout} filled={false} />
        </div>
      </div>

      <section className="w-[70%] h-[90%] bg-boardColor rounded-3xl p-8 mr-8">
        {/* Fixed Account Layout UI */}
        <div className="flex w-full">
          <div className="w-1/2">
            <div className="w-[80%]">
              <p className="text-xl font-semibold">Account</p>

              <div className="mt-10 space-y-6">
                <UpgradePlanCard />

                <AccountOptions />
              </div>
            </div>
          </div>

          <div className="w-1/2">{props.children}</div>
        </div>
      </section>
    </main>
  );
};

export default AccountLayout;
