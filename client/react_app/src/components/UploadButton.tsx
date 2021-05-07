import React, { useContext } from 'react';
import {MyContext} from '../state_management/context';
import GenericButton from './GenericButton';

interface Props {}

const UploadButton = (props: Props) => {

  const { postPicture } = useContext(MyContext);

  const hiddenFileInput = React.useRef<HTMLInputElement>(null);

  const onClick = () => {
    hiddenFileInput?.current?.click();
  };

  return (
    <>
    <GenericButton text='Upload an image' iconClass='fas fa-upload' onClick={onClick}/>
    <div>
        <input type="file" ref={hiddenFileInput} onChange={ (e) => postPicture(e.target.files) } style={{display: 'none'}} accept="image/*"/>
    </div>
    </>
  );
};

export default UploadButton;
