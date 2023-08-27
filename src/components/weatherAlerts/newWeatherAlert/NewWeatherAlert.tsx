import React from "react";
import WeatherAlertLocationPicker from "./location/WeatherAlertLocation";
import WeatherAlertTimesPicker from "./time/WeatherAlertTimes";
import { TWeatherAlert } from "@/types/types";

const NewWeatherAlert = ({ location, times, id }: TWeatherAlert) => {
  return (
    <div className="flex lg:flex-row flex-col lg:gap-4">
      <WeatherAlertLocationPicker location={location} id={id} />
      <WeatherAlertTimesPicker times={times} id={id} />
    </div>
  );
};

export default NewWeatherAlert;
