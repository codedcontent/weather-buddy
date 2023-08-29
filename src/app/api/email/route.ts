import { sendMail } from "@/services/mailService";
import { NextResponse } from "next/server";
// import { NextRequest, NextResponse } from "next/server";

const handler = async (req: Request, res: Response) => {
  try {
    const { method } = req;
    switch (method) {
      case "POST": {
        //Do some thing
        await sendMail(
          "TEST",
          "dontkillme@bunnyfiedlabs.com",
          "THI IS A TEST FOR MY MEDIUM USERS"
        );
        // res.status(200).send("Success");
        break;
      }
      case "GET": {
        //Do some thing
        // res.status(200).send(req.auth_data);
        break;
      }
      default:
        // res.setHeader("Allow", ["POST", "GET", "PUT", "DELETE"]);
        // res.status(405).end(`Method ${method} Not Allowed`);
        break;
    }
  } catch (err: any) {
    // res.status(400).json({
    //   error_code: "api_one",
    //   message: err.message,
    // });
  }
};

// export default handler;

export const POST = async (req: Request) => {
  const data = await req.json();

  console.log(data);

  return new NextResponse(JSON.stringify({ status: true, msg: "", data }));
};
