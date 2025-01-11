import { useState, useEffect, useCallback } from "react";

type Timer = ReturnType<typeof setTimeout>;

export const useTimeUtils = () => {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  const [timerId, setTimerId] = useState<Timer | null>(null);

  // Function to get the current time
  const getCurrentTime = useCallback(() => {
    return new Date();
  }, []);

  // Function to update the current time
  const updateCurrentTime = useCallback(() => {
    setCurrentTime(getCurrentTime());
  }, [getCurrentTime]);

  // Function to start a timer
  const startTimer = useCallback((callback: () => void, delay: number) => {
    const id = setTimeout(() => {
      callback();
    }, delay);
    setTimerId(id);
    return id;
  }, []);

  // Function to stop the timer
  const stopTimer = useCallback(() => {
    if (timerId) {
      clearTimeout(timerId);
      setTimerId(null);
    }
  }, [timerId]);

  // Effect to update the current time every second
  useEffect(() => {
    const intervalId = setInterval(updateCurrentTime, 1000);
    return () => clearInterval(intervalId);
  }, [updateCurrentTime]);

  const useDateUtils = () => {
    Date.UTC;
    return { useDateUtils };
  };

  return {
    currentTime,
    getCurrentTime,
    startTimer,
    stopTimer,
    useDateUtils,
  };
};
