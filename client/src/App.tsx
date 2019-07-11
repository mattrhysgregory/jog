import React, { useEffect, useState } from "react";
import { ROOT_CONF } from "@jog/common";
import { Introduction, ConnectionError, UserRetroMain } from "./components/";
import "./App.css";

export const UsernameCtx = React.createContext("");
export const SocketCtx = React.createContext(new WebSocket(ROOT_CONF.WS_URL));

const App: React.FC = () => {
  const [ws, setWs] = useState(new WebSocket(ROOT_CONF.WS_URL));
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

  useEffect(() => {
    if (!connected) {
      setWs(new WebSocket(ROOT_CONF.WS_URL));
    }
  }, [connected]);

  const renderMain = () =>
    connected ? (
      <SocketCtx.Provider value={ws}>
        <UsernameCtx.Provider value={username!}>
          <UserRetroMain />
        </UsernameCtx.Provider>
      </SocketCtx.Provider>
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
