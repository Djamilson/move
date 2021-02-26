import ChallengeBox from '../components/ChallengeBox';

import CompletedChallenges from '../components/CompletedChallenges';
import CountDown from '../components/CountDown';
import ExperienceBar from '../components/ExperienceBar';
import Profile from '../components/Profile';
import { Container } from './styles';

import { CountDownsProvider } from '../hooks/countDownContext';

export default function Home() {
  return (
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
  );
}
