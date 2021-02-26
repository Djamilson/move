import React from 'react';
import { challengesData } from '../../hooks/challengesContext';
import { Container } from './styles';

const Profile: React.FC = () => {
  const { level } = challengesData();

  return (
    <Container>
      <img src="https://github.com/djamilson.png" alt="Djamilson Alves" />
      <div>
        <strong>Djamilson Alves</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </Container>
  );
};

export default Profile;
