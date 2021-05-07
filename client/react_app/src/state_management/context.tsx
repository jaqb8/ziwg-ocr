import { createContext } from 'react';
import axios from 'axios';
import { useReducer } from 'react';
import reducer from './reducer';

type contextState = {
  state: { status: string; data: any };
  dispatch: any;
  postPicture: any;
};

const initialState = {
  status: 'start',
  data: null,
};

const initialContextState = {
  state: { status: 'start', data: null },
  dispatch: null,
  postPicture: null,
};

export const MyContext = createContext<contextState>(initialContextState);

type Props = {
  children: React.ReactNode;
};

export const ContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const checkIfSupportedType = (fileList: FileList) => {
    const types = ['image/png', 'image/jpeg'];

    if (types.every((type) => fileList![0].type !== type)) {
      return false;
    } else {
      return true;
    }
  };

  const postPicture = async (fileList: FileList) => {
    if (fileList!.length > 1) {
      dispatch({
        type: 'image-sending-failure',
        error: 'Too many images selected',
      });
    } else if (!checkIfSupportedType(fileList!)) {
      dispatch({
        type: 'image-sending-failure',
        error: 'Image type not supported',
      });
    } else {
      var formData = new FormData();

      formData.append('picture', fileList![0]);

      await axios
        .post('http://127.0.0.1:8000/photo-process/', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((response) =>
          dispatch({ type: 'image-sent', response: response.data })
        )
        .catch((error) => {
          dispatch({ type: 'image-sending-failure', error: error.message });
        });
    }
  };

  return (
    <MyContext.Provider
      value={{
        state,
        dispatch,
        postPicture,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
