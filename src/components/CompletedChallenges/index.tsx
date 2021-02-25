import React from 'react';
import { challengesData } from '../../hooks/challengesContext';
import { Container } from './styles';

const CompletedChallenges: React.FC = () => {
  const { challengesCompleted } = challengesData();

  return (
    <Container>
      <strong>Desafios completos</strong>
      <span>{challengesCompleted}</span>
    </Container>
  );
};

export default CompletedChallenges;
