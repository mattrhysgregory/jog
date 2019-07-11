import styled from "styled-components";

const Container = styled.div`
  padding: 2em;
  text-align: center;

  form {
    display: flex;
    width: 400px;
    max-width: 100%;
    margin: auto;
    input {
      all: unset;
      border: solid 1px white;
      flex: 1;
      padding: 0.4em;
    }
    button[type="submit"] {
      all: unset;
      padding: 0.4em;
      cursor: pointer;
    }
  }
`;

export default {
  Container
};
