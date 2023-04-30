"use client";

import Button from "@/components/Button";
import WeatherLocationAlertSetter from "@/components/weatherLocationAlertSetter/WeatherLocationAlertSetter";
import React from "react";

type Props = {};

const WeatherAlerts: React.FC<Props> = (props: Props) => {
  const saveChanges = () => {};

  const discardChanges = () => {};

  return (
    <div className="w-full">
      {/* Page title */}
      <p className="text-xl font-semibold capitalize px-8">Weather Alerts</p>

      {/* <-- --> */}
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
        <WeatherLocationAlertSetter />
      </div>

      {/* <-- --> */}
      <div className="pl-8 mt-10 mb-6">
        <hr className="border-silver" />
      </div>

      {/* Save/Discard buttons */}
      <div className="flex w-full gap-4 px-8">
        <Button
          title="Discard Changes"
          onClick={discardChanges}
          filled={false}
          width="full"
        />

        <Button title="Save Changes" onClick={saveChanges} width="full" />
      </div>
    </div>
  );
};

export default WeatherAlerts;
