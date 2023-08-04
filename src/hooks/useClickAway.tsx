"use client";

import { RefObject, useEffect } from "react";

const useClickAway = <T extends HTMLElement>(
  ref: RefObject<T>,
  onClickAway: () => void
) => {
  useEffect(() => {
    const handleClickAway = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClickAway();
      }
    };

    document.addEventListener("mousedown", handleClickAway);

    return () => {
      document.removeEventListener("mousedown", handleClickAway);
    };
  }, [ref, onClickAway]);
};

export default useClickAway;
