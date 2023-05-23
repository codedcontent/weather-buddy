/* eslint-disable react/no-unescaped-entities */

"use client";

import Button from "@/components/Button";
import Textfield from "@/components/Textfield";
import Link from "next/link";
import React from "react";
import { signup } from "@/services/auth-service";
import { useFormik } from "formik";
import signUpFormValidate from "@/helpers/validation/signup-form-validate";
import { SignUpFormProps } from "@/types/forms";

const Signup = () => {
  // Function to handle form submission
  const handleSignup = (values: SignUpFormProps) => {
    alert(JSON.stringify(values, null, 2));
  };

  const signUpFormInitialValues: SignUpFormProps = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  };

  // Use the formik for our form management
  const formik = useFormik({
    initialValues: signUpFormInitialValues,
    onSubmit: () => alert("Form submitted"),
    validate: signUpFormValidate,
  });

  // Function to create a new user
  const createUser = async () => {
    try {
      await signup(formik.values.email, formik.values.password);
    } catch (err) {
      console.log(err);
    }
  };

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
            name="firstName"
            label="First Name"
            value={formik.values.firstName}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            touched={formik.touched.firstName}
            error={formik.errors.firstName}
          />
          <Textfield
            name="lastName"
            label="Last Name"
            value={formik.values.lastName}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            touched={formik.touched.lastName}
            error={formik.errors.lastName}
          />
        </div>

        {/* Email and Number */}
        <div className="flex w-full gap-6">
          <Textfield
            name="email"
            label="Email"
            value={formik.values.email}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            touched={formik.touched.email}
            error={formik.errors.email}
          />
          <Textfield
            name="phoneNumber"
            label="Phone Number"
            value={formik.values.phoneNumber}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            touched={formik.touched.phoneNumber}
            error={formik.errors.phoneNumber}
          />
        </div>

        {/* Password */}
        <div className="flex w-full gap-6">
          <Textfield
            name="password"
            label="Password"
            value={formik.values.password}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            touched={formik.touched.password}
            error={formik.errors.password}
          />
          <Textfield
            name="confirmPassword"
            label="Confirm password"
            value={formik.values.confirmPassword}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            touched={formik.touched.confirmPassword}
            error={formik.errors.confirmPassword}
          />
        </div>

        {/* <div className="mt-6">
          <Button title="Create Account" type="submit" />
        </div> */}

        <button type="submit">Submit</button>
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
