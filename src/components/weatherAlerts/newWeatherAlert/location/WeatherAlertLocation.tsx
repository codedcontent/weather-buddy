"use client";

import { useRef, useState } from "react";
import { BsFillPatchQuestionFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import LocationSuggestions from "./LocationSuggestions";
import { TLocation } from "@/types/types";
import { useAppDispatch } from "@/hooks/redux-hooks";
import { deleteWeatherAlert } from "@/slices/weatherAlertsSlice";

type WeatherAlertLocationProps = {
  id: string;
  location: TLocation;
};

const WeatherAlertLocationPicker = ({
  location,
  id,
}: WeatherAlertLocationProps) => {
  const dispatch = useAppDispatch();

  // A reference to the element containing the location picker and suggestions elements
  const locationPickerRef = useRef<HTMLDivElement>(null);

  // State mgt. fot the weather location input
  const [weatherAlertLocation, setWeatherAlertLocation] =
    useState<TLocation>(location);

  // State mgt. for if to show suggestions
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Delete a weather alert
  const handleDeleteWeatherAlert = () => {
    dispatch(deleteWeatherAlert({ locationId: id }));
  };

  // Handle input changes
  const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;

    setShowSuggestions(true);

    // Set the new alert location - The alert location Object is of type Location
    setWeatherAlertLocation({
      coord: weatherAlertLocation.coord,
      title: value,
    });
  };

  // Handle input focus change
  const handleFocus = () => {
    if (weatherAlertLocation.title) {
      setShowSuggestions(true);
    }
  };

  return (
    <div className="lg:mb-4 mb-2 w-full flex-1">
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
            value={weatherAlertLocation?.title}
            onChange={handleOnChange}
            onFocus={handleFocus}
          ></textarea>

          {/* Delete button */}
          <button className="h-full cursor-pointer bg-wb-danger-red py-2 px-2 flex gap-4 justify-center items-center rounded-md">
            {/* <p className="uppercase text-sm">Delete Location</p> */}
            <MdDelete
              className="text-white text-lg"
              onClick={handleDeleteWeatherAlert}
            />
          </button>
        </div>

        {showSuggestions && (
          <LocationSuggestions
            id={id}
            text={weatherAlertLocation?.title}
            setShowSuggestions={setShowSuggestions}
            refElement={locationPickerRef}
            setWeatherAlertLocation={setWeatherAlertLocation}
          />
        )}
      </div>
    </div>
  );
};

export default WeatherAlertLocationPicker;
