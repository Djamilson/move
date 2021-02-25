import React, { useCallback, useEffect, useState } from 'react';
import { clearTimeout } from 'timers';
import { Container, Button, HasFinishedButton } from './styles';

import { challengesData } from '../../hooks/challengesContext';
let countDownTimeOut: NodeJS.Timeout;

const CountDown: React.FC = () => {
  const { startNewChallenge } = challengesData();

  const [time, setTimes] = useState(0.1 * 60);
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [isActive, setIsActive] = useState<boolean>(false);
  const [hasFinished, setHasFinished] = useState<boolean>(false);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  const startCountDown = useCallback(() => {
    setIsActive(true);
  }, [setIsActive]);

  const resetCountDown = useCallback(() => {
    window.clearTimeout(countDownTimeOut);
    setIsActive(false);
    setTimes(25 * 60);
  }, [setIsActive, setTimes, clearTimeout, countDownTimeOut]);

  useEffect(() => {
    if (isActive && time > 0) {
      countDownTimeOut = setTimeout(() => {
        setTimes(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time, setHasFinished]);

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
