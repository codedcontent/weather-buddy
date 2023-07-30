import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import User from "@/models/User";
import connectDB from "@/utils/db";

export const POST = async (request: Request) => {
  await connectDB();

  // Get user registration details
  const { firstName, lastName, email, phoneNumber, password } =
    await request.json();

  // Check if the new users email already exist on db
  const foundUser = await User.findOne({ email });

  if (foundUser) {
    return new NextResponse(
      "A user with this email already exist, if this is you, login instead",
      {
        status: 200,
      }
    );
  }

  // Encrypt users password
  const hashedPassword = bcrypt.hashSync(password, 10);

  const newUser = new User({
    firstName,
    lastName,
    email,
    phoneNumber,
    password: hashedPassword,
  });

  try {
    // Save new user to db
    const resp = await newUser.save();

    return new NextResponse("User created successfully.", {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new NextResponse("Could not register new user, try again later", {
      status: 500,
    });
  }
};
