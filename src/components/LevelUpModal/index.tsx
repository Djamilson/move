import React from 'react';
import { Overlay, Container } from './styles';

import { challengesData } from '../../hooks/challengesContext';

const LevelUpModal: React.FC = () => {
  const { level, closeModalChallenge } = challengesData();
  return (
    <Overlay>
      <Container>
        <header>
          <span>{level}</span>
        </header>
        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>
        <button type="button" onClick={closeModalChallenge}>
          <img src="/icons/close.svg" alt="Fechar modal" />
        </button>
      </Container>
    </Overlay>
  );
};

export default LevelUpModal;
