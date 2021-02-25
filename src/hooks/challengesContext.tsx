import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';
import challenges from '../../challenges.json';

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
  experienceToNextLevel: number;
}

interface IChallengesProviderProps {
  children: ReactNode;
}

const ChallengesContext = createContext<ChallengesContextData>(
  {} as ChallengesContextData,
);

const ChallengesProvider: React.FC<IChallengesProviderProps> = ({
  children,
}) => {
  const [level, setLevel] = useState<number>(1);
  //31rem equivalente a 100%
  const [currentExperience, setCurrentExperience] = useState<number>(31);
  const [challengesCompleted, setChallengesCompleted] = useState<number>(0);

  const levelUp = useCallback(() => {
    setLevel(level + 1);
  }, [setLevel, level]);

  const [activeChallenge, setActiveChallenge] = useState(null);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  const startNewChallenge = useCallback(() => {
    const randonChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randonChallengeIndex];

    setActiveChallenge(challenge);
  }, [setLevel, level]);

  const sstartNewChallenge = useCallback(() => {
    // setActiveChallenge(challenge);
  }, [setLevel, level, setActiveChallenge]);

  const resetChallenge = useCallback(() => {
    setActiveChallenge(null);
  }, [setActiveChallenge]);

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
        experienceToNextLevel,
      }}
    >
      {children}
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
