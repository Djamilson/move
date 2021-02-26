import ChallengeBox from '../../components/ChallengeBox';

import CompletedChallenges from '../../components/CompletedChallenges';
import CountDown from '../../components/CountDown';
import ExperienceBar from '../../components/ExperienceBar';
import Profile from '../../components/Profile';
import { Container } from './styles';

import { CountDownsProvider } from '../../hooks/countDownContext';

import { ChallengesProvider } from '../../hooks/challengesContext';

interface IHomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

//pegos as props do getServerSiderProps
const Home: React.FC<IHomeProps> = ({
  level,
  currentExperience,
  challengesCompleted,
}) => {
  return (
    <ChallengesProvider
      level={level}
      currentExperience={currentExperience}
      challengesCompleted={challengesCompleted}
    >
      <Container>
        <ExperienceBar />
        <CountDownsProvider>
          <section>
            <article>
              <Profile />
              <CompletedChallenges />
              <CountDown />
            </article>
            <section>
              <ChallengeBox />
            </section>
          </section>
        </CountDownsProvider>
        ;
      </Container>
    </ChallengesProvider>
  );
};

export default Home;
