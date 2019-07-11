import React, { useContext, FormEvent, useState, ChangeEvent } from "react";
import { UsernameCtx, SocketCtx } from "../../App";
import { RetroMessage, RetroMessageTypes } from "@jog/common";
import { timeUtils } from "../../utils";
import { FaPlus } from "react-icons/fa";
import s from "./UserRetroMain.styles";
import { Select } from "../select/Select";

export const UserRetroMain: React.FC = () => {
  const username = useContext(UsernameCtx);
  const ws = useContext(SocketCtx);

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<RetroMessageTypes>(
    RetroMessageTypes.GOOD
  );
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (message.length > 0) {
      const msg: RetroMessage = {
        content: message,
        type: messageType,
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

  const messageTypesToStringArray = (): string[] =>
    Object.values(RetroMessageTypes);

  const onSelectMessageType = (m: string) =>
    setMessageType(m as RetroMessageTypes);

  return (
    <s.Container>
      <h1>Hi {username}</h1>
      <h3>Add Message</h3>
      <form onSubmit={handleSubmit}>
        <Select
          options={messageTypesToStringArray()}
          onSelect={onSelectMessageType}
        />
        <input
          onChange={handleInputChange}
          type="text"
          placeholder="Message"
          value={message}
        />
        <button type="submit">
          <FaPlus />
        </button>
      </form>
    </s.Container>
  );
};
