"use client";

import { WeatherAlertsContext } from "@/context/WeatherAlertsProvider";
import React, { useContext, useEffect, useState } from "react";
import { BsFillPatchQuestionFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";

type WeatherAlertLocationProps = {
  id: number;
  location: string;
};

const WeatherAlertLocation = ({ location, id }: WeatherAlertLocationProps) => {
  const { dispatch } = useContext(WeatherAlertsContext);

  const [weatherAlertLocation, setWeatherAlertLocation] = useState(
    location ?? ""
  );

  const deleteWeatherAlert = () => {
    dispatch({
      type: "DELETE_LOCATION",
      payload: { id },
    });
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;

    setWeatherAlertLocation(value);
  };

  // Listen for changes on the weather alert location
  useEffect(() => {
    console.log(weatherAlertLocation);
  }, [weatherAlertLocation]);

  return (
    <div className="mb-4 w-full flex-1">
      <div className="flex gap-4 items-start">
        <label className="block text-white mb-2 capitalize text-sm">
          Location
        </label>

        <BsFillPatchQuestionFill className="text-xl" />
      </div>

      <div className="w-full flex flex-row justify-center items-center gap-1">
        <textarea
          className="border border-white bg-transparent rounded-xl pt-2.5 px-6 w-full font-light placeholder:text-neutral-500 text-xs flex-1"
          placeholder="Type any location"
          value={weatherAlertLocation}
          onChange={handleOnChange}
        ></textarea>

        {/* Delete button */}
        <button className="h-full cursor-pointer bg-wb-danger-red py-2 px-2 flex gap-4 justify-center items-center rounded-md">
          {/* <p className="uppercase text-sm">Delete Location</p> */}
          <MdDelete
            className="text-white text-lg"
            onClick={deleteWeatherAlert}
          />
        </button>
      </div>
    </div>
  );
};

export default WeatherAlertLocation;
