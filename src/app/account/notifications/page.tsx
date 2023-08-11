"use client";

import CustomButton from "@/components/CustomButton";
import CustomCheckbox from "@/components/CustomCheckbox";
import Loader from "@/components/Loader";
import mapUserNotifications from "@/utils/mapUserNotifications";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

type NotificationType = {
  sms: boolean;
  email: boolean;
  whatsApp: boolean;
  pushNotifications: boolean;
};

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState<NotificationType | null>(
    null
  );
  const [disabled, setDisabled] = useState(false);

  // User session
  const session = useSession();

  // Get the users notifications
  useEffect(() => {
    // Disable buttons
    setDisabled(true);

    const getUserNotifications = async () => {
      // @ts-ignore
      const url = `/api/notifications/${session.data?.id}`;

      try {
        const resp = await fetch(url, { method: "GET" });
        const data = await resp.json();

        const userNotifications = mapUserNotifications(data.notifications);

        setNotifications(userNotifications);
        setDisabled(false);
      } catch (error) {
        throw new Error(`An error occurred: => ${error}`);
      }
    };

    getUserNotifications();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    const isChecked = e.target.checked;

    setNotifications((prev) => ({
      ...(prev as NotificationType),
      [name]: isChecked,
    }));
  };

  const saveChanges = async () => {
    // Disable buttons
    setDisabled(true);

    try {
      // @ts-ignore
      const url = `/api/notifications/${session.data?.id}`;
      const resp = await fetch(url, {
        method: "PATCH",
        body: JSON.stringify({ notifications }),
      });

      const data = await resp.json();
      console.log(data);
    } catch (error) {
      throw new Error(`An error occurred: => ${error}`);
    }

    // Enable buttons
    setDisabled(false);
  };

  const discardChanges = async () => {
    // @ts-ignore
    const url = `/api/notifications/${session.data?.id}`;
    const resp = await fetch(url, { method: "GET" });
    const data = await resp.json();

    const userNotifications = mapUserNotifications(data.notifications);

    setNotifications(userNotifications);
  };

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
      {!notifications ? (
        <div className="w-full grid place-items-center h-32">
          <Loader variant="action" />
        </div>
      ) : (
        <div className="px-8 mt-8 grid grid-cols-2 gap-y-4">
          <CustomCheckbox
            label="Email alerts"
            checked={notifications?.email}
            onChange={(e) => {
              handleChange(e, "email");
            }}
          />

          <CustomCheckbox
            label="SMS alerts"
            checked={notifications?.sms}
            onChange={(e) => {
              handleChange(e, "sms");
            }}
          />

          <CustomCheckbox
            label="WhatsApp alerts"
            checked={notifications?.whatsApp}
            onChange={(e) => {
              handleChange(e, "whatsApp");
            }}
          />

          <CustomCheckbox
            label="Push notifications"
            checked={notifications?.pushNotifications}
            onChange={(e) => {
              handleChange(e, "pushNotifications");
            }}
          />
        </div>
      )}

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
          disabled={disabled}
        />

        <CustomButton
          label="Save Changes"
          onClick={saveChanges}
          variant="filled"
          disabled={disabled}
        />
      </div>
    </div>
  );
};

export default NotificationsPage;
