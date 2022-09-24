import { Dispatch, SetStateAction, useCallback, useState } from "react";
import useTimer from "./useTimer";

type UseStateType<T> = [T, Dispatch<SetStateAction<T>>];

/**
 * Delays state update for given timeout
 * @param initialValue Initial state value
 * @param delay Delay in milliseconds
 */
const useDebounce = <T,>(initialValue: T, delay: number): UseStateType<T> => {
  const [value, setValue] = useState(initialValue);
  const [debouncedValue, setDebouncedValue] = useState(value);

  const action = useCallback(() => {
    setDebouncedValue(value);
  }, [value]);

  useTimer(action, delay);

  return [debouncedValue, setValue];
};

export default useDebounce;
