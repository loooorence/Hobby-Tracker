import { FormEvent, useEffect, useRef, useState } from 'react';
import styles from './login.module.css';
import { Icon } from '@iconify/react';
import { useMutation } from '@tanstack/react-query';
import { gql } from '../data-access/graphql-client';
import { useRouter } from 'next/router';

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

function AuthPanel({
  isLogin,
  toggle,
}: {
  isLogin: boolean;
  toggle: () => void;
}) {
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

function AuthForm({ isLogin }: { isLogin: boolean }) {
  const router = useRouter();
  const mutation = useMutation({
    mutationFn: (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const data = new FormData(event.target as HTMLFormElement);

      const password = data.get("password") as string;
      const name = data.get("name") as string;
      const email = data.get("email") as string;

      return gql.CreateUser({
        password,
        name,
        email
      });
    },
    onSuccess: () => {
      router.push('/');
    }
  });
  //TODO: add error msgs
  //I want to have error msgs like "bad username", "bad pw", etc
  //but currently mutation.error.message is pretty hard to parse
  //and graphql error responses can be pretty vague eg: "Bad Request Exception"
  //when username or pw is too short/long
  //so Im not sure what the best way to approach this is

  return (
    <form onSubmit={mutation.mutate} className={styles['Auth-form']}>
      <h2 className={styles['Auth-title']}>{isLogin ? 'Login' : 'Sign Up'}</h2>
      <div className={styles['Auth-social-media']}>
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
      <div className={styles['Auth-note']}>
        {isLogin ? 'or use your email:' : 'or use your email for registration:'}
      </div>
      {!isLogin && (
        <div className={mutation.isError ? `${styles['Auth-input']} ${styles['has-error']}` : styles['Auth-input']}>
          <Icon icon="mdi:user" />
          <input type="text" name="name" placeholder="Username" />
        </div>
      )}
      <div className={mutation.isError ? `${styles['Auth-input']} ${styles['has-error']}` : styles['Auth-input']}>
        <Icon icon="mdi:envelope" />
        <input type="email" name="email" placeholder="Email" />
      </div>
      <div className={mutation.isError ? `${styles['Auth-input']} ${styles['has-error']}` : styles['Auth-input']}>
        <Icon icon="material-symbols:lock" />
        <input type="password" name="password" placeholder="Password" />
      </div>
      {isLogin && (
        <a href="#" className={styles['Auth-forgot']}>
          Forgot your password?
        </a>
      )}
      <input
        type="submit"
        value={isLogin ? 'Login' : 'Sign Up'}
        className={styles['Auth-submit']}
      ></input>
    </form>
  );
}

export default Login;
