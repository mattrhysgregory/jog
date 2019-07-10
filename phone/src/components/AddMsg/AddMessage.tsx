import React, { FormEvent, ChangeEvent, useState } from "react";
import { AddMsgForm } from "./AddMsg.styles";
import { FaPlus } from "react-icons/fa";

interface Props {
  onMessageCreate: (msg: any) => void;
}

export const AddMsg = (props: Props) => {
  const [message, setMessage] = useState("");

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    // validate message
    event.preventDefault();
    props.onMessageCreate(message);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  return (
    <AddMsgForm>
      <h3>Add Message</h3>
      <form onSubmit={handleFormSubmit}>
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
    </AddMsgForm>
  );
};
