import ChallengeBox from '../components/ChallengeBox';

import CompletedChallenges from '../components/CompletedChallenges';
import CountDown from '../components/CountDown';
import ExperienceBar from '../components/ExperienceBar';
import Profile from '../components/Profile';
import { Container } from './styles';

export default function Home() {
  return (
    <Container>
      <ExperienceBar />
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
    </Container>
  );
}
