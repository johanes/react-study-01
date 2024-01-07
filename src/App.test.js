import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Aligenigenas title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Aligenigenas/i);
  expect(linkElement).toBeInTheDocument();
});
