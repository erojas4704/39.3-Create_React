import { render, screen } from '@testing-library/react';
import App from './App';
import Board from './Board';
import Light from './Light';

test('renders', () => {
  render(<App />);
});

test('renders cells properly', () => {
  render(<Light />);
});

test('renders board properly', () => {
  render(<Board />);
});

test('compares against snapshot', () => {
  const { asFragment } = render(<App />);
  expect(asFragment).toMatchSnapshot();
});