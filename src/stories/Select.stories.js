import React from "react";
import { storiesOf } from "@storybook/react";
import { Select } from "../";

const STORY_OPTIONS = [
  { label: "One", value: "One" },
  { label: "Two", value: "Two" },
  { label: "Three", value: "Three" }
];

storiesOf("Select").add("default", () => <Select options={STORY_OPTIONS} />);
