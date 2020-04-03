/* eslint-disable */

import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import renderer from 'react-test-renderer';

test('renders title text', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/ESL/i);
  expect(linkElement).toBeInTheDocument();
});

test('matches snapshot', () => {
  const snap = renderer.create(<App></App>).toJSON();
  expect(snap).toMatchSnapshot();
});


