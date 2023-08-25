import { IoAddOutline } from "react-icons/io5";
import NewWeatherAlert from "./newWeatherAlert/NewWeatherAlert";
import { useAppDispatch, useAppSelector } from "@/hooks/redux-hooks";
import {
  addNewWeatherAlert,
  selectAllWeatherAlerts,
} from "@/slices/weatherAlertsSlice";

const WeatherAlerts = () => {
  const weatherAlerts = useAppSelector(selectAllWeatherAlerts);
  const dispatch = useAppDispatch();

  const handleAddNewWeatherAlert = () => {
    dispatch(addNewWeatherAlert());
  };

  return (
    <div className="space-y-4">
      {weatherAlerts.map((weatherAlert) => {
        return <NewWeatherAlert key={weatherAlert.id} {...weatherAlert} />;
      })}

      <button
        className="flex gap-0.5 items-center border-b w-max cursor-pointer"
        onClick={handleAddNewWeatherAlert}
      >
        <p className="text-sm font-light">Add new location</p>

        <IoAddOutline className="text-lg" />
      </button>
    </div>
  );
};

export default WeatherAlerts;
