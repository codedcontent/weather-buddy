import React from "react";
import { IoAddOutline } from "react-icons/io5";
import NewWeatherAlert from "./newWeatherAlert/NewWeatherAlert";

const WeatherAlerts = () => {
  const weatherAlerts = [
    {
      id: 1,
      location: "Indianapolis",
      times: ["4pm", "5pm"],
    },
  ];

  return (
    <div className="space-y-4">
      {weatherAlerts.map((weatherAlert) => (
        <NewWeatherAlert key={weatherAlert.id} {...weatherAlert} />
      ))}

      <button className="flex gap-0.5 items-center border-b w-max cursor-pointer">
        <p className="text-sm font-light">Add new location</p>

        <IoAddOutline className="text-lg" />
      </button>
    </div>
  );
};

export default WeatherAlerts;
