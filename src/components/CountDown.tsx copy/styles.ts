import { shade } from 'polished';
import styled from 'styled-components';
import { colors } from '../../styles';

import MyButton from '../Button';

export const Container = styled.div`
  display: flex;
  align-items: center;
  font-family: Rajdhani;
  width: 100%;
  font-weight: 600;
  color: ${colors.text_title};
  border: 0;

  padding-bottom: 1rem;
  border-bottom: 1px solid #d7d8da;

  font-weight: 500;

  div {
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    background: ${colors.colorTitleInPrimary};
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    font-size: 8.5rem;
    text-align: center;

    span {
      flex: 1;
      border-right: 1px solid #f0f1f3;
    }
  }

  strong {
    font-size: 6.25rem;
    margin: 0 0.5rem;
  }
`;

interface IPropButton {
  isActive: boolean;
}
export const Button = styled(MyButton)<IPropButton>`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  background: ${(props) =>
    props.isActive ? colors.text_highlight : colors.blue_dark};

  color: ${(props) => (props.isActive ? colors.text_title : colors.text_title)};
  height: 4rem;

  span {
    width: 60px;
    height: 4rem;
    border-radius: 0rem 0 0 0rem;
  }

  &:not(:disabled):hover {
    background: ${(props) => (props.isActive ? colors.blue_dark : colors.red_)};

    color: ${(props) =>
      props.isActive ? colors.text_title : colors.colorTextInPrimary};
  }
`;
