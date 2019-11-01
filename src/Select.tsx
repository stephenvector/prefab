import React, {
  createRef,
  useCallback,
  useEffect,
  useRef,
  useState
} from "react";
import {
  defaultPrefabTheme,
  SelectOptionProps,
  SelectProps,
  OptionValue
} from "./";
import { useOptionsWithIds } from "./hooks";
import { ArrowDown, ArrowUp } from "@stephenvector/picto";
import styled from "./styled";

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
  /* margin-top: calc(${p => p.theme.sizing.border} * -1); */
  max-height: 13rem;
  min-height: ${p => p.theme.sizing.formControls};
  overflow-y: auto;
  padding: 0;
  position: absolute;
  right: 0;
  text-indent: 0.5rem;
  top: calc(100% + 2px);
  z-index: 1000;
`;
SelectOptions.defaultProps = { theme: defaultPrefabTheme };

const SelectWrapper = styled.div<{ isOpen: boolean; isFocused: boolean }>(
  props => {
    return {
      position: "relative",
      borderRadius: props.theme.sizing.borderRadius,
      borderBottomLeftRadius: props.isOpen
        ? 0
        : props.theme.sizing.borderRadius,
      borderBottomRightRadius: props.isOpen
        ? 0
        : props.theme.sizing.borderRadius,
      boxShadow: `inset 0 0 0 ${props.theme.sizing.border} ${props.theme.colors.meta}`,
      ":focus": {
        boxShadow: `inset 0 0 0 ${props.theme.sizing.border} ${props.theme.colors.accent}`
      }
    };
  }
);

// `
//   position: relative;
//   background: red;
//   border-radius: ${p => p.theme.sizing.borderRadius};
//   ${p => {
//     if (p.isFocused) {
//       return `${SelectControl} { box-shadow: inset 0 0 0 ${p.theme.sizing.border} ${p.theme.colors.accent}}`;
//     } else {
//       return `${SelectControl} { ;
//     }
//   }};
//   border-top-left-radius: ${p => (p.isOpen ? 0 : p.theme.sizing.borderRadius)};
//   border-top-right-radius: ${p => (p.isOpen ? 0 : p.theme.sizing.borderRadius)};
// `;
SelectWrapper.defaultProps = { theme: defaultPrefabTheme };

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
  const [currentValueLabel, setCurrentValueLabel] = useState("");
  const inputRef = createRef<HTMLInputElement>();
  const optionsWithIds = useOptionsWithIds(options);

  useEffect(() => {
    let match = options.find(i => i.value === value);
    if (match !== undefined) {
      setCurrentValueLabel(match.label);
    } else {
      setCurrentValueLabel(value);
    }
  }, [value, options]);

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
        {optionsWithIds.map(option => (
          <SelectOption
            toggleOption={toggleOption}
            focused={false}
            selected={option.value === value}
            option={option}
            key={option.id}
          />
        ))}
      </SelectOptions>
    </SelectWrapper>
  );
}

export default Select;
