/* eslint-disable */

import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import Dictionary from './Dictionary';
import renderer from 'react-test-renderer';

test('renders component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Dictionary></Dictionary>, div);
});

test('matches snapshot', () => {
  const snap = renderer.create(<Dictionary></Dictionary>).toJSON();
  expect(snap).toMatchSnapshot();
});