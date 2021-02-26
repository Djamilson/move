import React from 'react';
import { Container, Button, HasFinishedButton } from './styles';

import { countDownsData } from '../../hooks/countDownContext';

const CountDown: React.FC = () => {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    resetCountDown,
    startCountDown,
  } = countDownsData();

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <>
      <Container>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <strong>:</strong>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </Container>
      {hasFinished && (
        <HasFinishedButton type="button">
          <span></span>
          <strong>Ciclo encerrado</strong>
        </HasFinishedButton>
      )}
      {!hasFinished && (
        <Button
          type="button"
          isActive={isActive}
          onClick={() => {
            isActive ? resetCountDown() : startCountDown();
          }}
        >
          <span></span>
          <strong>{isActive ? 'Abandonar ciclo' : 'Iniciar um ciclo'}</strong>
        </Button>
      )}
    </>
  );
};

export default CountDown;
