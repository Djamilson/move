import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import challenges from '../../challenges.json';
import Cookies from 'js-cookie';
import LevelUpModal from '../components/LevelUpModal';
interface IChallenge {
  type: 'body' | 'eve';
  description: string;
  amount: number;
}

interface ChallengesContextData {
  level: number;
  activeChallenge: IChallenge;
  currentExperience: number;
  challengesCompleted: number;
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
  completeChallenge: () => void;
  experienceToNextLevel: number;
  closeModalChallenge: () => void;
}

interface IChallengesProviderProps {
  children: ReactNode;

  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

const ChallengesContext = createContext<ChallengesContextData>(
  {} as ChallengesContextData,
);

const ChallengesProvider: React.FC<IChallengesProviderProps> = ({
  children,
  ...rest
}) => {
  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState<boolean>(false);

  const [level, setLevel] = useState<number>(rest.level ?? 1);
  //31rem equivalente a 100%
  const [currentExperience, setCurrentExperience] = useState<number>(
    rest.currentExperience ?? 0,
  );
  const [challengesCompleted, setChallengesCompleted] = useState<number>(
    rest.challengesCompleted ?? 0,
  );
  const [activeChallenge, setActiveChallenge] = useState(null);

  useEffect(() => {
    console.log('my res', rest);
    console.log('my cookies', Cookies.get());

    Cookies.set('level', String(level));
    Cookies.set('currentExperience', String(currentExperience));
    Cookies.set('challengesCompleted', String(challengesCompleted));
  }, [level, currentExperience, challengesCompleted]);

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  const levelUp = useCallback(() => {
    setLevel(level + 1);
    setIsLevelUpModalOpen(true);
  }, [setLevel, level, setIsLevelUpModalOpen]);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  const startNewChallenge = useCallback(() => {
    const randonChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randonChallengeIndex];

    setActiveChallenge(challenge);

    new Audio('/notification.mp3').play();

    if (Notification.permission === 'granted') {
      new Notification('Novo desafio', {
        body: `Valendo ${challenge.amount}xp!`,
      });
    }
  }, [setLevel, level]);

  const completeChallenge = useCallback(() => {
    if (!activeChallenge) {
      return;
    }

    const { amount } = activeChallenge;

    let finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;

      levelUp();
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1);
  }, [
    activeChallenge,
    setActiveChallenge,
    setChallengesCompleted,
    setCurrentExperience,
    levelUp,
  ]);

  const resetChallenge = useCallback(() => {
    setActiveChallenge(null);
  }, [setActiveChallenge]);

  const closeModalChallenge = useCallback(() => {
    setIsLevelUpModalOpen(false);
  }, [setIsLevelUpModalOpen]);

  return (
    <ChallengesContext.Provider
      value={{
        level,
        levelUp,
        currentExperience,
        challengesCompleted,
        startNewChallenge,
        activeChallenge,
        resetChallenge,
        completeChallenge,
        experienceToNextLevel,
        closeModalChallenge,
      }}
    >
      {children}
      {isLevelUpModalOpen && <LevelUpModal />}
    </ChallengesContext.Provider>
  );
};

function challengesData(): ChallengesContextData {
  const context = useContext(ChallengesContext);

  if (!context) {
    throw new Error('useAuth mus be used within an AuthProvider');
  }

  return context;
}

export { ChallengesProvider, challengesData };
