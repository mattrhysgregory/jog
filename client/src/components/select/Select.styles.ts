import styled from "styled-components";

const SelectContainer = styled.div`
  width: 400px;
  display: flex;
  margin: auto;
`;

interface SelectOptionProps {
  selected?: boolean;
}

const SelectOption = styled.div<SelectOptionProps>`
  flex: 1;
  padding: 0.5em;
  margin: 1em;
  border-radius: 20px;
  ${props => props.selected && "border: solid 1px white"};
`;

export default {
  SelectContainer,
  SelectOption
};
