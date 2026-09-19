import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the app title', () => {
  render(<App />);
  expect(screen.getByText(/generador de placas de calles/i)).toBeInTheDocument();
});
