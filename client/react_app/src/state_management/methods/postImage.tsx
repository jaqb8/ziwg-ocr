import axios from 'axios';
import { Dispatch } from 'react';
import { Action } from '../types';

const postImage = async (image: File, dispatch: Dispatch<Action>) => {
  dispatch({ type: 'start-loading' });

  var formData = new FormData();
  formData.append('image', image);

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
};

export default postImage;
