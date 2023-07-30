import { Loader2 } from "lucide-react";
import React from "react";

type LoaderProps = {
  variant: "page" | "action" | "skeleton";
  rows?: number;
};

const Loader: React.FC<LoaderProps> = ({ variant, rows = 4 }) => {
  if (variant === "action") return <Loader2 className="animate-spin text-sm" />;

  if (variant === "page")
    return (
      <div className="h-full w-full bg-wb-silver/40 absolute top-0 left-0 flex justify-center items-center">
        <Loader2 className="animate-spin text-sm" />
      </div>
    );

  if (variant === "skeleton")
    return (
      <div className="w-full space-y-6">
        {[...Array(rows)].map((_, i) => (
          <div
            className="border border-silver shadow rounded-md p-4 max-w-sm w-full mx-auto"
            key={i}
          >
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-wb-silver h-10 w-10"></div>
              <div className="flex-1 space-y-6 py-1">
                <div className="h-2 bg-wb-silver rounded"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-wb-silver rounded col-span-2"></div>
                    <div className="h-2 bg-wb-silver rounded col-span-1"></div>
                  </div>
                  <div className="h-2 bg-wb-silver rounded"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
};

export default Loader;
