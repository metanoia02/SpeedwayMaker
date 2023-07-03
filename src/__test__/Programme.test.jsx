const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => mockedUsedNavigate,
}));

jest.mock('../fetchApi');

import Programme from '../Pages/Programme';
import { render, act } from '@testing-library/react';

test('renders the programme page', async () => {
  await act(async () => render(<Programme />));
});
