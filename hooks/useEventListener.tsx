import { useEffect } from 'react';

export function useEventListener<K extends keyof WindowEventMap>(
  eventName: K,
  handler: (event: WindowEventMap[K]) => void,
  target: EventTarget = window,
) {
  useEffect(() => {
    target.addEventListener(eventName, handler);
    return () => {
      target.removeEventListener(eventName, handler);
    };
  }, [eventName, handler, target]);
}
