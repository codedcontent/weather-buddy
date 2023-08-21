"use client";

import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import CustomButton from "@/components/CustomButton";
import UpgradePlanCard from "@/components/UpgradePlanCard";
import AccountOptions from "@/components/accountOptions/AccountOptions";
import { useRouter } from "next/navigation";
import Loader from "@/components/Loader";
import { UserContext } from "@/context/UserProvider";
import { useAppDispatch } from "@/hooks/redux-hooks";
import { fetchWeatherAlerts } from "@/slices/weatherAlertsSlice";

type AccountLayoutProps = {
  children: React.ReactNode;
};

const AccountLayout: React.FC<AccountLayoutProps> = ({ children }) => {
  const session = useSession();
  const router = useRouter();
  const appDispatch = useAppDispatch();

  const { user, dispatch } = useContext(UserContext);
  const [userDetailsAvailable, setUserDetailsAvailable] = useState(false);

  // Protect the account route
  // TODO: Replace this with a middleware instead
  useEffect(() => {
    if (session.status === "unauthenticated") {
      router.replace("/login");
    }
  }, [router, session.status]);

  // Load the user details
  useEffect(() => {
    const getUserData = async () => {
      const url =
        // @ts-ignore
        `/api/users/${session.data?.id}`;

      const data = await fetch(url);
      const userData = await data.json();

      // Set user details
      dispatch({
        type: "SET_USER",
        payload: {
          user: {
            // @ts-ignore
            id: session.data?.id,
            ...userData,
          },
        },
      });

      setUserDetailsAvailable(true);
    };

    if (session.data) {
      getUserData();

      // Fetch weather locations
      appDispatch(
        fetchWeatherAlerts({
          // @ts-ignore
          id: session.data?.id as string,
        })
      );
    }
  }, [dispatch, session.data]);

  useEffect(() => {
    // console.log(user.weatherAlerts);
    // console.log(user.weatherAlerts);
  }, [user.weatherAlerts]);

  if (
    session.status === "loading" ||
    session.status === "unauthenticated" ||
    !userDetailsAvailable
  )
    return (
      <div className="bg-wb-primary absolute h-screen w-screen text-white">
        <Loader variant="page" />
      </div>
    );

  return (
    <main className="w-screen h-screen bg-wb-bgColor text-white flex items-center overflow-hidden">
      {/* Quick info and actions view */}
      <div className="w-[30%] h-full px-8 py-16 flex flex-col justify-between items-start">
        <h1>Profile Card</h1>

        {/* Link to something interesting */}
        <Link
          href={"https://google.com"}
          target="_blank"
          referrerPolicy="no-referrer"
        >
          <div className="bg-wb-primary py-4 px-6 rounded-3xl">
            See what the weathers like somewhere in the world?
          </div>
        </Link>

        <div>
          <CustomButton label="LOGOUT" variant="filled" onClick={signOut} />
        </div>
      </div>

      {/* Fixed Account Layout Section */}
      <section className="w-[70%] h-[90%] bg-wb-boardColor rounded-3xl mr-8">
        {/* Fixed Account Layout UI */}
        <div className="flex w-full h-full">
          <div className="w-1/2 border-r border-r-wb-silver h-full">
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

          <div className="w-1/2 py-8 relative h-full overflow-hidden">
            {children}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AccountLayout;
