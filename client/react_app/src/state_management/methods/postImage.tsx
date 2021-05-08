import axios from 'axios';
import { Dispatch } from 'react';
import { Action } from '../types';

const checkIfSupportedType = (fileList: FileList) => {
  const types = ['image/png', 'image/jpeg'];

  if (types.every((type) => fileList![0].type !== type)) {
    return false;
  } else {
    return true;
  }
};

const postImage = async (fileList: FileList, dispatch: Dispatch<Action>) => {
  if (fileList!.length > 1) {
    dispatch({
      type: 'image-sending-failure',
      error: 'Too many images selected',
    });
  } else if (!checkIfSupportedType(fileList!)) {
    dispatch({
      type: 'image-sending-failure',
      error: 'Image type not supported',
    });
  } else {
    dispatch({ type: 'start-loading' });

    var formData = new FormData();
    formData.append('image', fileList![0]);
    
    await axios
      .post('http://127.0.0.1:8000/photo-process/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) =>
        dispatch({ type: 'additive-data-received', response: response.data })
      )
      .catch((error) => {
        dispatch({ type: 'image-sending-failure', error: error.message });
      });
  }
};

export default postImage;
