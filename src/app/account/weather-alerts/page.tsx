"use client";

import React, { useEffect, useState } from "react";
import CustomButton from "@/components/CustomButton";
import WeatherAlerts from "@/components/weatherAlerts/WeatherAlerts";
import { TWeatherAlert } from "@/types/types";
import { enqueueSnackbar } from "notistack";
import { useAppDispatch, useAppSelector } from "@/hooks/redux-hooks";
import {
  getWeatherAlertsError,
  getWeatherAlertsStatus,
  resetWeatherAlerts,
  selectAllWeatherAlerts,
} from "@/slices/weatherAlertsSlice";
import Loader from "@/components/Loader";
import { selectAuth } from "@/slices/authSlice";
import axios from "axios";

const WeatherAlertsPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const weatherAlerts = useAppSelector(selectAllWeatherAlerts);
  const weatherAlertsStatus = useAppSelector(getWeatherAlertsStatus);
  const weatherAlertsError = useAppSelector(getWeatherAlertsError);
  const auth = useAppSelector(selectAuth);

  const [initialAlerts_TEMP, setInitialAlerts_TEMP] = useState<
    TWeatherAlert[] | null
  >(null);

  const saveChanges = async () => {
    setIsLoading(true);

    // Update the users weather alerts
    const WEATHER_ALERTS_URL = "/api/alerts";

    const url = `${WEATHER_ALERTS_URL}/${auth.id}`;

    try {
      const resp = await axios.post(url, weatherAlerts);

      if (resp.data) {
        enqueueSnackbar("Weather alerts updated", { variant: "success" });
      } else {
        console.log(resp);
      }
    } catch (error: any) {
      enqueueSnackbar(error.message, { variant: "success" });
    } finally {
      setIsLoading(false);
    }

    // dispatch(
    //   saveWeatherAlertChanges({
    //     userId: auth.id,
    //     weatherAlerts,
    //   })
    // );
  };

  // Reset the users changes
  const discardChanges = () => {
    // Check if changes have been made
    if (initialAlerts_TEMP) {
      // Reset the state
      dispatch(resetWeatherAlerts(initialAlerts_TEMP));

      // Clear the users initially loaded temporary alerts
      // setInitialAlerts_TEMP(null);
    }
  };

  // Temporarily store the users weather alerts
  useEffect(() => {
    const setInitialUserWeatherAlerts = () => {
      const userAlerts = Array.from(weatherAlerts);

      setInitialAlerts_TEMP(userAlerts);
    };

    if (weatherAlertsStatus === "success") {
      setInitialUserWeatherAlerts();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [weatherAlertsStatus]);

  // Check weather alerts status
  useEffect(() => {
    if (weatherAlertsStatus === "failed") {
      enqueueSnackbar(weatherAlertsError, { variant: "error" });
    }
  }, [weatherAlertsError, weatherAlertsStatus]);

  return (
    <div className="w-full h-full overflow-y-auto pb-2">
      {/* Page title */}
      <p className="text-xl font-semibold capitalize px-8">Weather Alerts</p>

      {/* <-- Border --> */}
      <div className="pl-8 my-6">
        <hr className="border-silver" />
      </div>

      {/* Page description */}
      <div className="px-8">
        <p className="font-semibold">Weather locations</p>
        <p className="font-light text-sm">
          Choose the locations you want to receive alerts on - and the times you
          want to receive them
        </p>
      </div>

      {/* Updatable weather locations and alert times */}
      <div className="px-8 mt-6">
        {weatherAlertsStatus === "loading" ? (
          <Loader variant="action" />
        ) : (
          <WeatherAlerts />
        )}
      </div>

      {/* <-- --> */}
      <div className="pl-8 mt-14 mb-6">
        <hr className="border-silver" />
      </div>

      {/* Save/Discard buttons */}
      <div className="flex w-full gap-4 px-8">
        <CustomButton
          label="Discard Changes"
          onClick={discardChanges}
          variant="outlined"
          loading={isLoading}
        />

        <CustomButton
          label="Save Changes"
          onClick={saveChanges}
          variant="filled"
          loading={isLoading}
        />
      </div>
    </div>
  );
};

export default WeatherAlertsPage;
