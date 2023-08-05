"use client";

import React from "react";
import CustomButton from "@/components/CustomButton";
import WeatherAlerts from "@/components/weatherAlerts/WeatherAlerts";

const WeatherAlertsPage = () => {
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
        <WeatherAlerts />
      </div>

      {/* <-- --> */}
      <div className="pl-8 mt-14 mb-6">
        <hr className="border-silver" />
      </div>

      {/* Save/Discard buttons */}
      <div className="flex w-full gap-4 px-8">
        <CustomButton
          label="Discard Changes"
          onClick={() => {}}
          variant="outlined"
        />

        <CustomButton
          label="Save Changes"
          onClick={() => {}}
          variant="filled"
        />
      </div>
    </div>
  );
};

export default WeatherAlertsPage;
