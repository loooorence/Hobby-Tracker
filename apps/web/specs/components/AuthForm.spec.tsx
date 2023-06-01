import { render, screen } from '@testing-library/react';
import { AuthForm } from '../../components/AuthForm';

// mock useRouter
jest.mock('next/router', () => ({
  useRouter: jest.fn()
}));
// mock useMutation
jest.mock('@tanstack/react-query', () => ({
  useMutation: jest.fn().mockReturnValue(({ mutate: jest.fn() }))
}));

it('AuthForm: sign up has name placeholder', () => {
  render(<AuthForm isLogin={false}/>);
  const name = screen.getByPlaceholderText('Name');
  expect(name).toBeTruthy();
});

it('AuthForm: sign up has email placeholder', () => {
  render(<AuthForm isLogin={false}/>);
  const email = screen.getByPlaceholderText('Email');
  expect(email).toBeTruthy();
});

it('AuthForm: sign up has password placeholder', () => {
  render(<AuthForm isLogin={false}/>);
  const password = screen.getByPlaceholderText('Password');
  expect(password).toBeTruthy();
});

it('AuthForm: sign up has sign up btn', () => {
  render(<AuthForm isLogin={false}/>);
  const btn = screen.getByRole('button', {
    name: 'Sign Up',
  });
  expect(btn).toBeTruthy();
});

it('AuthForm: sign up has sign up title', () => {
  render(<AuthForm isLogin={false}/>);
  const title = screen.getByRole('heading', {
    name: 'Sign Up',
  });
  expect(title).toBeTruthy();
});

it('AuthForm: login does not have username placeholder', () => {
  render(<AuthForm isLogin/>);
  const username = screen.queryByText('Username');
  expect(username).toBeFalsy();
});

it('AuthForm: login has email placeholder', () => {
  render(<AuthForm isLogin/>);
  const email = screen.getByPlaceholderText('Email');
  expect(email).toBeTruthy();
});

it('AuthForm: login has password placeholder', () => {
  render(<AuthForm isLogin/>);
  const password = screen.getByPlaceholderText('Password');
  expect(password).toBeTruthy();
});

it('AuthForm: login has login btn', () => {
  render(<AuthForm isLogin/>);
  const btn = screen.getByRole('button', {
    name: 'Login',
  });
  expect(btn).toBeTruthy();
});

it('AuthForm: login has login title', () => {
  render(<AuthForm isLogin/>);
  const title = screen.getByRole('heading', {
    name: 'Login',
  });
  expect(title).toBeTruthy();
});

it('AuthForm: login with facebook', () => {
  render(<AuthForm isLogin={false} />);
  const btn = screen.getByLabelText('login with facebook');
  expect(btn).toBeTruthy();
});

it('AuthForm: login with google', () => {
  render(<AuthForm isLogin={false} />);
  const btn = screen.getByLabelText('login with google');
  expect(btn).toBeTruthy();
});

it('AuthForm: login with twitter', () => {
  render(<AuthForm isLogin={false} />);
  const btn = screen.getByLabelText('login with twitter');
  expect(btn).toBeTruthy();
});
