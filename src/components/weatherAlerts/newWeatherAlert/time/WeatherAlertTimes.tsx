"use client";

import React, { useContext, useEffect, useRef, useState } from "react";
import { BsFillPatchQuestionFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { IoAddOutline } from "react-icons/io5";
import { WeatherAlertsContext } from "@/context/WeatherAlertsProvider";
import { HiSelector } from "react-icons/hi";
import TimeSelect from "./TimeSelect";
import useClickAway from "@/hooks/useClickAway";

type WeatherAlertTimesProps = {
  id: string;
  times: string[];
};

const WeatherAlertTimesPicker = ({ times, id }: WeatherAlertTimesProps) => {
  const { dispatch } = useContext(WeatherAlertsContext);

  // Is the Time Select Open
  const [selectOpen, setSelectOpen] = useState(false);

  const selectRef = useRef<HTMLDivElement>(null);

  const removeTime = (time: string) => {
    dispatch({
      type: "DELETE_TIME",
      payload: {
        weatherAlertId: id,
        time,
      },
    });
  };

  const handleAddNewTimeClick = () => {
    if (times.length !== 4) {
      setSelectOpen(true);
    }
  };

  const handleClickAway = () => {
    // User clicked out of select, close select
    setSelectOpen(false);
  };

  // Help handle click away's
  useClickAway(selectRef, handleClickAway);

  return (
    <div className="w-max">
      <div className="flex gap-4 items-start">
        <label className="block text-white mb-2 capitalize text-sm">Time</label>

        <BsFillPatchQuestionFill className="text-xl" />
      </div>

      {times.length === 0 ? (
        <div>
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
        </div>
      ) : (
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
      )}

      {/* The component to select time and add new time */}
      <div className="flex flex-col gap-1" ref={selectRef}>
        {selectOpen && (
          <TimeSelect id={id} setSelectOpen={setSelectOpen} times={times} />
        )}

        {!selectOpen && times.length !== 4 && (
          // Add new time button
          <div className="flex">
            <div className="flex-1 w-full" />

            <button
              className="h-full w-max cursor-pointer bg-wb-success-green py-2 px-2 flex gap-4 justify-center items-center rounded-md mt-0.5"
              onClick={handleAddNewTimeClick}
            >
              {/* <p className="uppercase text-sm">Delete Location</p> */}
              <IoAddOutline className="text-white text-lg" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherAlertTimesPicker;
