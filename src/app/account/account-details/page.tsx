"use client";

import React, { useContext } from "react";
import Link from "next/link";
import CustomTextField from "@/components/CustomTextField";
import { useFormik } from "formik";
import CustomButton from "@/components/CustomButton";
import accountDetailsSchema from "@/schemas/accountDetailsSchema";
import { UserContext } from "@/context/UserProvider";
import ErrorOutError from "@/utils/errorOutError";

const AccountDetailsPage = () => {
  const {
    user: { accountDetails, id },
    dispatch,
  } = useContext(UserContext);

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
    initialValues: accountDetails,
    onSubmit: () => {},
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

    try {
      await fetch(`/api/users/${id}`, {
        method: "PATCH",
        body: JSON.stringify({ accountDetails: values }),
      });

      // Update the user
      dispatch({
        type: "UPDATE_ACCOUNT_DETAILS",
        payload: {
          accountDetails: values,
        },
      });
    } catch (error) {
      ErrorOutError(error);
    } finally {
      // Enable forms
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      {/* Page title */}
      <p className="text-xl font-semibold capitalize px-8">Account details</p>

      {/* Horizontal line */}
      <div className="lg:pl-8 pl-0 lg:my-6 my-4">
        <hr className="border-wb-silver" />
      </div>

      {/* Page description */}
      <div className="lg:px-8 px-5">
        <p className="font-semibold">Personal information</p>
        <p className="font-light text-sm">
          Update your personal information here
        </p>
      </div>

      {/* Updatable account details */}
      <div className="lg:px-8 px-5">
        <form
          className="flex flex-col gap-y-0 mt-6 gap-2"
          onSubmit={handleSubmit}
        >
          {/* First & Last name */}
          <div className="flex lg:flex-row flex-col w-full lg:gap-6">
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
        {/* <Link
          href={"/account/reset-password"}
          className="text-sm underline font-light mt-6"
        >
          Change password?
        </Link> */}
      </div>

      {/* Horizontal line */}
      <div className="lg:pl-8 pl-0 lg:my-6 my-4">
        <hr className="border-wb-silver" />
      </div>

      {/* Save/Discard buttons */}
      <div className="flex w-full gap-4 lg:px-8">
        <CustomButton
          label="Discard Changes"
          variant="outlined"
          onClick={discardChanges}
          disabled={isSubmitting}
        />

        <CustomButton
          label="Save Changes"
          variant="filled"
          onClick={saveChanges}
          disabled={isSubmitting}
        />
      </div>
    </div>
  );
};

export default AccountDetailsPage;
