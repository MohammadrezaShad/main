import {useEffect} from 'react';
import {observable} from '@legendapp/state';

// Define a custom hook that takes the initial countdown time in seconds and an options object
// and returns an object with the current time and a boolean indicating if the timer is paused
export const useCountdown = (initialTime: number, options: {autoStart: boolean}) => {
  // Create an observable object to store the current time, the timer id and the pause status
  const state$ = observable({
    time: initialTime,
    timerId: null as NodeJS.Timeout | null,
    isPaused: false,
  });

  // Define a function to decrement the time by one second
  const tick = () => {
    if (state$.time.get() === 0) {
      pauseTimer();
      return;
    }
    state$.time.set(state$.time.get() - 1);
  };

  // Define a function to start the timer
  const startTimer = () => {
    // Clear any existing timer
    if (state$.timerId.get()) {
      clearInterval(state$.timerId.get());
    }
    // Set a new timer with an interval of one second
    const newTimerId = setInterval(tick, 1000);
    // Update the state with the new timer id and the pause status
    state$.timerId.set(newTimerId);
    state$.isPaused.set(false);
  };

  // Define a function to pause the timer
  const pauseTimer = () => {
    // Clear the existing timer
    if (state$.timerId.get()) {
      clearInterval(state$.timerId.get());
    }
    // Update the state with the timer id as null and the pause status as true
    state$.timerId.set(null);
    state$.isPaused.set(true);
  };

  // Define a function to resume the timer
  const resumeTimer = () => {
    // Start the timer again
    startTimer();
  };

  // Define a function to reset the timer
  const resetTimer = () => {
    // Clear the existing timer
    if (state$.timerId.get()) {
      clearInterval(state$.timerId.get());
    }
    // Update the state with the initial time, the timer id as null and the pause status as false
    state$.time.set(initialTime);
    state$.timerId.set(null);
    state$.isPaused.set(false);
  };

  // Use an effect hook to start the timer automatically if the autoStart option is true
  useEffect(() => {
    if (options.autoStart) {
      startTimer();
    }
    // Use a cleanup function to stop the timer when the component unmounts
    return () => {
      pauseTimer();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Return an object with the current time and the pause status
  return {
    time: state$.time,
    isPaused: state$.isPaused,
    startTimer,
    pauseTimer,
    resumeTimer,
    resetTimer,
  };
};
