/* eslint-disable react/no-unescaped-entities */

"use client";

import Button from "@/components/Button";
import Textfield from "@/components/Textfield";
import Link from "next/link";
import React from "react";
import { signup } from "@/services/auth-service";
import { useFormik } from "formik";
import createAccountSchema from "@/helpers/validation/signup-form-validate";
import { SignUpFormProps } from "@/types/forms";
import { toast } from "@/components/ui/Toast";
import { createNewUserAccount } from "@/services/user-account-service";
import { useRouter } from "next/navigation";

const Signup = () => {
  const router = useRouter();

  // Function to create a new user
  const createUser = async (email: string, password: string) => {
    try {
      const newUser = await signup(email, password);

      // Create a user account on the db
      if (newUser.uid) {
        const newUserDetails = {
          firstName: formik.values.firstName,
          lastName: formik.values.lastName,
          phoneNumber: formik.values.phoneNumber,
          email: formik.values.email,
        };

        await createNewUserAccount(newUserDetails, newUser.uid);

        toast({
          message: "You have successfully created an account!",
          type: "success",
          duration: 6000,
        });

        router.replace("/account");
      }
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      toast({
        title: errorCode,
        message: errorMessage,
        type: "error",
      });
    } finally {
      formik.setSubmitting(false);
    }
  };

  // Function to handle form submission
  const handleSignup = (values: SignUpFormProps) => {
    createUser(values.email, values.password);
  };

  const signUpFormInitialValues: SignUpFormProps = {
    firstName: "oge",
    lastName: "meph",
    email: "ogescoc2@gmail.com",
    phoneNumber: "12345678963",
    password: "passwordW4",
    confirmPassword: "passwordW4",
  };

  // Use the formik for our form management
  const formik = useFormik({
    initialValues: signUpFormInitialValues,
    onSubmit: handleSignup,
    validationSchema: createAccountSchema,
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
        onSubmit={formik.handleSubmit}
      >
        {/* First & Last name */}
        <div className="flex w-full gap-6">
          <Textfield
            label="First Name"
            touched={formik.touched.firstName}
            error={formik.errors.firstName}
            fieldProps={formik.getFieldProps("firstName")}
          />
          <Textfield
            label="Last Name"
            touched={formik.touched.lastName}
            error={formik.errors.lastName}
            fieldProps={formik.getFieldProps("lastName")}
          />
        </div>

        {/* Email and Number */}
        <div className="flex w-full gap-6">
          <Textfield
            label="Email"
            touched={formik.touched.email}
            error={formik.errors.email}
            fieldProps={formik.getFieldProps("email")}
          />
          <Textfield
            label="Phone Number"
            touched={formik.touched.phoneNumber}
            error={formik.errors.phoneNumber}
            fieldProps={formik.getFieldProps("phoneNumber")}
          />
        </div>

        {/* Password */}
        <div className="flex w-full gap-6">
          <Textfield
            label="Password"
            touched={formik.touched.password}
            error={formik.errors.password}
            fieldProps={formik.getFieldProps("password")}
          />
          <Textfield
            label="Confirm password"
            touched={formik.touched.confirmPassword}
            error={formik.errors.confirmPassword}
            fieldProps={formik.getFieldProps("confirmPassword")}
          />
        </div>

        <div className="mt-6">
          <Button
            title="Create Account"
            type="submit"
            loading={formik.isSubmitting}
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

export default Signup;
