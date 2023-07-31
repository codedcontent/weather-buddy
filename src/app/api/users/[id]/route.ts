import User from "@/models/User";
import connectDB from "@/utils/db";
import { NextResponse } from "next/server";

type ParamsProps = {
  params: {
    id: string;
  };
};

// Get the user details
export const GET = async (request: Request, { params }: ParamsProps) => {
  // Get the user id from request
  //   const { id } = await request.json();
  const { id } = params;

  await connectDB();

  try {
    const user = await User.findById({ _id: id });

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    throw new Error(`Error doing that --- ${error}`);
  }
};
