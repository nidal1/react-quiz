import React from 'react';

export default function Finish({ points, maxPossiblePoints, hightScore }) {
  const per = (points / maxPossiblePoints) * 100;

  return (
    <>
      <p className="result">
        you scored <strong>{points}</strong> out of {maxPossiblePoints}{' '}
        {Math.ceil(per)}%
      </p>
      <p className="highscore">Hight score: {hightScore}</p>
    </>
  );
}
