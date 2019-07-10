import React, { useContext, FormEvent, useState, ChangeEvent } from "react";
import { UsernameCtx, SocketCtx } from "../../App";
import { RetroMessage, RetroMessageTypes } from "../../types";
import { timeUtils } from "../../utils";
import { FaPlus } from "react-icons/fa";
import s from "./UserRetroMain.styles";
export const UserRetroMain: React.FC = () => {
  const username = useContext(UsernameCtx);
  const ws = useContext(SocketCtx);

  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (message.length > 0) {
      const msg: RetroMessage = {
        content: message,
        type: RetroMessageTypes.BAD,
        userNickname: username,
        timestamp: timeUtils.getEpochTimestamp()
      };
      ws.send(JSON.stringify(msg));
      setMessage("");
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  return (
    <s.Container>
      <h1>Hi {username}</h1>
      <h3>Add Message</h3>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleInputChange}
          type="text"
          placeholder="message"
          value={message}
        />
        <button type="submit">
          <FaPlus />
        </button>
      </form>
    </s.Container>
  );
};
