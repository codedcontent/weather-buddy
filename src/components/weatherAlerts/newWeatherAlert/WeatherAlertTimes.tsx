"use client";

import React, { useContext, useEffect, useRef, useState } from "react";
import { BsFillPatchQuestionFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { IoAddOutline } from "react-icons/io5";
import { WeatherAlertsContext } from "@/context/WeatherAlertsProvider";
import { HiSelector } from "react-icons/hi";
import { WeatherAlertTimes } from "@/types/types";

type WeatherAlertTimesProps = {
  id: number;
  times: string[];
};

const allowedAlertTimes: WeatherAlertTimes[] = [
  "5:00 AM",
  "12:00 AM",
  "4:00 PM",
  "8:00 PM",
];

const WeatherAlertTimes = ({ times, id }: WeatherAlertTimesProps) => {
  const { dispatch } = useContext(WeatherAlertsContext);

  // Is the Time Select Open
  const [selectOpen, setSelectOpen] = useState(false);

  const selectRef = useRef<HTMLDivElement>(null);

  const removeTime = (time: string) => {
    dispatch({
      type: "DELETE_TIME",
      payload: {
        id,
        time,
      },
    });
  };

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

  const TimeSelect = () => {
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

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      const targetElement = selectRef.current;

      if (selectOpen) {
        if (targetElement && !targetElement.contains(event.target as Node)) {
          // User clicked out of select, close select
          setSelectOpen(false);
        }
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [selectOpen]);

  return (
    <div className="w-max">
      <div className="flex gap-4 items-start">
        <label className="block text-white mb-2 capitalize text-sm">Time</label>

        <BsFillPatchQuestionFill className="text-xl" />
      </div>

      {times.length === 0 ? (
        <div ref={selectRef}>
          <div
            className="border border-white bg-transparent rounded-xl divide-y-2 cursor-pointer"
            onClick={() => {
              setSelectOpen(true);
            }}
          >
            {/* Select opener */}
            <div className="flex gap-2 p-3 w-full justify-between items-center">
              <p className="text-xs font-semibold">Select time</p>

              <HiSelector />
            </div>
          </div>

          {selectOpen && <TimeSelect />}
        </div>
      ) : (
        <div className="flex flex-col gap-1">
          <div className="border border-white bg-transparent rounded-xl divide-y-2">
            {times.map((time, index) => (
              <div
                className="flex gap-2 p-3 w-full justify-between items-center"
                key={index}
              >
                <p className="text-sm font-semibold uppercase">{time}</p>

                <MdDelete
                  className="text-wb-danger-red cursor-pointer"
                  onClick={() => removeTime(time)}
                />
              </div>
            ))}
          </div>

          {/* Add new time button */}
          <div
            className="flex"
            onClick={() => {
              setSelectOpen(true);
            }}
          >
            <div className="flex-1 w-full" />

            <button className="h-full w-max cursor-pointer bg-wb-success-green py-2 px-2 flex gap-4 justify-center items-center rounded-md">
              {/* <p className="uppercase text-sm">Delete Location</p> */}
              <IoAddOutline className="text-white text-lg" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherAlertTimes;
