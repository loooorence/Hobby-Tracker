import { createContext, useContextSelector } from 'use-context-selector';
import { produce } from 'immer';
import { AuthAction, AuthContextI, AuthState } from './Auth.types';
import { useReducer } from 'react';

type Props = {
  children: React.ReactNode;
};

const initialContext: AuthContextI = {
  state: {
    user: {
      id: '',
      email: '',
      name: '',
    },
    isLoggedIn: false,
  },
  dispatch: () => console.error('Tasks Context not initialized'),
};

export const AuthContext = createContext<AuthContextI>(initialContext);

export const AuthProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(tasksReducer, initialContext.state);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

const tasksReducer = produce((draft: AuthState, action: AuthAction) => {
  switch (action.type) {
    case 'SET_USER': {
      draft.user = { ...draft.user, ...action.payload };
      break;
    }
    case 'LOG_IN': {
      draft.isLoggedIn = true;
      break;
    }
    case 'LOG_OUT': {
      draft.user = initialContext.state.user;
      draft.isLoggedIn = false;
    }
  }
});

export const useAuth = () =>
  useContextSelector(AuthContext, (root) => root.state);
export const useAuthDispath = () =>
  useContextSelector(AuthContext, (root) => root.dispatch);
