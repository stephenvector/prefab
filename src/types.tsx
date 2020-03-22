export interface PrefabFieldProps {
  name: string;
  label: string;
}

export type OptionValue = any;

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

export type SelectProps = {
  listId?: string;
  toggleLabel?: string;
  optionsLabel?: string;
  options: Option[];
  value: OptionValue;
  onChange(newValue: OptionValue): void;
};

export type RadioProps = {
  options: Option[];
  value: OptionValue;
  onChange(newValue: OptionValue): void;
};

export type RadioOptionProps = {
  isActive: boolean;
  onClick(value: OptionValue): void;
  option: OptionWithId;
};

export interface Theme {
  colors: ColorPalette;
  breakpoints: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  sizing: {
    formControls: string;
    borderRadius: string;
    border: string;
    remSize: string;
  };
  typefaces: {
    base: string;
    headings: string;
  };
}

export type ColorPalette = {
  bg: string;
  fg: string;
  accent: string;
  meta: string;
};
