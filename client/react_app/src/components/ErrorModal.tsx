import { useContext } from 'react';
import { MyContext } from '../state_management/context';
import { undefinedErrorMessage } from '../utility/errorMessages';
import GenericModal from './GenericModal'

interface Props {}

const ErrorModal = (props: Props) => {
  const { state } = useContext(MyContext);

  return (
    <GenericModal variant="danger" alert_heading="You got an error!" alert_text={state.error ? state.error : undefinedErrorMessage}/>
  );
};

export default ErrorModal; 