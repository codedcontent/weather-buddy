"use client";

import CustomButton from "@/components/CustomButton";
import CustomTextField from "@/components/CustomTextField";
import Link from "next/link";
import React, { useEffect } from "react";
import { useFormik } from "formik";
import { loginSchema } from "@/schemas/loginSchema";
import { LoginFormProps } from "@/types/types";
import { signIn } from "next-auth/react";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Loader from "@/components/Loader";

const LoginPage = () => {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.replace("/account");
    }
  }, [router, status]);

  const loginFormInitialValues: LoginFormProps = {
    email: "test@gmail.com",
    password: "password",
  };

  // Handle what happens when the user submits the form and it's values are validated
  const handleFormSubmit = (values: LoginFormProps) => {
    // Login the user
    signIn("credentials", { email: values.email, password: values.password });
  };

  const { errors, handleSubmit, getFieldProps, touched, isSubmitting } =
    useFormik({
      initialValues: loginFormInitialValues,
      validationSchema: loginSchema,
      onSubmit: handleFormSubmit,
    });

  // The page view while the users auth status is loading
  if (status === "loading" || status === "authenticated") {
    return <Loader variant="page" />;
  }

  // The main login page
  if (status === "unauthenticated")
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
        <form
          className="flex flex-col gap-y-0 my-6 gap-2"
          onSubmit={handleSubmit}
        >
          {/* Email */}
          <CustomTextField
            label="Email"
            touched={touched.email}
            error={errors.email}
            placeholder="Enter your email"
            disabled={isSubmitting}
            {...getFieldProps("email")}
          />

          {/* Password */}
          <CustomTextField
            label="Password"
            touched={touched.password}
            error={errors.password}
            placeholder="Enter your password"
            disabled={isSubmitting}
            type="password"
            {...getFieldProps("password")}
          />

          <div className="mt-10">
            <CustomButton
              label="Login"
              variant="filled"
              type="submit"
              loading={isSubmitting}
            />
          </div>
        </form>

        {/* Create Account */}
        <Link
          href={"/register"}
          className="text-sm underline font-light float-right mt-6"
        >
          Don&apos;t have an account? Create one here
        </Link>
      </div>
    );
};

export default LoginPage;
