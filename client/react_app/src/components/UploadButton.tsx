import axios from 'axios';
import React, { useContext } from 'react';
import MyContext from '../helpers/context';
import GenericButton from './GenericButton';

interface Props {}

const UploadButton = (props: Props) => {

  const { dispatch } = useContext(MyContext);

  const hiddenFileInput = React.useRef<HTMLInputElement>(null);

  const onClick = () => {
    hiddenFileInput?.current?.click();
  };

  const checkIfSupportedType = (fileList: FileList) => {

    const types = ['image/png', 'image/jpeg']

    if (types.every(type => fileList![0].type !== type)) {
      return false;
    }
    else{
      return true;
    }

  }

  const handleChange = (fileList: FileList | null) => {

    if(fileList!.length > 1){
      dispatch({type: 'image-sending-failure', error: 'Too many images selected'})
    }
    else if(!checkIfSupportedType(fileList!)){
      dispatch({type: 'image-sending-failure', error: 'Image type not supported'})
    }
    else{

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
        }
  };

  return (
    <>
    <GenericButton text='Upload an image' iconClass='fas fa-upload' onClick={onClick}/>
    <div>
        <input type="file" ref={hiddenFileInput} onChange={ (e) => handleChange(e.target.files) } style={{display: 'none'}} accept="image/*"/>
    </div>
    </>
  );
};

export default UploadButton;
