import React, { useCallback } from "react";
import styled from "./styled";
import { RadioActive, RadioInactive } from "@stephenvector/picto";
import { RadioProps, RadioOptionProps, OptionValue } from "./types";
import { useOptionsWithIds } from "./hooks";

const RadioOptionWrapper = styled.div`
  display: flex;
  align-items: center;
  line-height: 2rem;
  svg {
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.5rem;
  }
`;

function RadioOption(props: RadioOptionProps) {
  const { option, onClick } = props;

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      e.preventDefault();
      onClick(option.value);
    },
    [option, onClick]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      // Enter Key
      if (e.keyCode === 13) {
        onClick(option.value);
      }
    },
    [option, onClick]
  );

  return (
    <RadioOptionWrapper
      role="radio"
      onClick={handleClick}
      tabIndex={props.isActive ? -1 : 0}
      onKeyDown={handleKeyDown}
    >
      {props.isActive ? <RadioActive /> : <RadioInactive />}
      {props.option.label}
    </RadioOptionWrapper>
  );
}

function RadioGroup(props: RadioProps, ref: React.Ref<HTMLDivElement>) {
  const { options, onChange, value } = props;
  const optionsWithIds = useOptionsWithIds(options);

  const handleValueChange = useCallback(
    (newValue: OptionValue) => {
      onChange(newValue);
    },
    [onChange]
  );

  return (
    <div ref={ref} role="radiogroup">
      {optionsWithIds.map(option => (
        <RadioOption
          key={option.id}
          isActive={option.value === value}
          onClick={handleValueChange}
          option={option}
        />
      ))}
    </div>
  );
}

export default React.forwardRef(RadioGroup);
