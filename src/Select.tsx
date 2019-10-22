import React, { useCallback, useState, useEffect } from "react";
import { ArrowDown, ArrowUp } from "@stephenvector/picto";
import styled, { DefaultTheme } from "styled-components";
import { getRandomID } from "./utils";
import { defaultPrefabTheme } from "./";

const SelectControl = styled.div`
  height: ${p => p.theme.sizing.formControls};
  border-radius: ${p => p.theme.sizing.borderRadius};
  display: flex;
  min-width: 10rem;
  cursor: pointer;
  width: 100%;
`;

SelectControl.defaultProps = { theme: defaultPrefabTheme };

const CurrentValue = styled.input`
  font: inherit;
  padding: 0;
  margin: 0;
  border: none;
  text-indent: 0.5rem;
  flex: 1 1 auto;
  background: transparent;
`;

const ToggleButton = styled.button`
  border: none;
  width: ${p => p.theme.sizing.formControls};
  height: ${p => p.theme.sizing.formControls};
  padding: 0;
  font: inherit;
  margin: 0;
  background: transparent;
`;

ToggleButton.defaultProps = { theme: defaultPrefabTheme };

const SelectOptions = styled.ul`
  position: absolute;
  top: 3rem;
  background: #f2f2f2;
  line-height: ${p => p.theme.sizing.formControls};
  right: 0;
  margin: 0;
  padding: 0;
  z-index: 1000;
  list-style-type: none;
  left: 0;
  min-height: ${p => p.theme.sizing.formControls};
  max-height: 13rem;
  text-indent: 0.5rem;
  margin-top: calc(${p => p.theme.sizing.border} * -1);
  border-bottom-left-radius: ${p => p.theme.sizing.borderRadius};
  border-bottom-right-radius: ${p => p.theme.sizing.borderRadius};
  box-shadow: inset 0 0 0
    ${p => `${p.theme.sizing.border} ${p.theme.colors.accent}`};
`;

SelectOptions.defaultProps = { theme: defaultPrefabTheme };

const SelectOption = styled.li`
  display: block;
  cursor: pointer;
  :hover {
    background: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.bg};
  }
`;

SelectOption.defaultProps = { theme: defaultPrefabTheme };

const SelectWrapper = styled.div<{ isOpen: boolean; isFocused: boolean }>`
  position: relative;
  background: #f2f2f2;
  border-radius: ${p => p.theme.sizing.borderRadius};
  ${p => {
    if (p.isFocused) {
      return `${SelectControl} { box-shadow: inset 0 0 0 ${p.theme.sizing.border} ${p.theme.colors.accent}}`;
    } else {
      return `${SelectControl} { box-shadow: inset 0 0 0 ${p.theme.sizing.border} ${p.theme.colors.meta}}`;
    }
  }};
  border-top-left-radius: ${p => (p.isOpen ? 0 : p.theme.sizing.borderRadius)};
  border-top-right-radius: ${p => (p.isOpen ? 0 : p.theme.sizing.borderRadius)};
`;

SelectWrapper.defaultProps = { theme: defaultPrefabTheme };

type Option = {
  label: string;
  value: any;
};

type OptionWithId = Option & { id: string };

export type SelectProps = {
  listId?: string;
  toggleLabel?: string;
  optionsLabel?: string;
  value: any;
  options: Option[];
  onChange(newValue: any): void;
};

function Select({
  value,
  onChange,
  options,
  listId,
  toggleLabel,
  optionsLabel
}: SelectProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptionId, setSelectedOptionId] = useState<
    undefined | string
  >();
  const [inputValue, setInputValue] = useState(value);
  const [optionsWithIds, setOptionsWithIds] = useState<OptionWithId[]>([]);

  useEffect(() => {
    const newOptions: OptionWithId[] = [];
    const newOptionsIds: string[] = [];

    const minNumCharacters = Math.ceil(Math.log2(options.length));

    options.forEach(option => {
      const optionId = getRandomID(newOptionsIds, minNumCharacters);
      newOptionsIds.push(optionId);
      newOptions.push({
        ...option,
        id: optionId
      });
    });

    setOptionsWithIds(newOptions);
  }, [options]);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    },
    []
  );

  useEffect(() => {
    const matchingOption = options.filter(option => option.value === value);

    if (value.length >= 1) {
      setInputValue(matchingOption[0].label);
    } else {
      setInputValue(value);
    }
  }, [value]);

  const toggleOptionsList = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (!isOpen && e.keyCode === 13) {
        // Enter Key
        setIsOpen(true);
      }
    },
    []
  );

  const handleOnFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleOnBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <SelectWrapper isOpen={isOpen} isFocused={isFocused}>
      <SelectControl onClick={toggleOptionsList}>
        <CurrentValue
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          aria-owns={listId}
          aria-expanded={isOpen}
          role="combobox"
          aria-haspopup={true}
          onChange={handleInputChange}
          value={inputValue}
          onKeyDown={handleKeyDown}
        />
        <ToggleButton
          onClick={toggleOptionsList}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-label={toggleLabel}
          aria-controls={listId}
          tab-index={-1}
        >
          {isOpen ? <ArrowUp /> : <ArrowDown />}
        </ToggleButton>
      </SelectControl>
      {isOpen && (
        <SelectOptions
          tabIndex={-1}
          role="listbox"
          aria-label={optionsLabel}
          id={listId}
        >
          {optionsWithIds.map(option => (
            <SelectOption
              onClick={() => {
                setIsOpen(false);
                onChange(option.value);
              }}
              id={option.id}
              role="option"
              key={option.id}
            >
              {option.label}
            </SelectOption>
          ))}
        </SelectOptions>
      )}
    </SelectWrapper>
  );
}

Select.defaultProps = {
  options: [],
  value: "",
  theme: defaultPrefabTheme
};

export default Select;
