import { WeatherAlertsContext } from "@/context/WeatherAlertsProvider";
import { WeatherAlertTimes } from "@/types/types";
import React, { useContext } from "react";

type Props = {
  id: number;
  times: string[];
  setSelectOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const allowedAlertTimes: WeatherAlertTimes[] = [
  "5:00 AM",
  "12:00 AM",
  "4:00 PM",
  "8:00 PM",
];

const TimeSelect = ({ times, setSelectOpen, id }: Props) => {
  const { dispatch } = useContext(WeatherAlertsContext);

  const addTime = (time: string) => {
    dispatch({
      type: "ADD_NEW_TIME",
      payload: {
        id,
        time,
      },
    });

    setSelectOpen(false);
  };

  return (
    <div className="border border-white bg-transparent rounded-xl divide-y-2 mt-2">
      {allowedAlertTimes.map((time) => {
        if (!times.includes(time)) {
          return (
            <div
              className="flex p-3 w-full justify-center items-center cursor-pointer"
              key={time}
              onClick={() => addTime(time)}
            >
              <p className="text-sm font-semibold uppercase">{time}</p>
            </div>
          );
        }
      })}
    </div>
  );
};

export default TimeSelect;
