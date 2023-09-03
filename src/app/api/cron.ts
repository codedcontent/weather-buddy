import { NextResponse } from "next/server";

export default function handler(req: Request) {
  console.log("Cron Call");
  //   res.status(200).end("Hello Cron!");
  return NextResponse.json(JSON.stringify({ msg: "Hey" }), {
    status: 200,
  });
}
