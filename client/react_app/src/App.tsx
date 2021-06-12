import Decription from './components/Decription';
import CameraButton from './components/CameraButton';
import UploadButton from './components/UploadButton';
import ReturnButton from './components/ReturnButton';
import ErrorModal from './components/ErrorModal';
import OfflineModal from './components/OfflineModal';
import './styles.css';
import { MyContext } from './state_management/context';
import EAdditiveList from './components/EAdditiveList';
import { useContext, useState } from 'react';
import WebcamPage from './components/WebcamPage';

function App() {
  const { state } = useContext(MyContext);
  const [webcamInstruction, setInstruction] = useState('');

  return (
    <div className='page-size d-flex align-items-center justify-content-center'>
      <div className='body-size w-75 h-75 d-flex flex-column justify-content-around text-center align-items-center'>
        <div className='mt-2 d-flex flex-column align-items-center'>
          <h3>Product Composition Recognizer</h3>
          {state.status === 'webcam-page' ? (
            <div className='lead description-size'>{webcamInstruction}</div>
          ) : (
            <Decription className='lead description-size' />
          )}
        </div>
        {state.status === 'start' && (
          <div className='d-flex flex-column'>
            <CameraButton />
            <UploadButton />
          </div>
        )}
        {state.status === 'webcam-page' && (
          <WebcamPage setInstruction={setInstruction} />
        )}
        {state.status === 'loading' && <div>Loading...</div>}
        {state.status === 'error' && (
          <>
            <CameraButton />
            <UploadButton />
            <ErrorModal />
          </>
        )}
        {state.status === 'offline' && (
          <>
            <CameraButton />
            <UploadButton />
            <OfflineModal/>
          </>
        )}
        {state.status === 'displaying-data' && (
          <>
            <EAdditiveList list={state.data.eadditives} />
            <ReturnButton />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
