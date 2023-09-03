import { sendMail } from "@/services/mailService";
import httpStatusCodes from "@/constants/httpStatusCodes";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const data = await req.json();

  if (!data.toEmail || !data.message || !data.subject) {
    return new NextResponse(
      JSON.stringify({
        status: false,
        msg: "Required data is missing",
      }),
      {
        status: httpStatusCodes.BAD_REQUEST,
      }
    );
  }

  const { toEmail, message, subject } = data;

  const sendEmailResp = await sendMail({
    subject,
    toEmail,
    message,
  });

  console.log(sendEmailResp);

  // if (sendEmailResp)
  return new NextResponse(JSON.stringify({ status: true, msg: "EMAIL SENT!" }));
};

export const GET = async (req: Request) => {
  console.log("GET FOR EMAIL ROUTE");

  return new NextResponse(JSON.stringify({ msg: "GET SEKAI" }));
};
