import React, { useCallback } from 'react';
import { challengesData } from '../../hooks/challengesContext';
import { countDownsData } from '../../hooks/countDownContext';
import {
  Container,
  ChallengeBoxInit,
  ChallengeBoxFinally,
  ChallengeFailledButton,
  ChallengeSucceededButton,
} from './styles';

const ChallengeBox: React.FC = () => {
  const {
    activeChallenge,
    resetChallenge,
    completeChallenge,
  } = challengesData();

  const { resetCountDown } = countDownsData();
  const handleChallengeSucceeded = useCallback(() => {
    completeChallenge();
    resetCountDown();
  }, []);

  const handleChallengeFailed = useCallback(() => {
    resetChallenge();
    resetCountDown();
  }, [resetChallenge, resetCountDown]);

  return (
    <Container>
      {activeChallenge ? (
        <ChallengeBoxFinally>
          <header>{activeChallenge.amount}</header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`} />
            <strong> Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <ChallengeFailledButton
              type="button"
              onClick={handleChallengeFailed}
            >
              Falhei
            </ChallengeFailledButton>

            <ChallengeSucceededButton
              type="button"
              onClick={handleChallengeSucceeded}
            >
              Completei
            </ChallengeSucceededButton>
          </footer>
        </ChallengeBoxFinally>
      ) : (
        <ChallengeBoxInit>
          <strong> Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Avance de level completando dasafios.
          </p>
        </ChallengeBoxInit>
      )}
    </Container>
  );
};

export default ChallengeBox;
