import User from "@/models/User";
import { TLocation, TWeatherAlert, TWeatherAlertTimes } from "@/types/types";
import addWeatherAlertIds from "@/utils/addWeatherAlertIds";
import connectDB from "@/utils/db";
import getValidWeatherAlerts from "@/utils/getValidWeatherAlerts";
import { nanoid } from "@reduxjs/toolkit";
import { NextResponse } from "next/server";

type ParamsProps = {
  params: {
    id: string;
  };
};

export const GET = async (request: Request, { params }: ParamsProps) => {
  const { id } = params;

  try {
    await connectDB();

    const foundUser = await User.findById(id);

    if (!foundUser) {
      return new NextResponse(
        JSON.stringify({
          msg: "No such user exist.",
        }),
        { status: 500 }
      );
    }

    const weatherAlerts: TWeatherAlert = foundUser.weatherLocations.map(
      (alert: {
        location: TLocation;
        times: TWeatherAlertTimes;
        id: string;
      }) => ({
        id: alert.id ?? nanoid(),
        location: alert.location,
        times: alert.times,
      })
    );

    // Send back the users weather alerts
    return new NextResponse(JSON.stringify(weatherAlerts), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({
        msg: "Something went wrong",
        error,
      }),
      { status: 500 }
    );
  }
};

export const PUT = async (request: Request, { params }: ParamsProps) => {
  // Get the id of the user
  const { id } = params;

  // Get the users alerts to update
  const weatherAlerts = await request.json();

  // Get the valid alerts only
  const validAlerts = getValidWeatherAlerts(weatherAlerts);

  try {
    await connectDB();

    // Find the user with the id
    const foundUser = await User.findById(id);

    if (!foundUser) {
      return new NextResponse(`Cannot find user with id: ${id}`, {
        status: 400,
      });
    }

    // Update the users weather alert
    foundUser.weatherLocations = validAlerts;

    // Save the updated user details
    const resp = await foundUser.save();

    return new NextResponse(
      JSON.stringify({
        msg: "Update successful",
      }),
      { status: 200 }
    );
  } catch (error) {
    throw new Error(`An error occurred => ${error}`);
  }
};
