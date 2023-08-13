"use client";

import React, { useContext, useEffect, useState } from "react";
import CustomButton from "@/components/CustomButton";
import WeatherAlerts from "@/components/weatherAlerts/WeatherAlerts";
import { TWeatherAlerts } from "@/types/types";
import { UserContext } from "@/context/UserProvider";
import ErrorOutError from "@/utils/errorOutError";

const WeatherAlertsPage = () => {
  const {
    user: { weatherAlerts, id },
    dispatch,
  } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [initialAlerts_TEMP, setInitialAlerts_TEMP] =
    useState<TWeatherAlerts | null>(null);

  const saveChanges = async () => {
    setIsLoading(true);

    // Update the users weather alerts
    try {
      // @ts-ignore
      await fetch(`/api/users/${id}`, {
        method: "PATCH",
        body: JSON.stringify({ weatherAlerts }),
      });
    } catch (error) {
      ErrorOutError(error);
    } finally {
      setIsLoading(false);
    }
  };

  // Reset the users changes
  const discardChanges = () => {
    // Ensure changes have been made
    if (initialAlerts_TEMP) {
      // Reset the state
      dispatch({
        type: "UPDATE_WEATHER_ALERTS",
        payload: {
          weatherAlerts: initialAlerts_TEMP,
        },
      });

      // Clear the users initially loaded temporary alerts
      setInitialAlerts_TEMP(null);
    }
  };

  // Set the users weather alerts
  useEffect(() => {
    // Set the users fetched weather alerts
    const setInitialUserWeatherAlerts = async () => {
      const userAlerts = weatherAlerts;

      // Store the users initially loaded alerts temporarily in order to discard changes if necessary
      setInitialAlerts_TEMP(userAlerts);
    };

    setInitialUserWeatherAlerts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        <WeatherAlerts weatherAlerts={weatherAlerts} />
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
