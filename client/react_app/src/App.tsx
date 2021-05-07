import Decription from './components/Decription';
import CameraButton from './components/CameraButton';
import UploadButton from './components/UploadButton';
import ReturnButton from './components/ReturnButton';
import './styles.css';
import { MyContext } from './state_management/context';
import EAdditiveList from './components/EAdditiveList';
import { useContext, useState } from 'react';
import WebcamPage from './components/WebcamPage';

const testObject = {
  code: 803,
  name: 'An additive name',
  description: 'some description of E-additive',
};

function App() {
  const { state } = useContext(MyContext);
  const [webcamInstruction, setInstruction] = useState('');

  return (
    <div className='page-size d-flex align-items-center justify-content-center'>
      <div className='body-size w-75 h-75 d-flex flex-column justify-content-around text-center align-items-center'>
        <div>
          <h3>Product Composition Recognizer</h3>
          {state.status === 'webcam-page' ? (
            <div className='lead description-size'>{webcamInstruction}</div>
          ) : (
            <Decription className='lead description-size' />
          )}
        </div>
        {state.status === 'start' && (
          <div>
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
            <div>{state.error}</div>
            <ReturnButton />
          </>
        )}
        {state.status === 'displaying-data' && (
          <>
            <EAdditiveList list={[testObject, testObject]} />
            <ReturnButton />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
