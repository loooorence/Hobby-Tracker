import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { FormEvent, useEffect, useState } from 'react';
import { gql } from '../data-access/graphql-client';
import styles from './AuthForm.module.css';
import { Icon } from '@iconify/react';
import { useAuthDispath } from '../context/Auth.context';
import { User } from '../context/Auth.types';

type Props = {
  isLogin: boolean;
};

export function AuthForm({ isLogin }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const router = useRouter();
  const dispatch = useAuthDispath();

  const login = useMutation({
    mutationKey: ['Login'],
    mutationFn: async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const response = await gql.Login({ input: { email, password } });
      if (
        response.Login.user.email &&
        response.Login.user.name &&
        response.Login.user.id
      ) {
        dispatch({ type: 'SET_USER', payload: response.Login.user as User });
        dispatch({ type: 'LOG_IN' });
      }
    },
    onSuccess: () => {
      router.push('/');
    },
  });
  const signUp = useMutation({
    mutationKey: ['SignUp'],
    mutationFn: async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const response = await gql.SignUp({ input: { email, password, name } });
      if (
        response.SignUp.user.email &&
        response.SignUp.user.name &&
        response.SignUp.user.id
      ) {
        dispatch({ type: 'SET_USER', payload: response.SignUp.user as User });
        dispatch({ type: 'LOG_IN' });
      }
    },
    onSuccess: () => {
      router.push('/');
    },
  });

  // name form validation
  useEffect(() => {
    if (name.length === 0) {
      // no error message, but still have error border
      setNameError(' ');
      return;
    }
    if (name.length < 3) {
      setNameError('Name too short');
      return;
    }
    if (name.length > 100) {
      setNameError('Name too long');
      return;
    }
    // valid name so don't set any error text
    setNameError('');
  }, [name]);
  // email form validation
  useEffect(() => {
    // simplified regex for basic email checking
    // https://stackoverflow.com/a/9204568
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      // valid email so don't set any error text
      setEmailError('');
    } else {
      setEmailError('Invalid email');
    }
  }, [email]);
  // password form validation
  useEffect(() => {
    if (password.length === 0) {
      // no error message, but still have error border
      setPasswordError(' ');
      return;
    }
    if (password.length < 8) {
      setPasswordError('Password too short');
      return;
    }
    if (password.length > 100) {
      setPasswordError('Password too long');
      return;
    }
    // valid password so don't set any error text
    setPasswordError('');
  }, [password]);

  return (
    <form
      onSubmit={isLogin ? login.mutate : signUp.mutate}
      className={styles.form}
    >
      <h2 className={styles.title}>{isLogin ? 'Login' : 'Sign Up'}</h2>
      <div className={styles['social-media']}>
        <button aria-label="login with facebook">
          <Icon icon="basil:facebook-solid" />
        </button>
        <button aria-label="login with google">
          <Icon icon="mdi:google" />
        </button>
        <button aria-label="login with twitter">
          <Icon icon="mdi:twitter" />
        </button>
      </div>
      <div className={styles.note}>
        {isLogin ? 'or use your email:' : 'or use your email for registration:'}
      </div>
      {!isLogin && (
        <>
          <div
            className={
              nameError !== ''
                ? `${styles.input} ${styles['has-error']}`
                : styles.input
            }
          >
            <Icon icon="mdi:user" />
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          {nameError !== '' && (
            <span className={styles['error-text']}>{nameError}</span>
          )}
        </>
      )}

      <div
        className={
          emailError !== ''
            ? `${styles.input} ${styles['has-error']}`
            : styles.input
        }
      >
        <Icon icon="mdi:envelope" />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      {emailError !== '' && (
        <span className={styles['error-text']}>{emailError}</span>
      )}

      <div
        className={
          passwordError !== ''
            ? `${styles.input} ${styles['has-error']}`
            : styles.input
        }
      >
        <Icon icon="material-symbols:lock" />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {passwordError !== '' && (
        <span className={styles['error-text']}>{passwordError}</span>
      )}
      {!isLogin && signUp.isError && (
        <span className={styles['error-text']}>
          Account already exists, use another email
        </span>
      )}

      {/* {isLogin && (
        <a href="#" className={styles.forgot}>
          Forgot your password?
        </a>
      )} */}

      <input
        type="submit"
        value={isLogin ? 'Login' : 'Sign Up'}
        className={styles.submit}
        disabled={
          !isLogin
            ? nameError !== '' || emailError !== '' || passwordError !== ''
            : emailError !== '' || passwordError !== ''
        }
      ></input>
    </form>
  );
}
