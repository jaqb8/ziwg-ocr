import React from 'react';
import { Button } from 'react-bootstrap';

interface Props {
  onClick: React.MouseEventHandler<HTMLElement>;
  iconClass: string;
  text: string;
}

const GenericButton = ({ onClick, iconClass, text }: Props) => {
  return (
    <Button variant='primary' className='button-size p-2 m-1' onClick={onClick}>
      <i className={iconClass} /> {text}
    </Button>
  );
};

export default GenericButton;
