import styled from 'styled-components';
import { colors } from '../../styles';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10rem;
  
  img {
    width: 5.5rem;
    height: 5.5rem;
    border-radius: 50%;
  }
  div {
    margin-left: 1.5rem;

    strong {
      font-size: 1.5rem;
      font-weight: 600;
      color: ${colors.text_title};
    }

    p {
      font-size: 1rem;
      margin-top: 0.5rem;

      img {
        margin-right: 0.5rem;
        width: 1rem;
        height: 1rem;
      }
    }
  }
`;
