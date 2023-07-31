import React from "react";
import WeatherAlertLocation from "./WeatherAlertLocation";
import WeatherAlertTimes from "./WeatherAlertTimes";

type WeatherAlertProps = {
  id: string | number;
  location: string;
  times: string[];
};

const NewWeatherAlert = ({ location, times, id }: WeatherAlertProps) => {
  return (
    <div className="flex gap-2">
      <WeatherAlertLocation location={location} />
      <WeatherAlertTimes times={times} />
    </div>
  );
};

export default NewWeatherAlert;
