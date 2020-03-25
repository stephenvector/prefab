import styled from "@emotion/styled";
import { Theme } from "./types";

export { Theme } from "./types";

export const lightTheme: Theme = {
  colors: {
    bg: "#fff",
    fg: "#000",
    accent: "#0121DF",
    meta: "#bbb"
  },
  breakpoints: {
    xs: "0",
    sm: "480px",
    md: "768px",
    lg: "1024px",
    xl: "1200px"
  },
  sizing: {
    formControls: "3rem",
    borderRadius: "3px",
    border: "2px",
    remSize: "18px"
  },
  typefaces: {
    base: "sans-serif",
    headings: "sans-serif"
  }
};

export const darkTheme: Theme = Object.assign({}, lightTheme);

export const defaultPrefabTheme = lightTheme;

export const Hr = styled.hr``;

export { default as Button } from "./Button";
export { default as Box } from "./Box";
export { default as Carousel } from "./Carousel";
export { default as Code } from "./Code";
export { default as Column } from "./Column";
export { default as Container } from "./Container";
export { default as DatePicker } from "./DatePicker";
export { default as Input } from "./Input";
export { default as Label } from "./Label";
export { default as Loading } from "./Loading";
export { default as ProgressBar } from "./ProgressBar";
export { default as RadioGroup } from "./RadioGroup";
export { default as Row } from "./Row";
export { default as Select } from "./Select";
export { default as Slider } from "./Slider";
export {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Display1,
  Display2,
  Display3,
  Display4,
  Paragraph
} from "./Typography";
export { default as Textarea } from "./Textarea";
export { default as PrefabThemeProvider } from "./PrefabThemeProvider";

export { Table, Thead, Td, Tr, Th, Tbody } from "./Table";

export {
  isValidRGBColor,
  isValidHex,
  darkenHex,
  lightenHex,
  getHexFromRGB,
  getRGBFromHex,
  min,
  max
} from "./utils";

export { default as Form, useField } from "./Form";
export { default as TextField } from "./fields/TextField";
