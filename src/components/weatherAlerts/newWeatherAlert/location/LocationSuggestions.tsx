"use client";

import Loader from "@/components/Loader";
import useClickAway from "@/hooks/useClickAway";
import { LocationSuggestions } from "@/types/types";
import React, { useEffect, useRef, useState } from "react";

type LocationSuggestionsProps = {
  text: string;
  refElement: React.RefObject<HTMLDivElement>;
  setShowSuggestions: React.Dispatch<React.SetStateAction<boolean>>;
};

const LocationSuggestions = ({
  text,
  refElement,
  setShowSuggestions,
}: LocationSuggestionsProps) => {
  const [isSearching, setIsSearching] = useState(true);
  const [suggestions, setSuggestions] = useState<LocationSuggestions[]>([]);

  const handleClickAway = () => {
    setShowSuggestions(false);
    setIsSearching(false);
  };

  const handleSuggestionClick = () => {
    setIsSearching(false);
    setShowSuggestions(false);
  };

  useClickAway(refElement, handleClickAway);

  // Listen for changes on the weather alert location
  useEffect(() => {
    const getGeoCodedLocation = async () => {
      const url = `https://api.openweathermap.org/geo/1.0/direct?q=${text}&limit=20&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_MAP_API_KEY}`;

      const apiResp = await fetch(url);

      const geoCodedData = await apiResp.json();

      // Transform the geoCodedData to have a location_title, and lat & long coordinates
      const suggestedLocations = geoCodedData.map((data: any) => ({
        title: `${data.name} ${data.state ?? ""}, ${data.country}`,
        coord: {
          lat: data.lat,
          long: data.lon,
        },
      }));

      console.log(suggestedLocations);

      // Finished getting suggestions
      setSuggestions(suggestedLocations);
      setIsSearching(false);
    };

    const timeoutId = setTimeout(() => {
      getGeoCodedLocation();
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [text]);

  return (
    <div className="mt-1.5 w-full h-36 overflow-y-auto relative rounded-md border-2 border-white">
      {isSearching ? (
        <Loader variant="page" />
      ) : (
        <div className="w-full h-full">
          {suggestions.length === 0 ? (
            <div>
              <p>Could you find what you were looking for.</p>
              <p>Check your spelling of that location</p>
            </div>
          ) : (
            <div className="w-full space-y-2 divide-y-2">
              {suggestions.map((suggestion: LocationSuggestions, index) => (
                <div className="w-full" key={index}>
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
