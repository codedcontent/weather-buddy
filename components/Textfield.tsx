"use client";

import React from "react";

type Props = {};

const Textfield: React.FC<Props> = ({}) => {
  return (
    <div className="mb-4 w-full">
      <label className="block text-white mb-2 capitalize text-sm">
        Form Name
      </label>
      <input
        className="border border-white bg-transparent rounded-xl py-2.5 px-6 w-full font-light placeholder:text-neutral-500 text-sm"
        type="text"
        placeholder="Form placeholder"
      />
    </div>
  );
};

export default Textfield;
