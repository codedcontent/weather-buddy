import connectDB from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
  await connectDB();

  return new NextResponse("OP. Completed.", { status: 200 });

  // return new NextResponse(JSON.stringify(schemaPaths), { status: 200 });
};
