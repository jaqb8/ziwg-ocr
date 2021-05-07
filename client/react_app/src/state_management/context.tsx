import { Dispatch, createContext } from 'react';
import { useReducer } from 'react';
import reducer from './reducer';
import { Action, State } from './types';
import postImage from './methods/postImage';

// creating context
type ContextState = {
  state: State;
  dispatch: Dispatch<Action>;
  postImage: (files: FileList, dispatch: Dispatch<Action>) => void;
};

const initialState = {
  status: 'start',
} as State;

const initialContextState = {
  state: initialState,
  dispatch: () => {},
  postImage: postImage,
};

export const MyContext = createContext<ContextState>(initialContextState);

// creating provider, publishing context
type ProviderProps = {
  children: React.ReactNode;
};

export const ContextProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MyContext.Provider
      value={{
        state,
        dispatch,
        postImage: postImage,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
