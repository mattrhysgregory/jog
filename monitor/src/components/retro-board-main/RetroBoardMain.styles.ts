import styled from "styled-components";

const MessageItem = styled.div`
  background-color: #eee;
  box-shadow: 4px 4px 7px #444;
  padding: 1em;
  margin: 1em;
`;

const Col = styled.div`
  flex: 1;
  margin: 2%;

  h3 {
    opacity: 0.75;
    text-align: center;
    text-transform: uppercase;
  }
`;
const Board = styled.div`
  width: 100%;
  display: flex;
  height: 100vh;
`;

export default {
  MessageItem,
  Col,
  Board
};
