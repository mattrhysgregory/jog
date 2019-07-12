import React, { useContext, FormEvent, useState, ChangeEvent } from "react";
import { UsernameCtx, SocketCtx } from "../../App";
import { RetroMessage, RetroMessageTypes } from "@jog/common";
import { timeUtils } from "../../utils";
import { FaPlus } from "react-icons/fa";
import s from "./UserRetroMain.styles";
import { Select } from "../select/Select";
import { InlineForm } from "../../style/form";

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
      <h3>Add</h3>
      <Select
        options={messageTypesToStringArray()}
        onSelect={onSelectMessageType}
      />
      <InlineForm onSubmit={handleSubmit}>
        <input
          onChange={handleInputChange}
          type="text"
          placeholder="Message"
          value={message}
        />
        <button type="submit">
          <FaPlus />
        </button>
      </InlineForm>
    </s.Container>
  );
};
