/* eslint-disable */

import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import ModeSwitcher from './ModeSwitcher';
import renderer from 'react-test-renderer';

test('renders component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ModeSwitcher></ModeSwitcher>, div);
});

test('matches snapshot', () => {
  const snap = renderer.create(<ModeSwitcher></ModeSwitcher>).toJSON();
  expect(snap).toMatchSnapshot();
});