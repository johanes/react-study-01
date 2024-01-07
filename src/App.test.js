import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Aligenigenas title', () => {
  render(<App />);
  const appTile = screen.getByText(/Aligenigenas/i);
  expect(appTile).toBeInTheDocument();
});
