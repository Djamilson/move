import styled from 'styled-components';
import { colors } from '../../styles';

export const Container = styled.header`
  display: flex;
  height: 4px;
  border-radius: 4px;
  background: ${colors.gray_line};

  justify-content: space-between;
  align-items: center;
  width: 87%;

  span {
    font-size: 1rem;
    margin-left: -3.5rem;
    margin-top: -0.4rem;
  }
  div {
    width: 60%;
    height: 4px;
    border-radius: 4px;
    background: ${colors.green_};
    right: 0;
    margin: 0;
    margin-left: -17rem;

    position: relative;
    span {
      margin-top: 2.5rem;
      margin-left: 14.3rem;
      position: absolute;
      width: 50px;
    }
  }
  strong {
    font-size: 1rem;
    transform: translateX(120%);
  }
`;
