import React, { useEffect, useState } from "react";
import { WS_URL } from "./conf";
import { AddMsg, Introduction, ConnectionError } from "./components/";
import "./App.css";

export const UsernameCtx = React.createContext("");
export const SocketCtx = React.createContext(new WebSocket(WS_URL));

const App: React.FC = () => {
  const [ws, setWs] = useState(new WebSocket(WS_URL));
  const [connected, setConnected] = useState(false);
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    ws.onopen = () => {
      setConnected(true);
    };

    ws.onclose = () => {
      setConnected(false);
    };
  }, [ws]);

  // useEffect(() => {
  //   if (!connected) {
  //     setWs(new WebSocket(WS_URL));
  //   }
  // }, [connected]);

  const sendMessage = (newMsg: any) => {
    console.log("new message");
    console.log(newMsg);
    ws.send(JSON.stringify(newMsg));
  };

  const renderMain = () =>
    connected ? (
      <UsernameCtx.Provider value={username!}>
        <AddMsg onMessageCreate={sendMessage} />
      </UsernameCtx.Provider>
    ) : (
      <ConnectionError />
    );

  return !!username ? (
    renderMain()
  ) : (
    <Introduction onSetName={(u: string) => setUsername(u)} />
  );
};

export default App;
