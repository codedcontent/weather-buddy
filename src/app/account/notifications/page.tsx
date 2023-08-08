"use client";

import CustomButton from "@/components/CustomButton";
import CustomCheckbox from "@/components/CustomCheckbox";
import React from "react";

type NotificationType = {
  sms: boolean;
  email: boolean;
  whatsApp: boolean;
  push: boolean;
};

const NotificationsPage = () => {
  // Implement the notification setting function
  const getUserNotifications = async () => {
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          sms: false,
          email: false,
          whatsApp: false,
          push: false,
        });
      }, 2000);
    });
  };

  const handleSubmit = () => {};

  const saveChanges = () => {};

  const discardChanges = () => {};

  return (
    <div className="w-full">
      {/* Page title */}
      <p className="text-xl font-semibold capitalize px-8">Notifications</p>

      {/* <-- --> */}
      <div className="pl-8 my-6">
        <hr className="border-wb-silver" />
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
        <hr className="border-wb-silver" />
      </div>

      {/* Save/Discard buttons */}
      <div className="flex w-full gap-4 px-8">
        <CustomButton
          label="Discard Changes"
          onClick={discardChanges}
          variant="outlined"
        />

        <CustomButton
          label="Save Changes"
          onClick={saveChanges}
          variant="filled"
        />
      </div>
    </div>
  );
};

export default NotificationsPage;
