import { useEffect } from "react";

/**
 * Performs an action after a given timeout
 * @param action
 * @param timeout
 * @param stop
 */
const useTimer = (
  action: Function,
  timeout: number,
  stop: boolean = false,
): void => {
  const clear = (timer: number) => {
    clearInterval(timer);
  };

  useEffect(() => {
    const timer = setInterval(action, timeout);

    if (stop) {
      return () => {
        clear(timer);
      };
    }

    return () => {
      clear(timer);
    };
  }, [action, stop, timeout]);
};

export default useTimer;
