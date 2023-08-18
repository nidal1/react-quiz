import React, { useEffect } from 'react';

export default function Timer({ dispatch, secondsRemaining }) {
  let mins = Math.floor(secondsRemaining / 60);
  mins = mins < 10 ? `0${mins}` : mins;
  let seconds = secondsRemaining % 60;
  seconds = seconds < 10 ? `0${seconds}` : seconds;
  useEffect(() => {
    const timer = setInterval(() => {
      dispatch({ type: 'tick' });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [dispatch]);

  return (
    <div className="timer">
      {mins}:{seconds}
    </div>
  );
}
