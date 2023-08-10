import { NextResponse } from "next/server";
import connectDB from "@/utils/db";
import User from "@/models/User";
import httpStatusCodes from "@/constants/httpStatusCodes";

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
        { status: httpStatusCodes.NOT_FOUND }
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
