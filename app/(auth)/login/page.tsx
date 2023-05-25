/* eslint-disable react/no-unescaped-entities */

"use client";

import React, { useState } from "react";
import Textfield from "@/components/Textfield";
import Button from "@/components/Button";
import Link from "next/link";
import { useFormik } from "formik";
import loginSchema from "@/helpers/validation/login-form-validate";
import { login } from "@/services/auth-service";
import { toast } from "@/components/ui/Toast";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();

  const loginFormInitialValues = {
    email: "ogescoc2@gmail.com",
    password: "passwordW4",
  };

  const handleLogin = async () => {
    try {
      await login(formik.values.email, formik.values.password);

      // Successful login
      toast({
        title: "Test title",
        message: "You are logged in",
        type: "success",
      });

      router.replace("/account");
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      toast({
        title: errorCode,
        message: errorMessage,
        type: "error",
        duration: 6000,
      });
    } finally {
      formik.setSubmitting(true);
    }
  };

  const formik = useFormik({
    initialValues: loginFormInitialValues,
    onSubmit: handleLogin,
    validationSchema: loginSchema,
  });

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
        onSubmit={formik.handleSubmit}
      >
        {/* Email */}
        <Textfield
          label="Email"
          touched={formik.touched.email}
          error={formik.errors.email}
          fieldProps={formik.getFieldProps("email")}
        />

        {/* Password */}
        <Textfield
          label="Password"
          touched={formik.touched.password}
          error={formik.errors.password}
          fieldProps={formik.getFieldProps("password")}
        />

        <div className="mt-10">
          <Button title="Login" type="submit" />
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
