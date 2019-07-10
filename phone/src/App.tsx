import React, { useEffect, useState } from "react";
import { WS_URL } from "./conf";
import { AddMsg } from "./components/";
import "./App.css";
import { AppWrapper } from "./App.style";
import { FaSadCry } from "react-icons/fa";

const App: React.FC = () => {
  const [ws, setWs] = useState(new WebSocket(WS_URL));
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    ws.onopen = () => {
      console.log("Socket Connected");
      setConnected(true);
    };

    ws.onmessage = evt => {
      console.log("new message from socket");
      console.log(evt.data);
    };

    ws.onclose = () => {
      console.log("Socket Disconected");
      setConnected(false);
    };
  }, [ws]);

  useEffect(() => {
    if (!connected) {
      setWs(new WebSocket(WS_URL));
    }
  }, [connected]);

  const sendMessage = (newMsg: any) => {
    console.log("new message");
    console.log(newMsg);
    ws.send(JSON.stringify(newMsg));
  };

  return (
    <AppWrapper>
      {connected ? (
        <AddMsg onMessageCreate={sendMessage} />
      ) : (
        <p>
          No Connection <FaSadCry />
        </p>
      )}
    </AppWrapper>
  );
};

export default App;
