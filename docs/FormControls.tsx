import React from "react";
import {
  Box,
  Button,
  Carousel,
  Container,
  Row,
  Column,
  DatePicker,
  PrefabThemeProvider,
  Slider,
  Hr,
  Textarea,
  Display1,
  Display2,
  Display3,
  Display4,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  defaultPrefabTheme,
  RadioGroup,
  Select,
  Paragraph,
  Input,
  Label
} from "../src";

import CodeSnippet from "./CodeSnippet";
import DemoController from "./DemoController";

const DOCS_SELECT_OPTIONS = [
  {
    label: "Green",
    value: "green"
  },
  {
    label: "Blue",
    value: "blue"
  },
  {
    label: "Red",
    value: "red"
  },
  {
    label: "Purple",
    value: "purple"
  },
  {
    label: "Orange",
    value: "orange"
  },
  {
    label: "Pink",
    value: "Pink"
  },
  {
    label: "Grey",
    value: "grey"
  }
];

const FormControls: React.FC = () => {
  return (
    <div>
      <Display4>Form Controls</Display4>

      <Box marginBottom={1}>
        <Label>Input</Label>
        <DemoController initialValue="Text Value Goes Here">
          {({ value, onChange }) => <Input value={value} onChange={onChange} />}
        </DemoController>
      </Box>
      <Box marginBottom={1}>
        <Label>Textarea</Label>
        <DemoController initialValue="Text Value Goes Here">
          {({ value, onChange }) => (
            <Textarea value={value} onChange={onChange} />
          )}
        </DemoController>
      </Box>
      <Box marginBottom={1}>
        <Label>Date Picker</Label>
        <DemoController initialValue={new Date().valueOf()}>
          {({ value, onChange }) => (
            <DatePicker value={value} onChange={onChange} />
          )}
        </DemoController>
      </Box>
      <Box marginBottom={1}>
        <Label>Slider</Label>
        <DemoController initialValue={66}>
          {({ value, onChange }) => (
            <Slider
              value={value}
              min={0}
              max={100}
              step={1}
              onChange={onChange}
            />
          )}
        </DemoController>
      </Box>
      <Box marginBottom={1}>
        <Label>Select</Label>
        <DemoController initialValue="">
          {({ value, onChange }) => (
            <Select
              optionsLabel="Select a color"
              toggleLabel="Open"
              listId="examplelist"
              onChange={onChange}
              value={value}
              options={DOCS_SELECT_OPTIONS}
            />
          )}
        </DemoController>
      </Box>
      <Box marginBottom={1}>
        <Label>Radio Group</Label>
        <DemoController initialValue="red">
          {({ value, onChange }) => (
            <RadioGroup
              onChange={onChange}
              value={value}
              options={DOCS_SELECT_OPTIONS}
            />
          )}
        </DemoController>
      </Box>
    </div>
  );
};

export default FormControls;
