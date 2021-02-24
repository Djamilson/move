import styled from 'styled-components';
import { colors } from '../../styles';

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
  div {
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
  }
`;
