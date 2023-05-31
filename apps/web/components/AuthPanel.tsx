import React from 'react';
import styles from '../pages/login.module.css';

type Props = {
  isLogin: boolean;
  toggle: () => void;
};

export function AuthPanel({ isLogin, toggle }: Props) {
  return (
    <>
      <h3 className={styles['Auth-panel-title']}>
        {isLogin ? 'Hello, Friend!' : 'Welcome Back!'}
      </h3>
      <button className={styles['Auth-panel-toggle']} onClick={toggle}>
        {isLogin ? 'Sign Up' : 'Login'}
      </button>
    </>
  );
}
