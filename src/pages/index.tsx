import { clearFix } from 'polished';

import CompletedChallenges from '../components/CompletedChallenges.tsx';
import CountDown from '../components/CountDown.tsx';
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
        <section></section>
      </section>
    </Container>
  );
}
