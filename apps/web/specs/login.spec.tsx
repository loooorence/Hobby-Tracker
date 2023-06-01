import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Login from '../pages/login';

// mock useRouter
jest.mock('next/router', () => ({
  useRouter: jest.fn()
}));
// mock useMutation
jest.mock('@tanstack/react-query', () => ({
  useMutation: jest.fn().mockReturnValue(({ mutate: jest.fn() }))
}));

it('login: toggle once', async () => {
  render(<Login />);
  const btn = screen.getByRole('button', {
    name: 'Sign Up',
  });
  fireEvent.click(btn);
  await waitFor(() => {
    const title = screen.getByRole('heading', {
      name: 'Sign Up',
    });
    expect(title).toBeTruthy();
  });
});

it('login: toggle twice', async () => {
  render(<Login />);
  let btn = screen.getByRole('button', {
    name: 'Sign Up',
  });
  fireEvent.click(btn);
  await waitFor(() => {
    const title = screen.getByRole('heading', {
      name: 'Sign Up',
    });
    expect(title).toBeTruthy();
  });

  btn = screen.getByRole('button', {
    name: 'Login',
  });
  fireEvent.click(btn);
  await waitFor(() => {
    const title = screen.getByRole('heading', {
      name: 'Login',
    });
    expect(title).toBeTruthy();
  });
});
