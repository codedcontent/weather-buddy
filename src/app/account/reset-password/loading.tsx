import Loader from "@/components/Loader";
import React from "react";

const Loading = () => {
  return (
    <div className="grid place-items-center h-full w-full">
      <Loader variant="skeleton" rows={4} />
    </div>
  );
};

export default Loading;
