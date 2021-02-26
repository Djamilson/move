import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import challenges from '../../challenges.json';

interface IChallenge {
  type: 'body' | 'eve';
  description: string;
  amount: number;
}
import { challengesData } from './challengesContext';

interface CountDownsContextData {
  minutes: number;
  seconds: number;
  isActive: boolean;
  hasFinished: boolean;

  resetCountDown: () => void;
  startCountDown: () => void;
}

let countDownTimeOut: NodeJS.Timeout;

interface ICountDownsProviderProps {
  children: ReactNode;
}

const CountDownsContext = createContext<CountDownsContextData>(
  {} as CountDownsContextData,
);

const CountDownsProvider: React.FC<ICountDownsProviderProps> = ({
  children,
}) => {
  const { startNewChallenge } = challengesData();

  const [time, setTimes] = useState(0.1 * 60);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [hasFinished, setHasFinished] = useState<boolean>(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const startCountDown = useCallback(() => {
    setIsActive(true);
  }, [setIsActive]);

  const resetCountDown = useCallback(() => {
    window.clearTimeout(countDownTimeOut);
    setIsActive(false);
    setTimes(0.1 * 60);
    setHasFinished(false);
  }, [setHasFinished, setIsActive, setTimes, countDownTimeOut]);

  useEffect(() => {
    if (isActive && time > 0) {
      countDownTimeOut = setTimeout(() => {
        setTimes(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time, setHasFinished]);

  return (
    <CountDownsContext.Provider
      value={{
        minutes,
        seconds,
        resetCountDown,
        hasFinished,
        isActive,
        startCountDown,
      }}
    >
      {children}
    </CountDownsContext.Provider>
  );
};

function countDownsData(): CountDownsContextData {
  const context = useContext(CountDownsContext);

  if (!context) {
    throw new Error('useAuth mus be used within an AuthProvider');
  }

  return context;
}

export { CountDownsProvider, countDownsData };
