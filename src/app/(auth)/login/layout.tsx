import Link from "next/link";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const AuthLayout: React.FC<Props> = ({ children }) => {
  return (
    <main className="w-screen h-screen bg-wb-bgColor text-white flex items-center">
      {/* Quick info and actions view */}
      <div className="w-[30%] h-full px-8 py-16 flex flex-col justify-between items-start">
        {/* TODO: Add one of those updating-sliding-up like cards that shows what weather info and alerts people have been getting so far */}

        {/* Link to something interesting */}
        <Link href={"https://google.com"}>
          <div className="bg-wb-primary py-4 px-6 rounded-3xl">
            See what the weathers like somewhere in the world?
          </div>
        </Link>
      </div>

      {/* Sign up && Log in screen */}
      <section className="w-[70%] h-[90%] bg-wb-boardColor rounded-3xl p-8 mr-8">
        {children}
      </section>
    </main>
  );
};

export default AuthLayout;
