import { useContext } from 'react';
import { MyContext } from '../state_management/context';
import GenericButton from './GenericButton';

interface Props {}

const ReturnButton = (props: Props) => {
  const { dispatch } = useContext(MyContext);

  const onClick = () => dispatch({ type: 'start' });
  return (
    <GenericButton text='Go back' iconClass='fas fa-redo' onClick={onClick} />
  );
};

export default ReturnButton;
