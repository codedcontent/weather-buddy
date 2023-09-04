"use client";

import { useEffect, useRef } from "react";

const useEffectOnce = (cb: Function) => {
  const useEffectRef = useRef(true);

  useEffect(() => {
    if (useEffectRef.current) {
      cb();
    }
  }, [cb]);
};

export default useEffectOnce;
