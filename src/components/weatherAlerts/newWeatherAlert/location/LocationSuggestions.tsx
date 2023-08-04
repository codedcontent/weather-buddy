"use client";

import Loader from "@/components/Loader";
import useClickAway from "@/hooks/useClickAway";
import React, { useEffect, useRef, useState } from "react";

type LocationSuggestionsProps = {
  text: string;
  setShowSuggestions: React.Dispatch<React.SetStateAction<boolean>>;
};

const LocationSuggestions = ({
  text,
  setShowSuggestions,
}: LocationSuggestionsProps) => {
  const suggestionsRef = useRef<HTMLDivElement>(null);

  const [isSearching, setIsSearching] = useState(true);

  const handleClickAway = () => {
    setShowSuggestions(false);
    setIsSearching(false);
  };

  const handleSuggestionClick = () => {
    setIsSearching(false);
    setShowSuggestions(false);
  };

  useClickAway(suggestionsRef, handleClickAway);

  console.log(process.env.OPENWEATHER_MAP_API_KEY);

  // Listen for changes on the weather alert location
  useEffect(() => {
    const getGeoCodedLocation = async () => {
      const url = `https://api.openweathermap.org/geo/1.0/direct?q=${text}&appid=${process.env.OPENWEATHERMAP_APIKEY}`;

      console.log(url);

      const apiResp = await fetch(url);

      const data = await apiResp.json();

      console.log(data);
    };

    const timeoutId = setTimeout(() => {
      getGeoCodedLocation();
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [text]);

  return (
    <div
      className="mt-1.5 w-full h-40 overflow-y-auto relative rounded-md"
      ref={suggestionsRef}
    >
      {isSearching ? (
        <Loader variant="page" />
      ) : (
        <div className="w-full h-full">All Suggestions</div>
      )}
    </div>
  );
};

export default LocationSuggestions;
