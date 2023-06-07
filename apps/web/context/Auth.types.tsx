export type AuthState = {
  user: User;
  isLoggedIn: boolean;
};

export type User = {
  id: string;
  name: string;
  email: string;
};

export interface AuthContextI {
  state: AuthState;
  dispatch: (arg: AuthAction) => void;
}

export interface Action<T, P = never> {
  type: T;
  payload?: P;
}

export type AuthAction =
  | Action<'SET_USER', User>
  | Action<'LOG_IN'>
  | Action<'LOG_OUT'>;
