import React, { useContext } from "react";
import { IoAddOutline } from "react-icons/io5";
import NewWeatherAlert from "./newWeatherAlert/NewWeatherAlert";
import { WeatherAlertsContext } from "@/context/WeatherAlertsProvider";
import { WeatherAlertsProps } from "@/types/types";

type Alerts = {
  weatherAlerts: WeatherAlertsProps;
};

const WeatherAlerts = ({ weatherAlerts }: Alerts) => {
  const { dispatch } = useContext(WeatherAlertsContext);

  const addNewWeatherLocation = () => {
    dispatch({
      type: "ADD_NEW_LOCATION",
    });
  };

  return (
    <div className="space-y-4">
      {weatherAlerts.map((weatherAlert) => {
        return (
          <NewWeatherAlert
            key={weatherAlert.weatherAlertId}
            {...weatherAlert}
          />
        );
      })}

      <button
        className="flex gap-0.5 items-center border-b w-max cursor-pointer"
        onClick={addNewWeatherLocation}
      >
        <p className="text-sm font-light">Add new location</p>

        <IoAddOutline className="text-lg" />
      </button>
    </div>
  );
};

export default WeatherAlerts;
