import React, { useCallback, useEffect, useState, useRef } from "react";

type UseHoverType<T extends HTMLElement> = [React.RefObject<T>, boolean];

const useHover = <T extends HTMLElement>(): UseHoverType<T> => {
  const [state, setState] = useState(false);
  const ref = useRef<T>(null);

  const handleMouseOver = useCallback(() => setState(true), []);
  const handleMouseOut = useCallback(() => setState(false), []);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    element.addEventListener("mouseover", handleMouseOver);
    element.addEventListener("mouseout", handleMouseOut);

    return () => {
      element.removeEventListener("mouseover", handleMouseOver);
      element.removeEventListener("mouseout", handleMouseOut);
    };
  }, [ref, handleMouseOver, handleMouseOut]);

  return [ref, state];
};

export default useHover;
