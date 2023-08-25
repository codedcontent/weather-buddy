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
      // Fetch weather locations
      dispatch(
        fetchWeatherAlerts({
          // @ts-ignore
          id: session.data?.id as string,
        })
      );

      // Set auth
      dispatch(
        authenticate({
          // @ts-ignore
          id: session.data?.id,
        })
      );
    }
  }, [dispatch, session.data]);

  if (session.status === "loading")
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
