import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ROOT_CONF } from "jog";
const App: React.FC = () => {
  const [ws, setWs] = useState(new WebSocket(ROOT_CONF.WS_URL));

  return <p>Hello</p>;
};

export default App;
