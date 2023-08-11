import { NotificationsType } from "@/types/types";

const mapUserNotifications = (data: NotificationsType) => {
  const userNotification: any = {};

  const entries = Object.entries(data);

  entries.forEach(([notificationType, notificationValue]) => {
    if (notificationType === "email") {
      userNotification["email"] = notificationValue.enabled;
    }
    if (notificationType === "sms") {
      userNotification["sms"] = notificationValue.enabled ?? false;
    }
    if (notificationType === "whatsApp") {
      userNotification["whatsApp"] = notificationValue.enabled ?? false;
    }
    if (notificationType === "email") {
      userNotification["email"] = notificationValue.enabled ?? false;
    }
    if (notificationType === "pushNotifications") {
      userNotification["pushNotifications"] =
        notificationValue.enabled ?? false;
    }
  });

  return userNotification;
};

export default mapUserNotifications;
