# Prefab

[![Build Status](https://travis-ci.com/stephenvector/prefab.svg?branch=master)](https://travis-ci.com/stephenvector/prefab)
[![codecov](https://codecov.io/gh/stephenvector/prefab/branch/master/graph/badge.svg)](https://codecov.io/gh/stephenvector/prefab) [![Greenkeeper badge](https://badges.greenkeeper.io/stephenvector/prefab.svg)](https://greenkeeper.io/)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fstephenvector%2Fprefab.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fstephenvector%2Fprefab?ref=badge_shield)

A set of themeable UI components for React projects. Built with accessibility in mind. Uses `styled-components` for styling.

## Components

### Layout & Presentation

#### Container

```tsx
<Container fullWidth={boolean}>{...}</Container>
```
Prop | Type | Default
-----|------|--------
`fullWidth`|`boolean`| `false`

#### `<Row />`
- `<Column />`
- `<Table />`
- `<Box />`
- `<Padding />`

### Typography

- `<H1>`
- `<H2>`
- `<H3>`
- `<H4>`
- `<H5>`
- `<H6>`
- `<Display1>`
- `<Display2>`
- `<Display3>`
- `<Display4>`

### Form Controls

- `<Label />`
- `<Input />`
- `<Button />`
- `<ButtonGroup />`
- `<ColorPicker />`
- `<Slider />`
- `<Carousel />`
- `<Date Picker />`
- `<Select />`
- `<Radio />`
- `<Checkbox />`

### Status Indicators
- `<ProgressBar />`
- `<Loading />`

## Usage

- Control the component returned using `as` attribute: `<H1 as="div">Heading One Style Without H1 Tag</H1>`

## License

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fstephenvector%2Fprefab.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fstephenvector%2Fprefab?ref=badge_large)
  
## Tests

Functional tests performed courtesy of BrowserStack.

<a href="https://www.browserstack.com/">
  <img src="https://live.browserstack.com/images/opensource/browserstack-logo.svg" alt="BrowserStack Logo" width="192" height="42">
</a>
