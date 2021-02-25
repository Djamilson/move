import styled from 'styled-components';
import { colors } from '../../styles';

interface IPropsFrom {
  percentFromNexLevel: number;
}

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  position: relative;

  span {
    font-size: 1rem;
    // margin-top: -0.2rem;
  }
  div {
    width: 65vw;
    height: 4px;
    border-radius: 4px;
    display: flex;
    position: relative;
    background: ${colors.gray_line};
  }
`;

export const PercentFromNexLevel = styled.span<IPropsFrom>`
  width: ${(props) => props.percentFromNexLevel}rem;
  //width:20rem;
  height: 4px;
  border-radius: 4px;
  background: ${colors.green_};
  transform: translateX(4rem);
  margin-left: -4rem;
`;

export const PercentToNexLevel = styled.p`
  margin-top: 1.5rem;
  position: relative;
  width: 3rem;
  transform: translateX(3.5rem);
`;
