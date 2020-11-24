import React from 'react';
import {render} from '@testing-library/react';
import StylesContextProvider from "./StylesContextProvider"

it('StylesContextProvider renders', () => {
  const {queryByLabelText, getByLabelText} = render(
    <StylesContextProvider>lol</StylesContextProvider>
  );
});