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
  // Get the user id
  const { id } = params;

  await connectDB();

  try {
    const user = await User.findById(id);

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    throw new Error(`Error doing that --- ${error}`);
  }
};

// Update users details
export const PATCH = async (request: Request, { params }: ParamsProps) => {
  // Get the user id
  const { id } = params;

  // Destructure account details to update
  const { firstName, lastName, phoneNumber } = await request.json();

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

    // Update the necessary user properties
    if (firstName) foundUser.firstName = firstName;
    if (lastName) foundUser.lastName = lastName;
    if (phoneNumber) foundUser.phoneNumber = phoneNumber;

    // Save the updated user details
    const resp = await foundUser.save();

    return new NextResponse("Update successful", { status: 200 });
  } catch (error) {
    return new NextResponse(`An error occurred ${error}`, { status: 500 });
  }
};
