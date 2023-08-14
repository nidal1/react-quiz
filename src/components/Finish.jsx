import React from 'react';

export default function Finish({
  points,
  maxPossiblePoints,
  hightScore,
  dispatch,
}) {
  const per = (points / maxPossiblePoints) * 100;

  return (
    <>
      <p className="result">
        you scored <strong>{points}</strong> out of {maxPossiblePoints}{' '}
        {Math.ceil(per)}%
      </p>
      <p className="highscore">Hight score: {hightScore}</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: 'restart' })}
      >
        Restart
      </button>
    </>
  );
}
