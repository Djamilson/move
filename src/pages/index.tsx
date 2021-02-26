import ChallengeBox from '../components/ChallengeBox';
import { GetServerSideProps } from 'next';
import CompletedChallenges from '../components/CompletedChallenges';
import CountDown from '../components/CountDown';
import ExperienceBar from '../components/ExperienceBar';
import Profile from '../components/Profile';
import { Container } from './styles';

import { CountDownsProvider } from '../hooks/countDownContext';
import { challengesData } from '../hooks/challengesContext';
import { ChallengesProvider } from '../hooks/challengesContext';

interface IHomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

//pegos as props do getServerSiderProps
export default function Home(props: IHomeProps) {
  const { level, currentExperience, challengesCompleted } = props;

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
}

//aqui deve acontecer a chamada para api
//tudo que é feito nessa function é rodado no servidor node
//Node
/** log aqui só aparence no vscode e não aparece no browser */
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  /*const user = {
    level: 1,
    currentExperience: 54,
    challengesCompleted: 2,
  };
  console.log(user);
  */

  const cookies = ctx.req.cookies;
  const { level, currentExperience, challengesCompleted } = cookies;
  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};
