import React from 'react';
import { Container } from './styles';

const Profile: React.FC = () => {
  return (
    <Container>
      <img src="https://github.com/djamilson.png" alt="Djamilson Alves" />
      <div>
        <strong>Djamilson Alves</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </Container>
  );
};

export default Profile;
