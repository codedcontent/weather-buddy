import React from "react";
import WeatherAlertLocationPicker from "./location/WeatherAlertLocation";
import WeatherAlertTimesPicker from "./time/WeatherAlertTimes";
import { Location } from "@/types/types";

type WeatherAlertProps = {
  weatherAlertId: string;
  location: Location;
  times: string[];
};

const NewWeatherAlert = ({
  location,
  times,
  weatherAlertId,
}: WeatherAlertProps) => {
  return (
    <div className="flex gap-4">
      <WeatherAlertLocationPicker location={location} id={weatherAlertId} />
      <WeatherAlertTimesPicker times={times} id={weatherAlertId} />
    </div>
  );
};

export default NewWeatherAlert;
