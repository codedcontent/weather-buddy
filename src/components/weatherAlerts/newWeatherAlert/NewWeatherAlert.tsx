import React from "react";
import WeatherAlertLocation from "./WeatherAlertLocation";
import WeatherAlertTimes from "./WeatherAlertTimes";

type WeatherAlertProps = {
  id: number;
  location: string;
  times: string[];
};

const NewWeatherAlert = ({ location, times, id }: WeatherAlertProps) => {
  return (
    <div className="flex gap-4">
      <WeatherAlertLocation location={location} id={id} />
      <WeatherAlertTimes times={times} id={id} />
    </div>
  );
};

export default NewWeatherAlert;
