import React, { useContext } from 'react';
import { MyContext } from '../state_management/context';
import GenericButton from './GenericButton';

interface Props {}

const UploadButton = (props: Props) => {
  const { dispatch, postImage } = useContext(MyContext);

  const hiddenFileInput = React.useRef<HTMLInputElement>(null);
  const onClick = () => {
    hiddenFileInput?.current?.click();
  };

  const checkIfSupportedType = (fileList: FileList) => {
    const types = ['image/png', 'image/jpeg'];

    if (types.every((type) => fileList![0].type !== type)) {
      return false;
    } else {
      return true;
    }
  };

  const postImageFile = (fileList: FileList | null) => {
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

      postImage(fileList![0], dispatch);
    }
  };

  return (
    <>
      <GenericButton
        text='Upload an image'
        iconClass='fas fa-upload'
        onClick={onClick}
      />
      <div>
        <input
          type='file'
          ref={hiddenFileInput}
          onChange={(e) => postImageFile(e.target.files)}
          style={{ display: 'none' }}
          accept='image/*'
        />
      </div>
    </>
  );
};

export default UploadButton;
