"use client";

import React from "react";
import Link from "next/link";
import CustomTextField from "@/components/CustomTextField";
import { AccountDetailFormProps } from "@/types/types";
import { useFormik } from "formik";
import CustomButton from "@/components/CustomButton";
import accountDetailsSchema from "@/schemas/accountDetailsSchema";
import { useSession } from "next-auth/react";
import useSWR from "swr";

const AccountDetailsPage = () => {
  const session = useSession();

  // @ts-ignore
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    //   @ts-ignore
    `/api/users/${session.data?.id}`,
    fetcher
  );

  console.log(data);

  const AccountDetailsInitialInput: AccountDetailFormProps = {
    firstName: "",
    email: "",
    lastName: "",
    phoneNumber: "",
  };

  const handleFormSummit = (values: AccountDetailFormProps) => {
    console.log(values);
  };

  const {
    values,
    isSubmitting,
    touched,
    errors,
    getFieldProps,
    handleSubmit,
    setSubmitting,
  } = useFormik({
    initialValues: AccountDetailsInitialInput,
    onSubmit: handleFormSummit,
    validationSchema: accountDetailsSchema,
  });

  // Discard values of the form
  const discardChanges = () => {
    // Disable forms
    setSubmitting(true);
  };

  // Save changes of the form
  const saveChanges = () => {
    // Disable forms
    setSubmitting(true);
    console.log("Saving changes => ", values);
  };

  return (
    <div className="w-full">
      {/* Page title */}
      <p className="text-xl font-semibold capitalize px-8">Account details</p>

      <div className="pl-8 my-6">
        <hr className="border-silver" />
      </div>

      {/* Page description */}
      <div className="px-8">
        <p className="font-semibold">Personal information</p>
        <p className="font-light text-sm">
          Update your personal information here
        </p>
      </div>

      {/* Updatable account details */}
      <div className="px-8">
        <form
          className="flex flex-col gap-y-0 mt-6 gap-2"
          onSubmit={handleSubmit}
        >
          {/* First & Last name */}
          <div className="flex w-full gap-6">
            <CustomTextField
              label="First Name"
              {...getFieldProps("firstName")}
              error={errors.firstName}
              touched={touched.firstName}
              type="text"
              disabled={isSubmitting}
              placeholder="John"
            />

            <CustomTextField
              label="Last Name"
              {...getFieldProps("lastName")}
              error={errors.lastName}
              touched={touched.lastName}
              type="text"
              disabled={isSubmitting}
              placeholder="Doe"
            />
          </div>

          {/* Email and Number */}
          <div className="flex w-full gap-6">
            <CustomTextField
              label="Phone Number"
              {...getFieldProps("phoneNumber")}
              error={errors.phoneNumber}
              touched={touched.phoneNumber}
              type="text"
              disabled={isSubmitting}
              placeholder="081xxxxxxxx"
            />
          </div>
        </form>

        {/* Change password */}
        <Link
          href={"/reset-password"}
          className="text-sm underline font-light mt-6"
        >
          Change password?
        </Link>
      </div>

      <div className="pl-8 mt-14 mb-6">
        <hr className="border-silver" />
      </div>

      {/* Save/Discard buttons */}
      <div className="flex w-full gap-4 px-8">
        <CustomButton
          label="Discard Changes"
          variant="outlined"
          onClick={discardChanges}
        />

        <CustomButton
          label="Save Changes"
          variant="filled"
          onClick={saveChanges}
        />
      </div>
    </div>
  );
};

export default AccountDetailsPage;
