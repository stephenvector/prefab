import React, {
  createRef,
  useCallback,
  useEffect,
  useRef,
  useState
} from "react";
import { SelectOptionProps, SelectProps, OptionValue } from "./types";
import { useOptionsWithIds } from "./hooks";

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
    <li
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
    </li>
  );
}

function Select(
  { value, onChange, options, listId, toggleLabel, optionsLabel }: SelectProps,
  ref: React.Ref<HTMLDivElement>
) {
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
    <div ref={ref} tabIndex={0}>
      <div onClick={handleControlClick}>
        <div>{currentValueLabel}</div>
        <button
          onClick={toggleOptionsList}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-label={toggleLabel}
          aria-controls={listId}
          tab-index={-1}
        >
          {isOpen ? "ArrowUp" : "ArrowDown"}
        </button>
      </div>
      <ul
        tabIndex={-1}
        role="listbox"
        aria-label={optionsLabel}
        id={listId}
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
      </ul>
    </div>
  );
}

export default React.forwardRef(Select);
