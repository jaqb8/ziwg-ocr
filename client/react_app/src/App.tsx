import Decription from './components/Decription';
import CameraButton from './components/CameraButton';
import UploadButton from './components/UploadButton';
import ReturnButton from './components/ReturnButton';
import './styles.css';
import { useReducer } from 'react';
import MyContext from './helpers/context';
import reducer from './helpers/reducer';
import EAdditiveList from './components/EAdditiveList';
import GenericButton from './components/GenericButton';

const initialState = {
  status: 'start',
  data: null,
};

const testObject = {
  code: 621,
  name: 'Monosodium glutamate',
  description:
    'It is used in cooking as a flavor enhancer with an umami taste that intensifies the meaty, savory flavor of food, as naturally occurring glutamate does in foods such as stews and meat soups.',
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const TestButton = () => (
    <>
      <GenericButton
        text='Simulate receiving data'
        iconClass=''
        onClick={() => {
          dispatch({ type: 'additive-data-received', response: [] });
        }}
      />
      <div className='m-1' />
    </>
  );

  return (
    <MyContext.Provider value={{ state, dispatch }}>
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
          {state.status === 'image-sent' && (
            <>
              <div>Loading...</div>
              {/* test button - TODO remove it after the presentation */}
              <div className='d-flex flex-column'>
                <TestButton />
                <ReturnButton />
              </div>
              {/* <ReturnButton /> */}
            </>
          )}
          {state.status === 'image-sending-failure' && (
            <>
              <div>{state.data}</div>
              {/* test button - TODO remove it after the presentation */}
              <div className='d-flex flex-column'>
                <TestButton />
                <ReturnButton />
              </div>
              {/* <ReturnButton /> */}
            </>
          )}
          {state.status === 'additive-data-received' && (
            <>
              <EAdditiveList list={[testObject, testObject]} />
              <ReturnButton />
            </>
          )}
          <div />
        </div>
      </div>
    </MyContext.Provider>
  );
}

export default App;
