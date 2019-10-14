import React, { useCallback, useState } from "react";
import { ArrowDown } from "@stephenvector/picto";
import styled from "styled-components";

const SelectWrapper = styled.div`
  position: "relative";
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

const SelectOptions = styled.div`
  position: absolute;
  top: 3rem;
  line-height: 3rem;
  right: 0;
  left: 0;
  max-height: 13rem;
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
    <SelectWrapper>
      <SelectControl onClick={toggleOptionsList}>
        <CurrentValue>{value}</CurrentValue>
        <ToggleButton onClick={toggleOptionsList}>
          <ArrowDown />
        </ToggleButton>
      </SelectControl>
      {isOpen && (
        <SelectOptions>
          {options.map((option, index) => (
            <span role="button" key={`${option.value}${index}`}>
              {option.label}
            </span>
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
