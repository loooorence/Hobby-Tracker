import { FormEvent, useEffect, useRef, useState } from 'react';
import styles from './login.module.css';
import { Icon } from '@iconify/react';
import { useMutation } from '@tanstack/react-query';
import { gql } from '../data-access/graphql-client';
import { useRouter } from 'next/router';
import { AuthPanel } from '../components/AuthPanel';
import { AuthForm } from '../components/AuthForm';

export function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const authContainer = useRef<HTMLDivElement>(null);
  const authPanelContainer = useRef<HTMLDivElement>(null);

  const [tweenTime, setTweenTime] = useState(200);
  useEffect(() => {
    setTweenTime(
      window.parseInt(
        getComputedStyle(document.body).getPropertyValue('--auth-tween-time')
      )
    );
  });

  const toggle = () => {
    authContainer.current?.classList.toggle(styles['signup']);

    if (!isLogin) {
      authContainer.current?.classList.add(styles['login2signup']);
      setTimeout(() => {
        authContainer.current?.classList.remove(styles['login2signup']);
      }, 2 * tweenTime);

      authPanelContainer.current?.classList.add(styles['login-out']);
      setTimeout(() => {
        authPanelContainer.current?.classList.remove(styles['login-out']);
      }, 2 * tweenTime);
    } else {
      authContainer.current?.classList.add(styles['signup2login']);
      setTimeout(() => {
        authContainer.current?.classList.remove(styles['signup2login']);
      }, 2 * tweenTime);

      authPanelContainer.current?.classList.add(styles['signup-out']);
      setTimeout(() => {
        authPanelContainer.current?.classList.remove(styles['signup-out']);
      }, 2 * tweenTime);
    }

    setTimeout(() => {
      setIsLogin(!isLogin);
    }, tweenTime);
  };

  return (
    <div ref={authContainer} className={styles['Auth-container']}>
      <div ref={authPanelContainer} className={styles['Auth-panel-container']}>
        <AuthPanel isLogin={isLogin} toggle={toggle}></AuthPanel>
      </div>
      <div className={styles['Auth-form-container']}>
        <AuthForm isLogin={isLogin}></AuthForm>
      </div>
    </div>
  );
}

export default Login;
