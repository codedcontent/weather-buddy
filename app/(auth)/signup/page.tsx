/* eslint-disable react/no-unescaped-entities */

"use client";

import Button from "@/components/Button";
import Textfield from "@/components/Textfield";
import Link from "next/link";
import React from "react";

type Props = {};

const Signup = (props: Props) => {
  const handleSignup = () => {};

  return (
    <div className="w-full h-full">
      {/* Login CTA */}
      <div className="w-full">
        <p className="text-lg font-semibold">Create an account</p>
        <p className="font-light">
          Create your Weather Buddy account to stay ahead of the mother-nature
        </p>
      </div>

      {/* Login Form */}
      <form className="flex flex-col gap-y-0 my-6 gap-2">
        {/* First & Last name */}
        <div className="flex w-full gap-6">
          <Textfield />
          <Textfield />
        </div>

        {/* Email and Number */}
        <div className="flex w-full gap-6">
          <Textfield />
          <Textfield />
        </div>

        {/* Password */}
        <div className="flex w-full gap-6">
          <Textfield />
          <Textfield />
        </div>

        <div className="mt-6">
          <Button title="Create Account" onClick={handleSignup} />
        </div>
      </form>

      {/* Create Account */}
      <Link
        href={"/login"}
        className="text-sm underline font-light float-right mt-6"
      >
        Already have an account? Login here
      </Link>
    </div>
  );
};

export default Signup;
