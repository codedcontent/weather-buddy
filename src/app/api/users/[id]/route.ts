import User from "@/models/User";
import {
  TNotifications,
  TAccountDetails,
  TSubscriptionDetails,
  TWeatherAlerts,
  TLocation,
  TWeatherAlertTimes,
} from "@/types/types";
import connectDB from "@/utils/db";
import { NextResponse } from "next/server";
import { v4 as uuidV4 } from "uuid";

type ParamsProps = {
  params: {
    id: string;
  };
};

// Get the user details
export const GET = async (request: Request, { params }: ParamsProps) => {
  // Get the user id
  const { id } = params;

  await connectDB();

  try {
    const user = await User.findById(id);

    const mappedWeatherAlerts: TWeatherAlerts = user.weatherLocations.map(
      (alert: {
        location: TLocation;
        times: TWeatherAlertTimes;
        weatherAlertId: string;
      }) => ({
        weatherAlertId: alert.weatherAlertId ?? uuidV4(),
        location: alert.location,
        times: alert.times,
      })
    );

    const userData = {
      accountDetails: {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phoneNumber: user.phoneNumber,
      },
      weatherAlerts: mappedWeatherAlerts,
      notifications: user.notificationSettings,
      subscriptionDetails: {
        plan: user.subscriptionPlan,
        expDate: user.subscriptionExpiryDate,
      },
    };

    return NextResponse.json(userData, { status: 200 });
  } catch (error) {
    throw new Error(`Error doing that --- ${error}`);
  }
};

// Update users details
export const PATCH = async (request: Request, { params }: ParamsProps) => {
  // Get the user id
  const { id } = params;

  // Destructure account details to update
  // const { firstName, lastName, phoneNumber } = await request.json();

  const data: {
    accountDetails?: TAccountDetails;
    weatherAlerts?: TWeatherAlerts;
    notifications?: TNotifications;
    subscriptionDetails?: TSubscriptionDetails;
  } = await request.json();

  console.log(data);

  // Connect to DB
  await connectDB();

  try {
    // Find the user with the id
    const foundUser = await User.findById(id);

    if (!foundUser) {
      return new NextResponse(`Cannot find user with id: ${id}`, {
        status: 400,
      });
    }

    // Update account details
    if (data.accountDetails) {
      const accountDetails = data.accountDetails;
      foundUser.firstName = accountDetails.firstName;
      foundUser.lastName = accountDetails.lastName;
      foundUser.email = accountDetails.email;
      foundUser.phoneNumber = accountDetails.phoneNumber;
    }
    // Update notification preferences
    if (data.notifications) {
      const notifications = data.notifications;
      foundUser.email.enabled = notifications.email.enabled;
      foundUser.sms.enabled = notifications.sms.enabled;
      foundUser.pushNotifications.enabled =
        notifications.pushNotifications.enabled;
      foundUser.whatsApp.enabled = notifications.whatsApp.enabled;
    }
    // Update subscription details
    if (data.subscriptionDetails) {
      const subDetails = data.subscriptionDetails;
      foundUser.subscriptionPlan = subDetails.plan;
      // TODO: DO some calculations to determine the expiry date of a sub plan
    }
    // Update weather alerts
    if (data.weatherAlerts) {
      const weatherAlerts = data.weatherAlerts;
      foundUser.weatherLocations = weatherAlerts;
    }

    // Save the updated user details
    const resp = await foundUser.save();

    return new NextResponse("Update successful", { status: 200 });
  } catch (error) {
    return new NextResponse(`An error occurred ${error}`, { status: 500 });
  }
};
