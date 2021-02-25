import React from 'react';
import { challengesData } from '../../hooks/challengesContext';
import {
  Container,
  ChallengeBoxInit,
  ChallengeBoxFinally,
  ChallengeFailledButton,
  ChallengeSucceededButton,
} from './styles';

const ChallengeBox: React.FC = () => {
  const { activeChallenge, resetChallenge } = challengesData();

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
              onClick={() => resetChallenge()}
            >
              Falhei
            </ChallengeFailledButton>

            <ChallengeSucceededButton type="button" onClick={() => {}}>
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
