import React, { useContext } from 'react';
import {MyContext} from '../state_management/context';
import GenericButton from './GenericButton';

interface Props {}

const UploadButton = (props: Props) => {

  const { postImage } = useContext(MyContext);

  const hiddenFileInput = React.useRef<HTMLInputElement>(null);

  const onClick = () => {
    hiddenFileInput?.current?.click();
  };

  return (
    <>
    <GenericButton text='Upload an image' iconClass='fas fa-upload' onClick={onClick}/>
    <div>
        <input type="file" ref={hiddenFileInput} onChange={ (e) => postImage(e.target.files as FileList) } style={{display: 'none'}} accept="image/*"/>
    </div>
    </>
  );
};

export default UploadButton;
