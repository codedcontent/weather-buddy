import { IoAddOutline } from "react-icons/io5";
import NewWeatherAlert from "./newWeatherAlert/NewWeatherAlert";
import { useAppDispatch, useAppSelector } from "@/hooks/redux-hooks";
import {
  addNewWeatherAlert,
  selectAllWeatherAlerts,
} from "@/slices/weatherAlertsSlice";
import { selectSubscription } from "@/slices/subscriptionSlices";
import { enqueueSnackbar } from "notistack";

const WeatherAlerts = () => {
  const dispatch = useAppDispatch();

  const weatherAlerts = useAppSelector(selectAllWeatherAlerts);
  const subscriptionInfo = useAppSelector(selectSubscription);

  const handleAddNewWeatherAlert = () => {
    if (weatherAlerts.length < 1) {
      dispatch(addNewWeatherAlert());
    } else {
      enqueueSnackbar("Too track more locations, upgrade to a pro plan", {
        variant: "warning",
      });
    }
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
