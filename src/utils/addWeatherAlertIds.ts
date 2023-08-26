import { TLocation, TWeatherAlertTimes, TWeatherAlerts } from "@/types/types";
import { v4 as uuidV4 } from "uuid";

const addWeatherAlertIds = (
  weatherAlerts: {
    _id: any;
    location: TLocation;
    times: TWeatherAlertTimes[];
  }[]
): TWeatherAlerts => {
  const transformedWeatherAlerts: TWeatherAlerts = weatherAlerts.map(
    (alert) => ({
      weatherAlertId: uuidV4(),
      location: alert.location,
      times: alert.times,
    })
  );

  return transformedWeatherAlerts;
};

export default addWeatherAlertIds;
