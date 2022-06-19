import styled from 'styled-components';

export const PageFrame = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: ${props => props.theme.backColor};
  transition: 0.3s all ease-in-out;
`;
