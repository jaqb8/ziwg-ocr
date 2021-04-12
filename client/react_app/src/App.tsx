import Decription from './components/Decription';
import CameraButton from './components/CameraButton';
import UploadButton from './components/UploadButton';
import './styles.css';
import { useReducer } from 'react';
import MyContext from './helpers/context';
import reducer from './helpers/reducer';

const initialState = {
  status: 'start',
  data: null
};

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MyContext.Provider value={{state, dispatch}}>
      {state.status === 'start' && (
    <div className='page-size d-flex align-items-center justify-content-center'>
      <div className='body-size w-75 h-75 d-flex flex-column justify-content-between text-center align-items-center'>
        <div>
          <h3>Product Composition Recognizer</h3>
          <Decription className='lead description-size' />
        </div>
        <CameraButton />
        <UploadButton />
        <div />
      </div>
    </div>)}
    {state.status === 'image-sent' && (
      <div>todo</div>
    )}
    {state.status === 'image-sending-failure' && (
      <div>todo</div>
    )}
    {state.status === 'additive-data-received' && (
      <div>todo</div>
    )}
    </MyContext.Provider>
  );
}

export default App;
