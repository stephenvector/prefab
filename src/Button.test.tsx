import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react';
import Button from './Button';
import StylesContextProvider from "./StylesContextProvider"

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it('Button renders', () => {
  const {queryByLabelText, getByLabelText} = render(
    <Button>Button</Button>,
    {
    wrapper: StylesContextProvider
    }
  );
});