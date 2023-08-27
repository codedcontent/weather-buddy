"use client";

import CustomButton from "@/components/CustomButton";
import CustomCheckbox from "@/components/CustomCheckbox";
import Loader from "@/components/Loader";
import { useAppDispatch, useAppSelector } from "@/hooks/redux-hooks";
import { selectAuth } from "@/slices/authSlice";
import {
  checkNotification,
  getNotificationsStatus,
  resetNotification,
  selectNotifications,
} from "@/slices/notificationsSlice";
import { TNotificationType, TNotifications } from "@/types/types";
import axios from "axios";
import { enqueueSnackbar } from "notistack";
import React, { useEffect, useState } from "react";

const NotificationsPage = () => {
  const [disabled, setDisabled] = useState(false);

  const auth = useAppSelector(selectAuth);
  const notifications = useAppSelector(selectNotifications);
  const notificationsStatus = useAppSelector(getNotificationsStatus);
  const dispatch = useAppDispatch();

  const [notifsTemp, setNotifsTemp] = useState<TNotificationType | null>(null);

  const saveChanges = async () => {
    setDisabled(true);

    const url = `/api/notifications/${auth.id}`;

    try {
      const update: TNotifications = {
        email: { enabled: notifications?.email },
        pushNotifications: { enabled: notifications?.pushNotifications },
        sms: { enabled: notifications?.sms },
        whatsApp: { enabled: notifications?.whatsApp },
      };

      const resp = await axios.patch(url, { notifications });
      const data = resp.data;

      console.log(data);
    } catch (error: any) {
      console.log(error);

      enqueueSnackbar(`An error occurred: => ${error.message}`, {
        variant: "error",
      });
    } finally {
      setDisabled(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: keyof TNotificationType
  ) => {
    const isChecked = e.target.checked;

    dispatch(
      checkNotification({
        isChecked,
        notificationName: name,
      })
    );
  };

  const discardChanges = async () => {
    dispatch(
      resetNotification({ notifications: notifsTemp as TNotificationType })
    );
  };

  // Store notifications temporarily
  useEffect(() => {
    if (!notifsTemp && notifications) {
      setNotifsTemp(notifications);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Check notifications availability
  useEffect(() => {
    if (notificationsStatus === "failed") {
      enqueueSnackbar("Something went wrong. Try again later.", {
        variant: "error",
      });
    }
  }, [notificationsStatus]);

  if (notificationsStatus === "pending") return <p>Loading notifications</p>;

  return (
    <div className="w-full">
      {/* Page title */}
      <p className="text-xl font-semibold capitalize lg:px-8 px-6">
        Notifications
      </p>

      {/* <-- --> */}
      <div className="lg:pl-8 pl-0 lg:my-6 my-4">
        <hr className="border-wb-silver" />
      </div>

      {/* Page description */}
      <div className="lg:px-8 px-6">
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
        <div className="lg:px-8 px-6 mt-8 grid lg:grid-cols-2 grid-cols-1 gap-y-4">
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
      <div className="mt-14 lg:pl-8 pl-0 lg:my-6 my-4">
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
