import axios from 'axios';
import React, { useContext } from 'react';
import MyContext from '../helpers/context';
import GenericButton from './GenericButton';

interface Props {}

const UploadButton = (props: Props) => {

  const { state, dispatch } = useContext(MyContext);

  const hiddenFileInput = React.useRef<HTMLInputElement>(null);

  const onClick = () => {
    hiddenFileInput?.current?.click();
  };

  const handleChange = (fileList: FileList | null) => {

    var formData = new FormData();

    formData.append('image', fileList![0]);

    axios.post('http://127.0.0.1:5000/test', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
        .then(response => dispatch({type: 'image-sent', response: response.data}))
        .catch(error => {
            dispatch({ type: 'image-sending-failure', error: error.message });
        });
    
  };

  return (
    <>
    <GenericButton text='Upload an image' iconClass='fas fa-upload' onClick={onClick}/>
    <div>
        <input type="file" ref={hiddenFileInput} onChange={ (e) => handleChange(e.target.files) } style={{display: 'none'}}/>
    </div>
    </>
  );
};

export default UploadButton;
