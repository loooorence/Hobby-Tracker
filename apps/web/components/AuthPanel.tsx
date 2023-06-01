import React from 'react';
import styles from './authpanel.module.css';

type Props = {
  isLogin: boolean;
  toggle: () => void;
};

export function AuthPanel({ isLogin, toggle }: Props) {
  return (
    <>
      <h3 className={styles.title}>
        {isLogin ? 'Hello, Friend!' : 'Welcome Back!'}
      </h3>
      <button className={styles.toggle} onClick={toggle}>
        {isLogin ? 'Sign Up' : 'Login'}
      </button>
    </>
  );
}
