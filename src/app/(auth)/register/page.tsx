"use client";

import React from "react";
import { useSession } from "next-auth/react";
import CustomTextField from "@/components/CustomTextField";
import { RegisterFormProps } from "@/types/types";
import { useFormik } from "formik";
import { registerSchema } from "@/schemas/registerSchema";
import CustomButton from "@/components/CustomButton";
import Link from "next/link";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const session = useSession();
  const router = useRouter();

  console.log(session);

  const registerFormInitialValues: RegisterFormProps = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  };

  const handleFormSubmit = async (values: RegisterFormProps) => {
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (res.status === 200) {
        router.push("/account");
      }
    } catch (error) {
      throw new Error(`New user registration failed ${error}`);
    }
  };

  const { errors, handleSubmit, getFieldProps, touched, isSubmitting } =
    useFormik({
      initialValues: registerFormInitialValues,
      validationSchema: registerSchema,
      onSubmit: handleFormSubmit,
    });

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
      <form
        className="flex flex-col gap-y-0 my-6 gap-2"
        onSubmit={handleSubmit}
      >
        {/* First & Last name */}
        <div className="flex w-full gap-6">
          <CustomTextField
            label="First Name"
            touched={touched.firstName}
            error={errors.firstName}
            {...getFieldProps("firstName")}
          />
          <CustomTextField
            label="Last Name"
            touched={touched.lastName}
            error={errors.lastName}
            {...getFieldProps("lastName")}
          />
        </div>

        {/* Email and Number */}
        <div className="flex w-full gap-6">
          <CustomTextField
            label="Email"
            touched={touched.email}
            error={errors.email}
            {...getFieldProps("email")}
          />
          <CustomTextField
            label="Phone Number"
            touched={touched.phoneNumber}
            error={errors.phoneNumber}
            {...getFieldProps("phoneNumber")}
          />
        </div>

        {/* Password */}
        <div className="flex w-full gap-6">
          <CustomTextField
            label="Password"
            touched={touched.password}
            error={errors.password}
            {...getFieldProps("password")}
          />
          <CustomTextField
            label="Confirm password"
            touched={touched.confirmPassword}
            error={errors.confirmPassword}
            {...getFieldProps("confirmPassword")}
          />
        </div>

        <div className="mt-6">
          <CustomButton
            label="Create Account"
            type="submit"
            loading={isSubmitting}
            variant="filled"
          />
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

export default RegisterPage;
