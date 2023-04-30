/* eslint-disable react/no-unescaped-entities */

"use client";

import React, { useState } from "react";
import Textfield from "@/components/Textfield";
import Button from "@/components/Button";
import Link from "next/link";

type Props = {};

const Login = (props: Props) => {
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {};

  const handleLogin = () => {};

  return (
    <div className="w-full h-full">
      {/* Login CTA */}
      <div className="w-full">
        <p className="text-lg font-semibold">Login</p>
        <p className="font-light">
          Login to your account to see your Weather Buddy account settings
        </p>
      </div>

      {/* Login Form */}
      <form className="flex flex-col gap-y-0 my-6 gap-2">
        {/* Email */}
        <Textfield />

        {/* Password */}
        <Textfield />

        <div className="mt-10">
          <Button title="Login" onClick={handleLogin} />
        </div>
      </form>

      {/* Create Account */}
      <Link
        href={"/signup"}
        className="text-sm underline font-light float-right mt-6"
      >
        Don't have an account? Create one here
      </Link>
    </div>
  );
};

export default Login;
