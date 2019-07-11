import React, { useState, useEffect } from "react";
import s from "./Select.styles";

interface Props {
  options: string[];
  selected?: string;
  onSelect: (option: string) => void;
}

export const Select: React.FC<Props> = (props: Props) => {
  const [selected, setSelected] = useState(props.selected || props.options[0]);

  useEffect(() => props.onSelect(selected), [selected]);

  return (
    <s.SelectContainer>
      {props.options.map(o => (
        <s.SelectOption
          selected={selected === o}
          onClick={() => setSelected(o)}
        >
          {o}
        </s.SelectOption>
      ))}
    </s.SelectContainer>
  );
};
