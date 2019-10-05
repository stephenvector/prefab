import { configure, setAddon, addDecorator } from "@storybook/react";
// import { withInfo } from "@storybook/addon-info";
// import addWithDoc from "storybook-addon-props";
// const { addDecorator } = require('@storybook/react');
// const { withPropsTable } = require("storybook-addon-react-docgen");
// addDecorator(withPropsTable);
// setAddon(addWithDoc);
// addDecorator(withInfo);

configure(require.context("../src", true, /\.stories\.js$/), module);
