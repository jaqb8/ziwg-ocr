import { useContext } from 'react';
import {MyContext} from '../state_management/context';
import GenericModal from './GenericModal'

interface Props {}

const ErrorModal = ({}: Props) => {
  const { state } = useContext(MyContext);

  return (
    <GenericModal variant="danger" alert_heading="You got an error!" alert_text={state.error ? state.error : "Undefined error"}/>
  );
};

export default ErrorModal; 