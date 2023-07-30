import { Loader2 } from "lucide-react";
import React from "react";

type LoaderProps = {
  variant: "page" | "action" | "skeleton";
};

const Loader: React.FC<LoaderProps> = ({ variant }) => {
  if (variant === "action") return <Loader2 className="animate-spin text-sm" />;

  if (variant === "page")
    return (
      <div className="h-full w-full bg-wb-silver/40 absolute top-0 left-0 flex justify-center items-center">
        <Loader2 className="animate-spin text-sm" />
      </div>
    );

  if (variant === "skeleton") return "SKELETON LOADER...";
};

export default Loader;
