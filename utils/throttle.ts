export function throttle<T extends (...args: any[]) => void>(
  func: T,
  delay: number,
  options: { leading?: boolean; trailing?: boolean } = {}
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;
  let lastArgs: Parameters<T> | null = null;
  let lastCall = 0;

  const { leading = true, trailing = true } = options;

  return (...args: Parameters<T>) => {
    const now = Date.now();

    const invoke = () => {
      lastCall = now;
      func(...(lastArgs as Parameters<T>));
      lastArgs = null;
    };

    if (!lastCall && !leading) {
      lastCall = now;
    }

    const remaining = delay - (now - lastCall);
    lastArgs = args;

    if (remaining <= 0 || remaining > delay) {
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }

      invoke();
    } else if (!timeoutId && trailing) {
      timeoutId = setTimeout(() => {
        timeoutId = null;
        if (lastArgs) invoke();
      }, remaining);
    }
  };
}