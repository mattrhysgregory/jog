import styled from "styled-components";

export const InlineForm = styled.form`
  display: flex;
  width: 400px;
  max-width: 100%;
  margin: auto;
  padding: 1em;
  input {
    all: unset;
    flex: 1;
    padding: 1em;
    border-bottom: solid 2px;
  }

  button {
    all: unset;
    color: ${props => props.theme.colourAccent};
  }
`;
