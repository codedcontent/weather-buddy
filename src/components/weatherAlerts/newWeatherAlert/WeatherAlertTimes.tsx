"use client";

import React from "react";
import { BsFillPatchQuestionFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { IoAddOutline } from "react-icons/io5";

type WeatherAlertTimesProps = {
  id: string | number;
  times: string[];
};

const WeatherAlertTimes = ({ times }: WeatherAlertTimesProps) => {
  const addTime = () => {};

  const removeTime = () => {};

  return (
    <div className="w-max">
      <div className="flex gap-4 items-start">
        <label className="block text-white mb-2 capitalize text-sm">Time</label>

        <BsFillPatchQuestionFill className="text-xl" />
      </div>

      <div className="border border-white bg-transparent rounded-xl divide-y-2">
        <div className="flex gap-2 p-3 w-full justify-between items-center">
          <p className="text-sm font-semibold uppercase">5:00 AM</p>

          <MdDelete
            className="text-wb-danger-red cursor-pointer"
            onClick={removeTime}
          />
        </div>

        <div className="flex gap-2 p-3 w-full justify-between items-center">
          <p className="text-sm font-semibold uppercase">12:00 Pm</p>

          <IoAddOutline
            className="text-wb-success-green text-lg cursor-pointer"
            onClick={addTime}
          />
        </div>
      </div>
    </div>
  );
};

export default WeatherAlertTimes;
