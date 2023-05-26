"use client";

import AccountOptions from "@/components/accountOptions/AccountOptions";
import Button from "@/components/Button";
import ProfileCard from "@/components/ProfileCard";
import { toast } from "@/components/ui/Toast";
import UpgradePlanCard from "@/components/UpgradePlanCard";
import { logoutUser, onAuthChanged } from "@/services/auth-service";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { User } from "firebase/auth";
import { Loader2 } from "lucide-react";
import { getUserAccountDetails } from "@/services/user-account-service";
import { UserAccountProfileDetailsProps } from "@/types/user";

type Props = {
  children: React.ReactNode;
};

const AccountLayout = (props: Props) => {
  const router = useRouter();

  const [auth, setAuth] = useState<User | null>(null);
  const [userAccountDetails, setUserAccountDetails] = useState<undefined | {}>(
    undefined
  );

  // Watch the auth state of the user
  useEffect(() => {
    onAuthChanged((user) => {
      setAuth(user);
    });
  }, []);

  // Get the users account details
  useEffect(() => {
    const getDetails = async () => {
      if (auth) {
        const userAccountDetails = await getUserAccountDetails(auth.uid);
        console.log(userAccountDetails);

        setUserAccountDetails(userAccountDetails);
      }
    };

    getDetails();
  }, [auth]);

  // Logout the user
  const handleLogout = () => {
    logoutUser();

    toast({ message: "You have been logged out." });

    router.replace("/login");
  };

  // Login the user
  const handleLogin = () => {
    router.push("/login");
  };

  return (
    <main className="w-screen h-screen bg-bgColor text-white flex items-center">
      {/* Quick info and actions view */}
      <div className="w-[30%] h-full px-8 py-16 flex flex-col justify-between items-start">
        {!userAccountDetails ? (
          <Loader2 className="animate-spin" />
        ) : (
          <ProfileCard
            userAccountDetails={
              userAccountDetails as UserAccountProfileDetailsProps
            }
          />
        )}

        {/* Link to something interesting */}
        <Link href={"https://google.com"}>
          <div className="bg-primary py-4 px-6 rounded-3xl">
            See what the weathers like somewhere in the world?
          </div>
        </Link>

        {auth === null ? (
          <Loader2 className="animate-spin" />
        ) : (
          <div>
            {auth ? (
              <Button title="LOGOUT" onClick={handleLogout} filled={false} />
            ) : (
              <Button title="Login" onClick={handleLogin} filled={false} />
            )}
          </div>
        )}
      </div>

      <section className="w-[70%] h-[90%] bg-boardColor rounded-3xl mr-8">
        {/* Fixed Account Layout UI */}
        <div className="flex w-full h-full">
          <div className="w-1/2 border-r border-r-silver h-full">
            <div className="py-8 pl-8">
              <p className="text-xl font-semibold">Account</p>

              <div className="mt-10 space-y-12">
                <div className="w-[80%]">
                  <UpgradePlanCard />
                </div>

                <AccountOptions />
              </div>
            </div>
          </div>

          <div className="w-1/2 py-8">{props.children}</div>
        </div>
      </section>
    </main>
  );
};

export default AccountLayout;
