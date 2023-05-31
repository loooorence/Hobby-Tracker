import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';
import { gql } from '../data-access/graphql-client';
import styles from '../pages/login.module.css';
import { Icon } from '@iconify/react';

type Props = {
  isLogin: boolean;
};

export function AuthForm({ isLogin }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const router = useRouter();
  const login = useMutation({
    mutationKey: ['Login'],
    mutationFn: async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const re = await gql.Login({ input: { email, password } });
      console.log(re);
      return re;
    },
    onSuccess: () => {
      router.push('/');
    },
  });

  //TODO: add error msgs
  //I want to have error msgs like "bad username", "bad pw", etc
  //but currently mutation.error.message is pretty hard to parse
  //and graphql error responses can be pretty vague eg: "Bad Request Exception"
  //when username or pw is too short/long
  //so Im not sure what the best way to approach this is

  return (
    <form onSubmit={login.mutate} className={styles['Auth-form']}>
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
        <div
          className={
            login.isError
              ? `${styles['Auth-input']} ${styles['has-error']}`
              : styles['Auth-input']
          }
        >
          <Icon icon="mdi:user" />
          <input
            type="text"
            name="name"
            placeholder="Username"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      )}
      <div
        className={
          login.isError
            ? `${styles['Auth-input']} ${styles['has-error']}`
            : styles['Auth-input']
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
      <div
        className={
          login.isError
            ? `${styles['Auth-input']} ${styles['has-error']}`
            : styles['Auth-input']
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
