"use client";

import Button from "@/components/Button";
import CustomCheckbox from "@/components/CustomCheckbox";
import React from "react";

type Props = {};

const Notifications: React.FC<Props> = (props: Props) => {
  const saveChanges = () => {};

  const discardChanges = () => {};

  return (
    <div className="w-full">
      {/* Page title */}
      <p className="text-xl font-semibold capitalize px-8">Notifications</p>

      {/* <-- --> */}
      <div className="pl-8 my-6">
        <hr className="border-silver" />
      </div>

      {/* Page description */}
      <div className="px-8">
        <p className="font-semibold">Notification preferences</p>
        <p className="font-light text-sm">
          Choose the various ways you would like to receive your weather alerts
        </p>
      </div>

      {/* Updatable notification preferences */}
      <div className="px-8 mt-8 grid grid-cols-2 gap-y-4">
        <CustomCheckbox label="SMS alerts" />
        <CustomCheckbox label="Email alerts" />
        <CustomCheckbox label="WhatsApp alerts" />
        <CustomCheckbox label="Push notifications" />
      </div>

      {/* <-- --> */}
      <div className="pl-8 mt-14 mb-6">
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

export default Notifications;
