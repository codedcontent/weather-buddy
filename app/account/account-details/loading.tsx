import LoadingSkeleton from "@/components/LoadingSkeleton";
import React from "react";

const Loading = () => {
  return (
    <div className="grid place-items-center h-full w-full">
      <LoadingSkeleton rows={4} />
    </div>
  );
};

export default Loading;
