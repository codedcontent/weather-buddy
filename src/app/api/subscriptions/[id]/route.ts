import { NextResponse } from "next/server";
import connectDB from "@/utils/db";
import User from "@/models/User";
import httpStatusCodes from "@/constants/httpStatusCodes";
import { TSubscriptionPlans } from "@/types/types";

type Params = {
  params: {
    id: string;
  };
};

export const PATCH = async (request: Request, { params }: Params) => {
  const { id } = params;

  try {
    await connectDB();

    // Get the notification updates
    const newSubPlan = await request.json();

    console.log(newSubPlan);

    // Find the user being updated
    const foundUser = await User.findById(id);

    if (!foundUser) {
      return new NextResponse(JSON.stringify({ msg: "No such user found" }), {
        status: httpStatusCodes.FORBIDDEN,
      });
    }

    // Save the changes to the user
    // await foundUser.save();

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
