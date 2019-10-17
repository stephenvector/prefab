import React, { useCallback, useState } from "react";
import { ArrowDown, ArrowUp } from "@stephenvector/picto";
import styled from "styled-components";

const SelectWrapper = styled.div`
  position: relative;
  background: #f2f2f2;
`;

const SelectControl = styled.div`
  height: 3rem;
  display: flex;
  min-width: 10rem;
  cursor: pointer;
  width: 100%;
`;

const CurrentValue = styled.div`
  flex: 1 1 auto;
`;

const ToggleButton = styled.button`
  border: none;
  width: 3rem;
  height: 3rem;
  padding: 0;
  font: inherit;
  margin: 0;
  background: transparent;
`;

const SelectOptions = styled.ul`
  position: absolute;
  top: 3rem;
  background: #f2f2f2;
  line-height: 3rem;
  right: 0;
  left: 0;
  min-height: 3rem;
  max-height: 13rem;
  text-indent: 0.5rem;
`;

const SelectOption = styled.li`
  display: block;
  cursor: pointer;
  :hover {
    background: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.fg};
  }
`;

type SelectProps = {
  value: any;
  multiple: boolean;
  options: {
    label: string;
    value: any;
  }[];
};

function Select({ value, options }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOptionsList = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <SelectWrapper tabIndex={0}>
      <SelectControl onClick={toggleOptionsList}>
        <CurrentValue>{value}</CurrentValue>
        <ToggleButton
          onClick={toggleOptionsList}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
        >
          {isOpen ? <ArrowUp /> : <ArrowDown />}
        </ToggleButton>
      </SelectControl>
      {isOpen && (
        <SelectOptions tabIndex={-1}>
          {options.map((option, index) => (
            <SelectOption role="option" key={`${option.value}${index}`}>
              {option.label}
            </SelectOption>
          ))}
        </SelectOptions>
      )}
    </SelectWrapper>
  );
}

Select.defaultProps = {
  multiple: false,
  options: [],
  value: ""
};

export default Select;
