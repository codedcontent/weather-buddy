import connectDB from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
  try {
    await connectDB();
  } catch (err) {
    console.log(err);
  }

  return new NextResponse("DB connected", { status: 200 });
};
