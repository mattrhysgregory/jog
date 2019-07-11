import React from "react";
import { RetroBoard, RetroMessage } from "@jog/common";
import s from "./RetroBoardMain.styles";

interface Props {
  board: RetroBoard;
}

export const RetroBoardMain: React.FC<Props> = ({ board }: Props) => {
  const renderColumn = (messages: RetroMessage[]) =>
    messages.map(m => (
      <s.MessageItem key={m.content}>
        <p>{m.content}</p>
        <p> {m.timestamp}</p>
        <p>{m.userNickname}</p>
      </s.MessageItem>
    ));

  const renderColumns = (): JSX.Element[] =>
    Object.keys(board).map(k => (
      <s.Col key={k}>
        <h3>{k}</h3>
        {renderColumn(board[k])}
      </s.Col>
    ));

  return <s.Board>{renderColumns()}</s.Board>;
};
