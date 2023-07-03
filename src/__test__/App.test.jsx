const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

jest.mock('../fetchApi');

import App from '../Pages/App';
import { render, screen, act } from '@testing-library/react';

test('renders the landing page', async () => {
  await act(async () => render(<App />));

  expect(screen.getByRole('button')).toHaveTextContent(/Create Programme/);
});
