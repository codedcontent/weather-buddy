import React from "react";
import LocationSetter from "./LocationSetter";

type Props = {};

const WeatherLocationAlertSetter: React.FC<Props> = (props: Props) => {
  return (
    <div className="flex gap-2">
      <LocationSetter />
      <LocationSetter />
    </div>
  );
};

export default WeatherLocationAlertSetter;
