import React, { useState } from "react";
import { lightTheme } from "./themes";

// const SelectWrapper = styled.div``;
// SelectWrapper.defaultProps = {
//   theme: lightTheme
// };

// const SelectControl = styled.div``;
// SelectControl.defaultProps = {
//   theme: lightTheme
// };

// const SelectCurrentValue = styled.div``;
// SelectCurrentValue.defaultProps = {
//   theme: lightTheme
// };

// const SelectArrow = styled.div``;
// SelectArrow.defaultProps = {
//   theme: lightTheme
// };

// const SelectList = styled.div``;
// SelectList.defaultProps = {
//   theme: lightTheme
// };

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

  return (
    <div>
      <div>
        <div>{value}</div>
        <button />
      </div>
      <div>
        {options.map((option, index) => (
          <div key={`${option.value}${index}`}>{option.label}</div>
        ))}
      </div>
    </div>
  );
}

Select.defaultProps = {
  multiple: false,
  options: []
};

export default Select;
