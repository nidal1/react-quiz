import React from 'react';
import { useQuiz } from '../context/QuizContext';

export default function Start() {
  const { numQuestions, dispatch } = useQuiz();
  return (
    <div className="start">
      <h2>Welcome to the react quiz</h2>
      <h3>{numQuestions} questions to test your react mastery</h3>
      <button onClick={() => dispatch({ type: 'start' })}>Let's start</button>
    </div>
  );
}
