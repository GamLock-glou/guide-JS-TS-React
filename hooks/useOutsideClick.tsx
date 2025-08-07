import { useEffect, useCallback, useRef } from "react";

type EventType = "mousedown" | "mouseup" | "touchstart" | "touchend";

export function useOutsideClick<T extends HTMLElement = HTMLElement>(
  callback: (event: MouseEvent | TouchEvent) => void,
  eventType: EventType = "mousedown"
) {
  const ref = useRef<T>(null);

  const handleClick = useCallback(
    (e: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback(e);
      }
    },
    [callback, ref]
  );

  useEffect(() => {
    document.addEventListener(eventType, handleClick);

    return () => {
      document.removeEventListener(eventType, handleClick);
    };
  }, [eventType, handleClick]);

  return ref;
}
