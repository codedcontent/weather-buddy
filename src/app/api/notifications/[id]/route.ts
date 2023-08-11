import { NextResponse } from "next/server";
import connectDB from "@/utils/db";
import User from "@/models/User";
import httpStatusCodes from "@/constants/httpStatusCodes";
import { NotificationsType } from "@/types/types";

type Params = {
  params: {
    id: string;
  };
};

export const GET = async (request: Request, { params }: Params) => {
  const { id } = params;

  try {
    await connectDB();

    // Find user with the id
    const foundUser = await User.findById(id);

    if (!foundUser) {
      return new NextResponse(
        JSON.stringify({
          msg: "No such user exist.",
        }),
        { status: httpStatusCodes.FORBIDDEN }
      );
    }

    return new NextResponse(
      JSON.stringify({
        msg: "Request successful",
        notifications: foundUser.notificationSettings,
      }),
      { status: httpStatusCodes.OK }
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({
        msg: "An error occurred",
        error,
      }),
      { status: httpStatusCodes.INTERNAL_SERVER_ERROR }
    );
  }
};

export const PATCH = async (request: Request, { params }: Params) => {
  const { id } = params;

  try {
    await connectDB();

    // Get the notification updates
    const data = await request.json();

    const userNotifications: NotificationsType = data.notifications;

    // Find the user being updated
    const foundUser = await User.findById(id);

    if (!foundUser) {
      return new NextResponse(JSON.stringify({ msg: "No such user found" }), {
        status: httpStatusCodes.FORBIDDEN,
      });
    }

    console.log(userNotifications);

    // Update the users notification preferences
    if (userNotifications.email)
      foundUser.notificationSettings.email.enabled = userNotifications.email;
    if (userNotifications.pushNotifications)
      foundUser.notificationSettings.pushNotifications.enabled =
        userNotifications.pushNotifications;
    if (userNotifications.sms)
      foundUser.notificationSettings.sms.enabled = userNotifications.sms;
    if (userNotifications.whatsApp)
      foundUser.notificationSettings.whatsApp.enabled =
        userNotifications.whatsApp;

    // Save the changes to the user
    await foundUser.save();

    return new NextResponse(
      JSON.stringify({ msg: "Preferences updated successfully" }),
      {
        status: httpStatusCodes.OK,
      }
    );
  } catch (error) {
    throw new Error(`An error occurred: => ${error}`);
  }
};
