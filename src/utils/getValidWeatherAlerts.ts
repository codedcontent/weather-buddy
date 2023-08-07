import { Location, WeatherAlertTimes, WeatherAlertsProps } from "@/types/types";

const getValidWeatherAlerts = (weatherAlerts: WeatherAlertsProps) => {
  // Empty list of weather alerts
  const validAlerts: {
    location: Location;
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