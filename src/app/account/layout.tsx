"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import CustomButton from "@/components/CustomButton";
import UpgradePlanCard from "@/components/UpgradePlanCard";
import AccountOptions from "@/components/accountOptions/AccountOptions";
import { useRouter } from "next/navigation";
import Loader from "@/components/Loader";
import { useAppDispatch } from "@/hooks/redux-hooks";
import { fetchWeatherAlerts } from "@/slices/weatherAlertsSlice";
import { authenticate } from "@/slices/authSlice";
import { fetchNotifications } from "@/slices/notificationsSlice";
import { fetchSubscription } from "@/slices/subscriptionSlices";
import Header from "@/components/Header";

type AccountLayoutProps = {
  children: React.ReactNode;
};

const AccountLayout: React.FC<AccountLayoutProps> = ({ children }) => {
  const session = useSession();
  const router = useRouter();
  const dispatch = useAppDispatch();

  // TODO: Protect the account route
  useEffect(() => {
    if (session.status === "unauthenticated") {
      router.replace("/login");
    }
  }, [router, session.status]);

  // Load the user details
  useEffect(() => {
    if (session.data) {
      // @ts-ignore
      const userIdFromSession = session.data?.id as string;

      // Fetch weather locations
      dispatch(
        fetchWeatherAlerts({
          id: userIdFromSession,
        })
      );

      // Set auth
      dispatch(
        authenticate({
          id: userIdFromSession,
          email: session.data.user?.email as string,
        })
      );

      dispatch(fetchSubscription(userIdFromSession));

      // Fetch user notifications
      dispatch(fetchNotifications(userIdFromSession));
    }
  }, [dispatch, session.data]);

  if (session.status === "loading")
    return (
      <div className="bg-wb-primary absolute h-screen w-screen text-white">
        <Loader variant="page" />
      </div>
    );

  return (
    <main className="w-screen lg:h-screen min-h-screen bg-wb-bgColor text-white flex items-center lg:overflow-hidden lg:flex-row flex-col relative lg:pb-0 pb-10">
      {/* Header */}
      <Header />

      {/* Quick info and actions view */}
      <div className="w-[30%] h-full px-8 py-16 lg:flex hidden flex-col justify-between items-start">
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
      <section className="lg:w-[70%] w-[90%] m-auto h-[90%] bg-wb-boardColor rounded-3xl lg:mr-8">
        {/* Fixed Account Layout UI */}
        <div className="flex w-full h-full">
          <div className="lg:w-1/2 w-[90%] lg:block hidden border-r border-r-wb-silver h-full">
            <div className="py-8 pl-8">
              {/* <p className="text-xl font-semibold">Account Options</p> */}

              <div className="mt-10 space-y-12">
                {/* <div className="w-[80%]">
                  <UpgradePlanCard />
                </div> */}

                <AccountOptions />
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-[90%] m-auto py-8 relative h-full lg:overflow-hidden">
            {children}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AccountLayout;
