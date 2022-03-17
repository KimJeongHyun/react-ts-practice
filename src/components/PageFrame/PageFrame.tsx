import styled from 'styled-components';

export const PageFrame = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 6vh 5vw 1vh 5vw;
  background-color: ${props => props.theme.backColor};
  transition: 0.125s all ease-in;
`;
