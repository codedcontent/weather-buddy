"use client";

import Button from "@/components/Button";
import ProfileCard from "@/components/ProfileCard";
import { toast } from "@/components/ui/Toast";
import { logoutUser, onAuthChanged } from "@/services/auth-service";
import { User } from "firebase/auth";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

const AuthLayout = (props: Props) => {
  const router = useRouter();

  const [auth, setAuth] = useState<User | null>(null);

  useEffect(() => {
    onAuthChanged((user) => {
      setAuth(user);
    });
  }, []);

  const handleLogout = () => {
    logoutUser();

    toast({
      message: "You have been logged out.",
    });

    router.replace("/login");
  };

  const handleLogin = () => {
    router.push("/login");
  };

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
          {auth ? (
            <Button title="LOGOUT" onClick={handleLogout} filled={false} />
          ) : (
            <Button title="Login" onClick={handleLogin} filled={false} />
          )}
        </div>
      </div>

      {/* Sign up && Log in screen */}
      <section className="w-[70%] h-[90%] bg-boardColor rounded-3xl p-8 mr-8">
        {props.children}
      </section>
    </main>
  );
};

export default AuthLayout;
