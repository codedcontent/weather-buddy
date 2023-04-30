"use client";

import React from "react";
import { BsFillPatchQuestionFill } from "react-icons/bs";

type Props = {};

const LocationSetter: React.FC<Props> = (props: Props) => {
  return (
    <div className="mb-4 w-full flex-1">
      <div className="flex gap-4 items-start">
        <label className="block text-white mb-2 capitalize text-sm">
          Location
        </label>

        <BsFillPatchQuestionFill className="text-xl" />
      </div>

      <textarea
        className="border border-white bg-transparent rounded-xl py-2.5 px-6 w-full font-light placeholder:text-neutral-500 text-xs resize-none h-12"
        placeholder="Type any location"
      ></textarea>
    </div>
  );
};

export default LocationSetter;
