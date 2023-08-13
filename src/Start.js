import React from 'react';

export default function Start({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to the react quiz</h2>
      <h3>{numQuestions} questions to test your react mastery</h3>
      <button onClick={() => dispatch({ type: 'start' })}>Let's start</button>
    </div>
  );
}
