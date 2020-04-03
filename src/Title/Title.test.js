
/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import Title from './Title';
import renderer from 'react-test-renderer';

test('renders component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Title></Title>, div);
});

test('matches snapshot', () => {
  const snap = renderer.create(<Title></Title>).toJSON();
  expect(snap).toMatchSnapshot();
});