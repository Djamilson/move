import React from 'react';
import { Container } from './styles';

const ExperienceBar: React.FC = () => {
  return (
    <Container>
      <span>0 xp</span>
      <div>
        <span style={{ left: '50%' }}>300 xp</span>
      </div>
      <strong>600 xp</strong>
    </Container>
  );
};

export default ExperienceBar;
