import React, { useContext } from 'react';
import MyContext from '../helpers/context';
import GenericButton from './GenericButton';

interface Props {}

const CameraButton = (props: Props) => {
  const { dispatch } = useContext(MyContext);

  const onClick = () => {
    dispatch({ type: 'image-sent', response: [] });
  };

  return (
    <GenericButton
      text='Take a photo'
      iconClass='fas fa-camera'
      onClick={onClick}
    />
  );
};

export default CameraButton;
