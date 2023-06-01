import { render, screen } from '@testing-library/react';
import { AuthPanel } from '../../components/AuthPanel';

it('AuthPanel: sign up has login btn', () => {
  render(<AuthPanel isLogin={false} toggle={() => {}} />);
  const btn = screen.getByRole('button', {
    name: 'Login',
  });
  expect(btn).toBeTruthy();
});

it('AuthPanel: login has sign up btn', () => {
  render(<AuthPanel isLogin toggle={() => {}} />);
  const btn = screen.getByRole('button', {
    name: 'Sign Up',
  });
  expect(btn).toBeTruthy();
});
