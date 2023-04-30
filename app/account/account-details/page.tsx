"use client";

import Button from "@/components/Button";
import Textfield from "@/components/Textfield";
import Link from "next/link";
import React from "react";

type Props = {};

const AccountDetails: React.FC<Props> = ({}) => {
  const saveChanges = () => {};

  const discardChanges = () => {};

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
        <form className="flex flex-col gap-y-0 mt-6 gap-2">
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
        </form>

        {/* Change password */}
        <Link
          href={"/reset-password"}
          className="text-sm underline font-light mt-6"
        >
          Change password?
        </Link>
      </div>

      <div className="pl-8 mt-10 mb-6">
        <hr className="border-silver" />
      </div>

      {/* Save/Discard buttons */}
      <div className="flex w-full gap-4 px-8">
        <Button
          title="Discard Changes"
          onClick={discardChanges}
          filled={false}
          width="full"
        />

        <Button title="Save Changes" onClick={saveChanges} width="full" />
      </div>
    </div>
  );
};

export default AccountDetails;
