"use client";

import Loader from "@/components/Loader";
import { WeatherAlertsContext } from "@/context/WeatherAlertsProvider";
import useClickAway from "@/hooks/useClickAway";
import { Location } from "@/types/types";
import React, { useContext, useEffect, useState } from "react";

type LocationSuggestionsProps = {
  id: string;
  text: string;
  refElement: React.RefObject<HTMLDivElement>;
  setShowSuggestions: React.Dispatch<React.SetStateAction<boolean>>;
  setWeatherAlertLocation: React.Dispatch<React.SetStateAction<Location>>;
};

const LocationSuggestions = ({
  id,
  text,
  refElement,
  setShowSuggestions,
  setWeatherAlertLocation,
}: LocationSuggestionsProps) => {
  const [isSearching, setIsSearching] = useState(true);
  const [suggestions, setSuggestions] = useState<Location[]>([]);
  const { dispatch } = useContext(WeatherAlertsContext);

  const handleClickAway = () => {
    setShowSuggestions(false);
    setIsSearching(false);
  };

  const handleSuggestionClick = (suggestion: Location) => {
    setShowSuggestions(false);

    // Since the user clicked on a suggestion, update the location for that weather alert
    dispatch({
      type: "UPDATE_LOCATION",
      payload: {
        weatherAlertId: id,
        newLocation: suggestion,
      },
    });

    setWeatherAlertLocation(suggestion);
  };

  useClickAway(refElement, handleClickAway);

  // Listen for changes on the weather alert location
  useEffect(() => {
    const getGeoCodedLocation = async () => {
      const url = `https://api.openweathermap.org/geo/1.0/direct?q=${text}&limit=20&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_MAP_API_KEY}`;

      try {
        const apiResp = await fetch(url);

        const geoCodedData = await apiResp.json();

        // Transform the geoCodedData to have a location_title, and lat & long coordinates
        const suggestedLocations = geoCodedData.map((data: any) => ({
          title: `${data.name}, ${data.state ?? ""}, ${data.country}`,
          coord: {
            lat: data.lat,
            long: data.lon,
          },
        }));

        // Finished getting suggestions
        setSuggestions(suggestedLocations);
        setIsSearching(false);
      } catch (error) {}
    };

    const timeoutId = setTimeout(() => {
      if (text) {
        // Load GeoCoded Locations
        getGeoCodedLocation();
      }
    }, 1500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [text]);

  return (
    <div className="mt-1.5 w-full max-h-36 overflow-y-auto relative rounded-md border-2 border-white">
      {isSearching ? (
        <div className="h-14">
          <Loader variant="page" />
        </div>
      ) : (
        <div className="w-full h-full py-2">
          {suggestions.length === 0 ? (
            <div className="w-full h-full flex flex-col justify-center items-center p-4">
              <p className="font-extralight text-sm text-white">
                That&apos;s on our forecast. Try typing a valid location 🤔
              </p>
            </div>
          ) : (
            <div className="w-full space-y-2 divide-y-2">
              {suggestions.map((suggestion: Location, index) => (
                <div
                  className="w-full"
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  <p className="font-extralight w-full hover:brightness-75 cursor-pointer text-sm pt-2 px-3">
                    {suggestion.title}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default LocationSuggestions;
