import React, { useContext } from 'react';
import { MyContext } from '../state_management/context';
import GenericButton from './GenericButton';

interface Props {}

const CameraButton = (props: Props) => {
  const { dispatch } = useContext(MyContext);
  const onClick = () => dispatch({ type: 'open-webcam' });

  return (
    <GenericButton
      text='Take a photo'
      iconClass='fas fa-camera'
      onClick={onClick}
    />
  );
};

export default CameraButton;
