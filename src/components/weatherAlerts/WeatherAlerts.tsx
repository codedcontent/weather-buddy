import React from "react";
import { IoAddOutline } from "react-icons/io5";
import NewWeatherAlert from "./newWeatherAlert/NewWeatherAlert";
import { TWeatherAlerts } from "@/types/types";
import { useAppSelector } from "@/hooks/redux-hooks";

type Alerts = {
  weatherAlerts: TWeatherAlerts;
};

const WeatherAlerts = () => {
  const weatherAlerts = useAppSelector((state) => state.weatherAlerts);

  const addNewWeatherAlert = () => {
    // const newWeatherAlert: TSingleWeatherAlert = {
    //   times: ["5:00 AM"],
    //   weatherAlertId: uuidV4(),
    //   location: {
    //     coord: { lat: 0, long: 0 },
    //     title: "",
    //   },
    // };
    // dispatch({
    //   type: "UPDATE_WEATHER_ALERTS",
    //   payload: {
    //     weatherAlerts: [...user.weatherAlerts, newWeatherAlert],
    //   },
    // });
  };

  return (
    <div className="space-y-4">
      {weatherAlerts.map((weatherAlert) => {
        return <NewWeatherAlert key={weatherAlert.id} {...weatherAlert} />;
      })}

      <button
        className="flex gap-0.5 items-center border-b w-max cursor-pointer"
        onClick={addNewWeatherAlert}
      >
        <p className="text-sm font-light">Add new location</p>

        <IoAddOutline className="text-lg" />
      </button>
    </div>
  );
};

export default WeatherAlerts;
