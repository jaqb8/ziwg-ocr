import { useState, useRef, useCallback, useEffect, useContext } from 'react';
import { Button } from 'react-bootstrap';
import Webcam from 'react-webcam';
import GenericButton from './GenericButton';
import ReturnButton from './ReturnButton';
import postImage from '../state_management/methods/postImage';
import { MyContext } from '../state_management/context';

interface Props {
  setInstruction: (newInstruction: string) => void;
}

const WebcamPage = ({ setInstruction }: Props) => {
  const { dispatch } = useContext(MyContext);

  const webcamRef = useRef<Webcam>(null);

  const [imageSource, setImageSource] = useState<string>('');
  const [isInput, setIsInput] = useState<boolean>(false);

  const capture = useCallback(() => {
    if (!!webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot() as string;
      console.log(imageSrc.replace(/^data:image\/(png|jpg);base64,/, ''));
      setImageSource(imageSrc as string);
    }
  }, [webcamRef, setImageSource]);

  const reset = () => setImageSource('');
  const postImageUrl = () => {
    // var formData = new FormData();
    // formData.append('image', imageSource);

    postImage(imageSource, dispatch);
  };

  const noCameraInput =
    'Make sure to turn on your camera and give us permission to use it.';
  const cameraPreview = "Take a photo of your product's composition.";
  const photoTaken = 'A photo has been taken!';

  useEffect(() => {
    if (!isInput) setInstruction(noCameraInput);
    else {
      if (!imageSource) setInstruction(cameraPreview);
      else setInstruction(photoTaken);
    }
  }, [isInput, imageSource, setInstruction]);

  return imageSource ? (
    <>
      <img
        className='webcam-preview'
        src={imageSource}
        alt='Screenshot has been taken'
      />
      <div className='button-size d-flex flex-row'>
        <Button
          variant='primary'
          className='half-button-size p-2 mr-1'
          onClick={reset}
        >
          <i className='fas fa-redo' /> Redo
        </Button>
        <Button
          variant='success'
          className='half-button-size p-2 ml-1'
          onClick={postImageUrl}
        >
          <i className='fas fa-check' /> Confirm
        </Button>
      </div>
    </>
  ) : (
    <>
      <Webcam
        className='webcam-preview'
        onUserMedia={() => setIsInput(true)}
        audio={false}
        ref={webcamRef}
        screenshotFormat='image/png'
      />
      <div className='d-flex flex-column'>
        <GenericButton
          iconClass='fas fa-camera'
          text='Capture photo'
          onClick={capture}
        />
        <ReturnButton />
      </div>
    </>
  );
};

export default WebcamPage;
