import React, { useEffect, useState } from "react";
import { ROOT_CONF } from "@jog/common";
import { Introduction, ConnectionError, UserRetroMain } from "./components/";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./style/theme";
import s from "./App.style";
import { FaMoon, FaSun } from "react-icons/fa";
export const UsernameCtx = React.createContext("");
const ws = new WebSocket(ROOT_CONF.WS_URL);
export const SocketCtx = React.createContext(ws);

ws.onerror = () => console.log("Error with websocket");
ws.onclose = () => console.log("Error with close");

const App: React.FC = () => {
  const [connected, setConnected] = useState(true);
  const [username, setUsername] = useState<string | null>(null);
  const [darkMode, setDarkMode] = useState(false);

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

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <s.AppWrapper>
        <s.ThemeToggler onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </s.ThemeToggler>
        {!!username ? (
          renderMain()
        ) : (
          <Introduction onSetName={(u: string) => setUsername(u)} />
        )}
      </s.AppWrapper>
    </ThemeProvider>
  );
};

export default App;
