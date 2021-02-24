import React, { useCallback, useEffect, useState } from 'react';
import { clearTimeout } from 'timers';
import { Container } from './styles';

const ChallengeBox: React.FC = () => {
  return (
    <Container>
      <div>
        <strong> Finalize um ciclo para receber um desafio</strong>
        <p>
          <img src="icons/level-up.svg" alt="Level Up" />
          Avance de level completando dasafios.
        </p>
      </div>
    </Container>
  );
};

export default ChallengeBox;
