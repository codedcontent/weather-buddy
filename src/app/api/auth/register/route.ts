import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import User from "@/models/User";
import connectDB from "@/utils/db";
import { sendMail } from "@/services/mailService";
import appConstants from "@/constants/appConstants";

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

    // Email Saved successfully
    if (resp) {
      // Send the user a welcome email
      const welcomeEmailResp = await sendMail({
        toEmail: email,
        subject: "Welcome to Weather Buddy",
        message: `
          <!DOCTYPE html>
          <html>
          <head>
              <title>Welcome ${firstName} ${lastName}!</title>
          </head>
          <body>
              <h2>Welcome to Weather Buddy</h2>

              <p>Happy to have you with us ${firstName}, we are excited to help keep you informed and stay 1-step ahead of mother natures surprises.</p>

              <p>You can set up your weather alerts <a href="${appConstants.appURL}/account">here</a>.</p>

              <p>If you have questions, leave us a message, we're here to help.</p>

              <p>Best regards,</p>
              <p>The Weather Buddy Team 🌤️</p>
          </body>
          </html>
        `,
      });

      // Welcome email sent successfully.
      if (welcomeEmailResp) {
        return new NextResponse("User created successfully.", {
          status: 200,
        });
      } else {
        // TODO: ADD USER TO A LIST TO BE WELCOMED LATER
      }
    }
  } catch (error) {
    console.log(error);
    return new NextResponse("Could not register new user, try again later", {
      status: 500,
    });
  }
};
