import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 100vh;
  max-height: 992px;
  padding: 2.5rem 8rem;
  border: 0;

  flex-direction: column;
  align-items: center;
  top: 0;
  margin-bottom: 20rem;

  section {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 0;
  }
`;
