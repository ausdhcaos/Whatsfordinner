import { render, screen } from '@testing-library/react';
import foot from './footer';

test('renders learn react link', () => {
  render(<foot />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


