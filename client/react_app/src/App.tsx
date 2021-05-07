import Decription from './components/Decription';
import CameraButton from './components/CameraButton';
import UploadButton from './components/UploadButton';
import ReturnButton from './components/ReturnButton';
import './styles.css';
import { MyContext } from './state_management/context';
import EAdditiveList from './components/EAdditiveList';
import { useContext } from 'react';

function App() {
  const { state } = useContext(MyContext);

  return (
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
          </>
        )}
        {state.status === 'loading' && <div>Loading...</div>}
        {state.status === 'error' && (
          <>
            <div>{state.error}</div>
            <ReturnButton />
          </>
        )}
        {state.status === 'displaying-data' && (
          <>
            <EAdditiveList list={state.data.eadditives} />
            <ReturnButton />
          </>
        )}
        <div />
      </div>
    </div>
  );
}

export default App;
