/* eslint-disable */

import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import Thesaurus from './Thesaurus';
import renderer from 'react-test-renderer';

test('renders component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Thesaurus></Thesaurus>, div);
});

test('matches snapshot', () => {
  const snap = renderer.create(<Thesaurus></Thesaurus>).toJSON();
  expect(snap).toMatchSnapshot();
});