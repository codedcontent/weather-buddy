import React, { useContext } from "react";
import { IoAddOutline } from "react-icons/io5";
import NewWeatherAlert from "./newWeatherAlert/NewWeatherAlert";
import { WeatherAlertsContext } from "@/context/WeatherAlertsProvider";

const WeatherAlerts = () => {
  const { state, dispatch } = useContext(WeatherAlertsContext);

  const addNewWeatherLocation = () => {
    dispatch({
      type: "ADD_NEW_LOCATION",
      payload: {
        id: state.length + 1,
      },
    });
  };

  return (
    <div className="space-y-4">
      {state.map((weatherAlert) => (
        <NewWeatherAlert key={weatherAlert.id} {...weatherAlert} />
      ))}

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
