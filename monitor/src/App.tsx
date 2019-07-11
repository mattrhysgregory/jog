import React, { useState, useEffect } from "react";
import "./App.css";
import { ROOT_CONF, RetroBoard } from "@jog/common";
import { RetroBoardMain } from "./components";
const App: React.FC = () => {
  const [ws, setWs] = useState(new WebSocket(ROOT_CONF.WS_URL));
  const [connected, setConnected] = useState(false);
  const [board, setBoard] = useState<RetroBoard>({});

  useEffect(() => {
    ws.onopen = () => setConnected(true);
    ws.onclose = () => setConnected(false);
    ws.onmessage = (msg: MessageEvent) => setBoard(JSON.parse(msg.data));
  }, [ws]);

  useEffect(() => {
    if (!connected) {
      setWs(new WebSocket(ROOT_CONF.WS_URL));
    }
  }, [connected]);

  return connected && board ? (
    <RetroBoardMain board={board} />
  ) : (
    <p>Connection Error</p>
  );
};

export default App;
