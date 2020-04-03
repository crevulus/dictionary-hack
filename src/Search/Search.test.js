/* eslint-disable */

import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import Search from './Search';
import renderer from 'react-test-renderer';

test('renders component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Search></Search>, div);
});

test('matches snapshot', () => {
  const snap = renderer.create(<Search></Search>).toJSON();
  expect(snap).toMatchSnapshot();
});