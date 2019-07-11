import styled from "styled-components";

const MessageItem = styled.div`
  background-color: #ffff88;
  box-shadow: 4px 4px 7px #444;
  font-weight: 600;
  padding: 1em;
  margin: 1em;

  p:nth-of-type(2) {
    text-align: right;
    font-size: 0.8em;
  }
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
