import styled from "styled-components";

export const AppWrapper = styled.main`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colourPrimary};
  color: ${props => props.theme.colourSecondary};
  p {
    display: block;
    width: 100%;
    text-align: center;
    font-size: 2.5em;
  }
`;
