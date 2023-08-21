import { TLocation, TWeatherAlertTimes, TWeatherAlerts } from "@/types/types";

const getValidWeatherAlerts = (weatherAlerts: TWeatherAlerts) => {
  // Empty list of weather alerts
  const validAlerts: {
    location: TLocation;
    times: string[];
  }[] = [];

  weatherAlerts.forEach((weatherAlert) => {
    if (weatherAlert.location.title) {
      // Add alert to list
      validAlerts.push({
        location: weatherAlert.location,
        times: weatherAlert.times,
      });
    }
  });

  return validAlerts;
};

export default getValidWeatherAlerts;
