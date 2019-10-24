import React, {
  createRef,
  useCallback,
  useEffect,
  useRef,
  useState
} from "react";
import { getRandomID } from "./utils";
import { defaultPrefabTheme } from "./";
import { ArrowDown, ArrowUp } from "@stephenvector/picto";
import styled from "styled-components";

const SelectOptionListItem = styled.li`
  display: block;
  cursor: pointer;
  user-select: "none";
  :hover,
  :focus {
    background: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.bg};
  }
`;

function SelectOption(props: SelectOptionProps) {
  const ref = useRef<HTMLLIElement | null>(null);
  const { option, focused, selected, toggleOption } = props;

  const handleKeyDown = useCallback(function handleSelect(
    e: React.KeyboardEvent<HTMLLIElement>
  ) {
    if (e.type === "keydown") {
    }
  },
  []);

  const handleClick = useCallback(function handleClick(
    e: React.MouseEvent<HTMLLIElement>
  ) {
    toggleOption(option.value);
  },
  []);

  const handleFocusBlur = useCallback(
    (e: React.FocusEvent<HTMLLIElement>) => {
      if (e.type === "blur") {
      }
    },
    [ref]
  );

  return (
    <SelectOptionListItem
      ref={ref}
      onKeyDown={handleKeyDown}
      onMouseDown={handleClick}
      tabIndex={0}
      id={option.id}
      role="option"
      key={option.id}
      onFocus={handleFocusBlur}
      onBlur={handleFocusBlur}
    >
      {option.label}
    </SelectOptionListItem>
  );
}

SelectOption.defaultProps = { theme: defaultPrefabTheme };

type OptionValue = any;

export type Option = {
  label: string;
  value: OptionValue;
};

export type OptionWithId = Option & { id: string };

export type SelectOptionProps = {
  option: OptionWithId;
  focused: boolean;
  selected: boolean;
  toggleOption(value: OptionValue): void;
};

const SelectControl = styled.div`
  height: ${p => p.theme.sizing.formControls};
  border-radius: ${p => p.theme.sizing.borderRadius};
  display: flex;
  min-width: 10rem;
  cursor: pointer;
  width: 100%;
`;
SelectControl.defaultProps = { theme: defaultPrefabTheme };

const CurrentValue = styled.div`
  font: inherit;
  padding: 0;
  margin: 0;
  border: none;
  text-indent: 0.5rem;
  height: ${p => p.theme.sizing.formControls};
  line-height: ${p => p.theme.sizing.formControls};
  flex: 1 1 auto;
  background: transparent;
`;
CurrentValue.defaultProps = { theme: defaultPrefabTheme };

const ToggleButton = styled.button`
  border: none;
  width: ${p => p.theme.sizing.formControls};
  height: ${p => p.theme.sizing.formControls};
  padding: 0;
  font: inherit;
  margin: 0;
  background: transparent;
  border-left: ${p => p.theme.sizing.border} solid ${p => p.theme.colors.meta};
`;
ToggleButton.defaultProps = { theme: defaultPrefabTheme };

const SelectOptions = styled.ul<{ isOpen: boolean }>`
  background: ${p => p.theme.colors.bg};
  border-bottom-left-radius: ${p => p.theme.sizing.borderRadius};
  border-bottom-right-radius: ${p => p.theme.sizing.borderRadius};
  box-shadow: inset 0 0 0
    ${p => `${p.theme.sizing.border} ${p.theme.colors.accent}`};
  display: ${p => (p.isOpen ? "block" : "none")};
  left: 0;
  line-height: ${p => p.theme.sizing.formControls};
  list-style-type: none;
  margin: 0;
  margin-top: calc(${p => p.theme.sizing.border} * -1);
  max-height: 13rem;
  min-height: ${p => p.theme.sizing.formControls};
  overflow-y: auto;
  padding: 0;
  position: absolute;
  right: 0;
  text-indent: 0.5rem;
  top: ${p => p.theme.sizing.formControls};
  z-index: 1000;
`;
SelectOptions.defaultProps = { theme: defaultPrefabTheme };

const SelectWrapper = styled.div<{ isOpen: boolean; isFocused: boolean }>`
  position: relative;
  background: transparent;
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

export type SelectProps = {
  listId?: string;
  toggleLabel?: string;
  optionsLabel?: string;
  options: Option[];
  value: OptionValue;
  onChange(newValue: OptionValue): void;
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
  const [selectedOptionOrOptions, setSelectedOptionId] = useState<
    undefined | typeof value
  >();

  const [currentValueLabel, setCurrentValueLabel] = useState("");
  const inputRef = createRef<HTMLInputElement>();
  const [optionsWithIds, setOptionsWithIds] = useState<OptionWithId[]>([]);

  useEffect(() => {
    let match = options.find(i => i.value === value);
    if (match !== undefined) {
      setCurrentValueLabel(match.label);
    } else {
      setCurrentValueLabel(value);
    }
  }, [value, options]);

  useEffect(() => {
    const newOptions: OptionWithId[] = [];
    const newOptionsIds: string[] = [];

    const minNumCharacters = Math.ceil(Math.log2(options.length));

    options.forEach((option: Option) => {
      const optionId = getRandomID(newOptionsIds, minNumCharacters);
      newOptionsIds.push(optionId);
      newOptions.push({
        ...option,
        id: optionId
      });
    });

    setOptionsWithIds(newOptions);
  }, [options]);

  const toggleOption = useCallback(
    (optionValue: OptionValue) => {
      onChange(optionValue);
      setIsOpen(false);
    },
    [value]
  );

  const toggleOptionsList = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen, setIsOpen]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (!isOpen && e.keyCode === 13) {
        // Enter Key
        setIsOpen(true);
      } else if (isOpen && e.keyCode === 38) {
        // Up Arrow
      } else if (isOpen && e.keyCode === 40) {
        // Down Arrow
      }
    },
    []
  );

  const handleControlClick = useCallback(() => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
      if (inputRef.current !== null) {
        inputRef.current.focus();
      }
    }
  }, [isOpen, inputRef]);

  return (
    <SelectWrapper tabIndex={0} isOpen={isOpen} isFocused={isFocused}>
      <SelectControl onClick={handleControlClick}>
        <CurrentValue>{currentValueLabel}</CurrentValue>
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
      <SelectOptions
        tabIndex={-1}
        role="listbox"
        aria-label={optionsLabel}
        id={listId}
        isOpen={isOpen}
        aria-hidden={!isOpen}
      >
        {optionsWithIds.map(option => {
          const selected = option.value === value;

          return (
            <SelectOption
              toggleOption={toggleOption}
              focused={false}
              selected={selected}
              option={option}
              key={option.id}
            />
          );
        })}
      </SelectOptions>
    </SelectWrapper>
  );
}

export default Select;
