import React, { useState, ChangeEvent, FormEvent } from "react";
import { InlineForm } from "../../style/form";
import { FaPlay } from "react-icons/fa";

interface Props {
  onSetName: (name: string) => void;
}

export const Introduction: React.FC<Props> = (props: Props) => {
  const [username, setUsername] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.currentTarget.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("name is " + username);
    props.onSetName(username);
  };

  return (
    <InlineForm onSubmit={handleSubmit}>
      <input value={username} onChange={handleChange} placeholder="Name" />
      <button type="submit">
        <FaPlay />
      </button>
    </InlineForm>
  );
};
