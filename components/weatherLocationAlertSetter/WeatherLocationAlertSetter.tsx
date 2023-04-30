import React from "react";
import LocationSetter from "./LocationSetter";
import TimeSetter from "./TimeSetter";
import { IoAddOutline } from "react-icons/io5";

type Props = {};

const WeatherLocationAlertSetter: React.FC<Props> = (props: Props) => {
  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <LocationSetter />
        <TimeSetter />
      </div>

      <button className="flex gap-0.5 items-center border-b w-max cursor-pointer">
        <p className="text-sm font-light">Add new location</p>

        <IoAddOutline className="text-lg" />
      </button>
    </div>
  );
};

export default WeatherLocationAlertSetter;
