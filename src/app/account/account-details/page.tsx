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
import Loader from "@/components/Loader";

const AccountDetailsPage = () => {
  const session = useSession();

  const fetcher = (...args: any[]) =>
    // @ts-ignore
    fetch(...args).then((res) => res.json());

  // SWR users fetch data
  const { data, mutate, isLoading } = useSWR(
    //   @ts-ignore
    `/api/users/${session.data?.id}`,
    fetcher
  );

  const accountDetailsInitialInput: AccountDetailFormProps = {
    firstName: data?.firstName ?? "",
    email: data?.email ?? "",
    lastName: data?.lastName ?? "",
    phoneNumber: data?.phoneNumber ?? "",
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
    resetForm,
  } = useFormik({
    initialValues: accountDetailsInitialInput,
    onSubmit: handleFormSummit,
    validationSchema: accountDetailsSchema,
    enableReinitialize: true,
  });

  // Discard values of the form
  const discardChanges = () => {
    // Reset formik forms back to their initial value
    resetForm();
  };

  // Save changes of the form
  const saveChanges = async () => {
    // Disable forms
    setSubmitting(true);

    // @ts-ignore
    await fetch(`/api/users/${session.data?.id}`, {
      method: "PATCH",
      body: JSON.stringify({
        firstName: values.firstName,
        lastName: values.lastName,
        phoneNumber: values.phoneNumber,
      }),
    });

    // Enable forms
    setSubmitting(false);

    // Mutate the formik form to reflect changes
    mutate();
  };

  return (
    <div className="w-full">
      {/* Page title */}
      <p className="text-xl font-semibold capitalize px-8">Account details</p>

      {/* Horizontal line */}
      <div className="pl-8 my-6">
        <hr className="border-wb-silver" />
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
        {isLoading ? (
          <Loader variant="page" />
        ) : (
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
        )}

        {/* Change password */}
        <Link
          href={"/account/reset-password"}
          className="text-sm underline font-light mt-6"
        >
          Change password?
        </Link>
      </div>

      <div className="pl-8 mt-14 mb-6">
        <hr className="border-wb-silver" />
      </div>

      {/* Save/Discard buttons */}
      <div className="flex w-full gap-4 px-8">
        <CustomButton
          label="Discard Changes"
          variant="outlined"
          onClick={discardChanges}
          disabled={isLoading}
        />

        <CustomButton
          label="Save Changes"
          variant="filled"
          onClick={saveChanges}
          disabled={isLoading}
          loading={isSubmitting}
        />
      </div>
    </div>
  );
};

export default AccountDetailsPage;
