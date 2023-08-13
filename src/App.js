import { useEffect, useReducer } from 'react';
import DateCounter from './DateCounter';
import Header from './Header';
import Main from './Main';
import Loader from './Loader';
import Error from './Error';
import Start from './Start';

const initialState = {
  questions: [],
  status: 'loading',
};

function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case 'dataReceived':
      return {
        ...state,
        questions: payload,
        status: 'ready',
      };

    case 'dataFailed':
      return {
        ...state,
        status: 'error',
      };

    default:
      throw new Error('Invalid action type: ' + type);
  }
}

function App() {
  const [{ questions, status }, dispatch] = useReducer(reducer, initialState);

  const numQuestions = questions.length;
  useEffect(() => {
    const controller = new AbortController();
    async function fetchData() {
      try {
        const res = await fetch('http://localhost:8000/questions', {
          signal: controller.signal,
        });

        const data = await res.json();

        dispatch({ type: 'dataReceived', payload: data });
      } catch (err) {
        dispatch({ type: 'dataFailed' });
      }
    }

    fetchData();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div className="app">
      <Header />

      <Main>
        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' && <Start numQuestions={numQuestions} />}
      </Main>
    </div>
  );
}

export default App;
