"use client";

import React, { useContext, useEffect, useState } from "react";
import CustomButton from "@/components/CustomButton";
import WeatherAlerts from "@/components/weatherAlerts/WeatherAlerts";
import { WeatherAlertsContext } from "@/context/WeatherAlertsProvider";
import { useSession } from "next-auth/react";
import { WeatherAlertsProps } from "@/types/types";

const WeatherAlertsPage = () => {
  const { state, dispatch } = useContext(WeatherAlertsContext);
  const [isLoading, setIsLoading] = useState(false);
  const [initialAlerts_TEMP, setInitialAlerts_TEMP] =
    useState<WeatherAlertsProps | null>(null);

  const session = useSession();

  const saveChanges = async () => {
    setIsLoading(true);

    // @ts-ignore
    const saveResp = await fetch(`/api/alerts/${session.data?.id}`, {
      method: "PUT",
      body: JSON.stringify(state),
    });

    const data = await saveResp.json();

    // TODO: Add Toast Notification here
    console.log(data);

    setIsLoading(false);
  };

  // Reset the users changes
  const discardChanges = () => {
    // Ensure changes have been made
    if (initialAlerts_TEMP) {
      // Reset the state
      dispatch({
        type: "SET_ALERTS",
        payload: {
          weatherAlerts: initialAlerts_TEMP,
        },
      });

      // Clear the users initially loaded temporary alerts
      setInitialAlerts_TEMP(null);
    }
  };

  // Set the users locations
  useEffect(() => {
    // @ts-ignore
    const userId = session?.data.id;

    // Get the users weather alerts
    const getWeatherAlerts = async (): Promise<WeatherAlertsProps> => {
      const url = `/api/alerts/${userId}`;

      try {
        const resp = await fetch(url, { method: "GET" });

        const data: WeatherAlertsProps = await resp.json();

        return data;
      } catch (error) {
        throw new Error("An error occurred => ${error");
      }
    };

    // Set the users fetched weather alerts
    const setUserWeatherAlerts = async () => {
      const userAlerts = await getWeatherAlerts();

      // Store the users initially loaded alerts temporarily
      setInitialAlerts_TEMP(await getWeatherAlerts());

      // Set the users alerts
      dispatch({
        type: "SET_ALERTS",
        payload: {
          weatherAlerts: userAlerts,
        },
      });
    };

    setUserWeatherAlerts();
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
        <WeatherAlerts weatherAlerts={state} />
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
