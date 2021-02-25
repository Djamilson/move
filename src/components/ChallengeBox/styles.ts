import { shade } from 'polished';
import styled from 'styled-components';
import { colors } from '../../styles';
import Button from '../Button';

export const Container = styled.div`
  position: relative;
  top: 0;
  margin-top: 0;
  height: 100%;
  background: ${colors.colorTitleInPrimary};
  border-radius: 5px;
  box-shadow: 0 0 68px rgba(0, 0, 0, 0.05);
  padding: 1.5rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const ChallengeBoxInit = styled.div`
  font-size: 1.5rem;
  font-size: 500;
  line-height: 1.4;
  strong {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.4;
  }
  p {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1.4;
    max-width: 78%;
    margin-top: 3rem;
    border: 0;
    transform: translateX(13%);

    img {
      margin-bottom: 1rem;
    }
  }
`;

export const ChallengeBoxFinally = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  border: 0;
  width: 100%;
  height: 100%;
  min-width: 100%;

  header {
    color: ${colors.blue};
    font-weight: 600;
    font-size: 1.25rem;
    padding: 0 2rem 1.5rem;
    border-bottom: 1px solid ${colors.gray_line};
  }
  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    strong {
      font-size: 2rem;
      font-weight: 600;
      color: ${colors.text_title};
      margin: 1.5rem 0 1rem;
    }
    p {
      line-height: 1.5;
    }
  }
  footer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    width: 100%;
    border: 0;

    button {
      height: 2.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 0;

      border-radius: 5px;

      color: ${colors.colorButtonText};
      font-size: 1rem;
      font-weight: 600;
    }
  }
`;

export const ChallengeFailledButton = styled(Button)`
  background: ${colors.red_};
  &:hover {
    background: ${shade(0.2, `${colors.red_}`)};
  }
`;
export const ChallengeSucceededButton = styled(Button)`
  background: ${colors.green_};
  &:hover {
    background: ${shade(0.2, `${colors.green_}`)};
  }
`;
