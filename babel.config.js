module.exports = {
  presets: [
    "@babel/preset-react",
    ["@babel/preset-env", { targets: { node: "12" } }],
    "@babel/preset-typescript"
  ]
};
