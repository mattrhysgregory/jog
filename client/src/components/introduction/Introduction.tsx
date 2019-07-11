import React, { useState, ChangeEvent, FormEvent } from "react";

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
    <form onSubmit={handleSubmit}>
      <input value={username} onChange={handleChange} />
      <button type="submit">Start</button>
    </form>
  );
};
