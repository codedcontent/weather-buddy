import React from "react";
import WeatherAlertLocationPicker from "./location/WeatherAlertLocation";
import WeatherAlertTimesPicker from "./time/WeatherAlertTimes";

type WeatherAlertProps = {
  id: number;
  location: string;
  times: string[];
};

const NewWeatherAlert = ({ location, times, id }: WeatherAlertProps) => {
  return (
    <div className="flex gap-4">
      <WeatherAlertLocationPicker location={location} id={id} />
      <WeatherAlertTimesPicker times={times} id={id} />
    </div>
  );
};

export default NewWeatherAlert;
