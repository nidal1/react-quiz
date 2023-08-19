import Header from './components/Header';
import Main from './components/Main';
import Start from './components/Start';
import Question from './components/Question';
import NextButton from './components/NextButton';
import Progress from './components/Progress';
import Finish from './components/Finish';
import Footer from './components/Footer';
import Timer from './components/Timer';
import { useQuiz } from './context/QuizContext';
import Loader from './components/Loader';
import Error from './components/Error';

function App() {
  const { status } = useQuiz();
  return (
    <div className="app">
      <Header />

      <Main>
        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' && <Start />}
        {status === 'active' && (
          <>
            <Progress />
            <Question />
            <Footer>
              <Timer />
              <NextButton />
            </Footer>
          </>
        )}
        {status === 'finished' && <Finish />}
      </Main>
    </div>
  );
}

export default App;
