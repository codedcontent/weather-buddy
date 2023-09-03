import appConstants from "@/constants/appConstants";
import User from "@/models/User";
import { sendMail } from "@/services/mailService";
import { TLocation } from "@/types/types";
import connectDB from "@/utils/db";
import axios from "axios";
import { NextResponse } from "next/server";

type EmailList = {
  firstName: string;
  lastName: string;
  email: string;
  weatherLocations?: [];
  alerts: Record<string, any>[];
}[];

const getUserWith5amWeatherAlerts = async () => {
  await connectDB();

  try {
    const foundUsers = await User.find({
      "weatherLocations.times": "5:00 AM",
    });

    return foundUsers;
  } catch (error) {
    console.log(error);
    return [];
  }
};

const getUserWeatherPrediction = async (weatherInfo: TLocation) => {
  const {
    coord: { lat, long },
  } = weatherInfo;

  const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_MAP_API_KEY;

  const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;

  try {
    const openWeatherResp = await axios.get(apiURL);

    return openWeatherResp.data;
  } catch (error: any) {
    console.log(error);
    return false;
  }
};

const generateEmailListInfo = async (users: any[]) => {
  const emailList: EmailList = [];

  // Generate an email list with the necessary email-list info for sending alerts and recommendations.

  for (const user of users) {
    // Get only the locations whose alerts are for 5:00 AM
    const weatherLocations: TLocation[] = user.weatherLocations
      .filter((location: Record<string, string>) =>
        location.times.includes("5:00 AM")
      )
      .map((item: { location: TLocation }) => item.location);

    // All the alerts for a single user to be added to the emails list
    const alerts = [];

    // Generate the weather alerts
    for (const location of weatherLocations) {
      const alertResp = await getUserWeatherPrediction(location);

      const singleAlert = {
        weather: alertResp.weather[0],
        temperature: alertResp.main,
        location: location.title,
      };

      alerts.push(singleAlert);
    }

    emailList.push({
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      alerts,
      //   weatherLocations,
    });
  }

  return emailList;
};

export const GET = async () => {
  const usersWith5AMAlerts = await getUserWith5amWeatherAlerts();

  const emailList = await generateEmailListInfo(usersWith5AMAlerts);

  try {
    // Send out emails
    for (const emailInfo of emailList) {
      const { email, firstName, alerts } = emailInfo;

      // Convert the alerts to HTML
      const alertsToHtml = alerts
        .map((alert) => {
          return `
            <li>
            <p><strong>For ${alert.location}</strong>:</p>
            <p>There will be ${alert.weather.description} and it will ${alert.temperature.temp}℃ today.</p>
            </li>
          `;
        })
        .join("");

      // Sending the emails
      const mailsRep = await sendMail({
        toEmail: email,
        subject: "5AM Alerts from Weather Buddy",
        message: `
            <html>
                <body>
                    <p>Hey ${firstName}, here are you 5AM weather alerts</p>
                    <ol>
                    ${alertsToHtml}
                    </ol>
                    <p>Want to receive recommendations based on the weather that is personalized to you needs? You can do that <a href="${appConstants.appURL}#pricing">here</a></p>
                </body>
            </html>
          `,
      });

      // Checking for an error and doing a clean up
      if (!mailsRep?.status) {
        // TODO: Do some cleanup here
      }
    }

    return new NextResponse(
      JSON.stringify({
        status: true,
        msg: "Cron Job completed",
      })
    );
  } catch (error: any) {
    console.log(error.message);

    return new NextResponse(
      JSON.stringify({
        status: false,
        msg: error.message,
      })
    );
  }
};
