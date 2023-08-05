"use client";

import { WeatherAlertsContext } from "@/context/WeatherAlertsProvider";
import React, { useContext, useEffect, useRef, useState } from "react";
import { BsFillPatchQuestionFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import LocationSuggestions from "./LocationSuggestions";

type WeatherAlertLocationProps = {
  id: number;
  location: string;
};

const WeatherAlertLocationPicker = ({
  location,
  id,
}: WeatherAlertLocationProps) => {
  const { dispatch } = useContext(WeatherAlertsContext);

  // A reference to the element containing the location picker and suggestions elements
  const locationPickerRef = useRef<HTMLDivElement>(null);

  // State mgt. fot the weather location input
  const [weatherAlertLocation, setWeatherAlertLocation] = useState(
    location ?? ""
  );

  // State mgt. for if to show suggestions
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Delete a weather alert
  const deleteWeatherAlert = () => {
    dispatch({
      type: "DELETE_LOCATION",
      payload: { id },
    });
  };

  // Handle input changes
  const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;

    setWeatherAlertLocation(value);
  };

  // Handle input focus change
  const handleFocus = () => {
    setShowSuggestions(true);
  };

  return (
    <div className="mb-4 w-full flex-1">
      <div className="flex gap-4 items-start">
        <label className="block text-white mb-2 capitalize text-sm">
          Location
        </label>

        <BsFillPatchQuestionFill className="text-xl" />
      </div>

      {/* The main new location picker and location suggestion components */}
      <div className="w-full" ref={locationPickerRef}>
        {/* The textarea and delete button */}
        <div className="w-full flex flex-row justify-center items-center gap-1">
          <textarea
            className="border border-white bg-transparent rounded-xl pt-2.5 px-6 w-full font-light placeholder:text-neutral-500 text-xs flex-1"
            placeholder="Type any location"
            value={weatherAlertLocation}
            onChange={handleOnChange}
            onFocus={handleFocus}
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

        {showSuggestions && (
          <LocationSuggestions
            text={weatherAlertLocation}
            setShowSuggestions={setShowSuggestions}
            refElement={locationPickerRef}
          />
        )}
      </div>
    </div>
  );
};

export default WeatherAlertLocationPicker;
