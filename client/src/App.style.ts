import styled from "styled-components";

const AppWrapper = styled.main`
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

const ThemeToggler = styled.div`
  position: fixed;
  top: 20px;
  left: 20px;
  cursor: pointer;
  font-size: 2rem;
  padding: 1em;
  color: ${props => props.theme.colourSecondary};
  user-select: none;
`;

export default { AppWrapper, ThemeToggler };
