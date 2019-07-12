import styled from "styled-components";

const SelectContainer = styled.div`
  width: 400px;
  max-width: 100%;
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
  text-transform: uppercase;
  ${props => props.selected && "border: solid 2px"};
`;

export default {
  SelectContainer,
  SelectOption
};
