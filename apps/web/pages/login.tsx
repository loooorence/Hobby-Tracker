import { useEffect, useRef, useState } from 'react';
import styles from './login.module.css';
import { Icon } from '@iconify/react';

export function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const authContainer = useRef<HTMLDivElement>(null);
  const authPanelContainer = useRef<HTMLDivElement>(null);

  const [tweenTime, setTweenTime] = useState(200);
  useEffect(() => {
    setTweenTime(window.parseInt(getComputedStyle(document.body).getPropertyValue('--auth-tween-time')));
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
    <div ref={authContainer} className={styles["Auth-container"]}>
      <div ref={authPanelContainer} className={styles["Auth-panel-container"]}>
        <AuthPanel isLogin={isLogin} toggle={toggle}></AuthPanel>
      </div>
      <div className={styles["Auth-form-container"]}>
        <AuthForm isLogin={isLogin}></AuthForm>
      </div>
    </div>
  );
}

function AuthPanel({ isLogin, toggle }: { isLogin: boolean, toggle: () => void }) {
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
  return (
    <form action="#" className={styles["Auth-form"]}>
      <h2 className={styles["Auth-title"]}>{isLogin ? 'Login' : 'Sign Up'}</h2>
      <div className={styles["Auth-social-media"]}>
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
      <div className={styles["Auth-note"]}>
        {isLogin ? 'or use your email:' : 'or use your email for registration:'}
      </div>
      {!isLogin && (
        <div className={styles["Auth-input"]}>
          <Icon icon="mdi:user" />
          <input type="text" placeholder="Username" />
        </div>
      )}
      <div className={styles["Auth-input"]}>
        <Icon icon="mdi:envelope" />
        <input type="email" placeholder="Email" />
      </div>
      <div className={styles["Auth-input"]}>
        <Icon icon="material-symbols:lock" />
        <input type="password" placeholder="Password" />
      </div>
      {isLogin && (
        <a href='#' className={styles['Auth-forgot']}>Forgot your password?</a>
      )}
      <input
        type="submit"
        value={isLogin ? 'Login' : 'Sign Up'}
        className={styles["Auth-submit"]}
      ></input>
    </form>
  );
}

export default Login;
