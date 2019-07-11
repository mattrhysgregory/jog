import * as WebSocket from "ws";
import { RetroBoard, RetroMessageTypes, RetroMessage } from "@jog/common";

const port = 8080;

export const initWebsockets = () => {
  console.log(`-- WS STARTED ON PORT ${port} --`);

  const board: RetroBoard = {
    [RetroMessageTypes.GOOD]: [],
    [RetroMessageTypes.BETTER]: [],
    [RetroMessageTypes.BAD]: []
  };

  const wsConnections: WebSocket[] = [];

  const wss = new WebSocket.Server({ port });

  const broadcast = () => {
    wsConnections.forEach((c: WebSocket) => {
      c.send(JSON.stringify(board));
    });
  };

  const addToBoard = (m: RetroMessage) => {
    board[m.type] = [...board[m.type], m];
    broadcast();
  };

  const isValidMessage = (m: RetroMessage): boolean => {
    console.log(m);
    return m.content && m.content.length > 0;
  };

  wss.on("connection", (connection: WebSocket) => {
    console.log("-- CONNECTION MADE --");
    wsConnections.push(connection);
    connection.send(JSON.stringify(board));
    connection.on("message", message => {
      console.log("Message recieved: %s", message);

      const parsedMessage: RetroMessage = JSON.parse(message.toString());
      if (isValidMessage(parsedMessage)) {
        addToBoard(parsedMessage);
        connection.send(JSON.stringify(board));
        console.log(JSON.stringify(board));
      } else {
        console.log("it wasnt valid");
      }
    });
  });
};

initWebsockets();
