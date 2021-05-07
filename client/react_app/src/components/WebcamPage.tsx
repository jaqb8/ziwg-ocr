import { useState, useRef, useCallback } from 'react';
import Webcam from 'react-webcam';

interface Props {}

const WebcamPage = (props: Props) => {
  const webcamRef = useRef<Webcam>(null);
  const [imgSrc, setImgSrc] = useState<string>('');

  const capture = useCallback(() => {
    if (!!webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      setImgSrc(imageSrc as string);
    }
  }, [webcamRef, setImgSrc]);

  return (
    <>
      <Webcam audio={false} ref={webcamRef} screenshotFormat='image/jpeg' />
      <button onClick={capture}>Capture photo</button>
      {imgSrc && <img src={imgSrc} alt='Screenshot of your webcam has been taken' />}
    </>
  );
};

export default WebcamPage;
