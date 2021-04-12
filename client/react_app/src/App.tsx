import Decription from './components/Decription';
import CameraButton from './components/CameraButton';
import UploadButton from './components/UploadButton';
import ReturnButton from './components/ReturnButton';
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
    <div className='page-size d-flex align-items-center justify-content-center'>
      <div className='body-size w-75 h-75 d-flex flex-column justify-content-between text-center align-items-center'>
        <div>
          <h3>Product Composition Recognizer</h3>
          <Decription className='lead description-size' />
        </div>
        {state.status === 'start' && (
        <>
          <CameraButton />
          <UploadButton />
        </>)}
        {state.status === 'image-sent' && (
          <div>todo</div>
        )}
        {state.status === 'image-sending-failure' && (
          <>
          <div>{state.data}</div>
            <ReturnButton/>
          </>

        )}
        {state.status === 'additive-data-received' && (
          <div>todo</div>
        )}
        <div />
      </div>
    </div>
    </MyContext.Provider>
  );
}

export default App;
