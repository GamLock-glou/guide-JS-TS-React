import { useCallback, useState } from 'react';

type CallbackFn = (newWindow: Window) => Promise<void> | void;
type ErrorCallbackFn = (err: unknown) => void;
/**
 * Custom React hook to handle actions that require opening a new browser window (`_blank`)
 * with loading state and error handling.
 *
 * Useful when you need to perform an async operation (e.g., creating a chat or appointment),
 * then redirect the new window to a resulting URL.
 *
 * Automatically handles:
 * - Blocked popups (shows toast)
 * - Loading state
 * - Optional custom error handling via `errorCallback`
 *
 * @returns {{
 *   runWithWindow: (
 *   callback: (newWindow: Window) => Promise<void> | void, errorCallback?: (err: unknown) => void) => Promise<void>,
 *   loading: boolean
 * }} An object with:
 * - `runWithWindow`: function to run logic with a new window
 * - `loading`: boolean state indicating whether the operation is in progress
 *
 * @example
 * const { runWithWindow, loading } = useWindowBlankAction();
 *
 * const handleClick = () => {
 *   runWithWindow(async (window) => {
 *     const result = await createSomething();
 *     win.location.href = `/some-path/${result.id}`;
 *   });
 * };
 */
export const useWindowBlankAction = () => {
  const [loading, setLoading] = useState(false);

  const runWithWindow = useCallback(
    async (callback: CallbackFn, errorCallback?: ErrorCallbackFn) => {
      const newWindow = window.open('', '_blank');

      if (!newWindow) {
        // show error popup blocked
        return;
      }

      setLoading(true);

      try {
        await callback(newWindow);
      } catch (err) {
        console.error('Window callback failed:', err);
        newWindow?.close();
        if (errorCallback) {
          errorCallback(err);
          return;
        }
        // ...some code
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  return { runWithWindow, loading };
};
