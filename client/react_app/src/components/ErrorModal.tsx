import { useContext, useState } from 'react';
import {MyContext} from '../state_management/context';
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

interface Props {}

const ErrorModal = ({}: Props) => {
  const { state, dispatch } = useContext(MyContext);

  const [show, setShow] = useState(true);

  const handleClose = () => {
      dispatch({type: 'start'});
      setShow(false);
  }

  return (
    <>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered={true}
    >
        <Alert variant="danger" onClose={() => handleClose()} dismissible>
            <Alert.Heading>
                You got an error!
                <p />
            </Alert.Heading>
            <p>
                {state.error}
            </p>
            <p />
            <hr />
            <div className="d-flex justify-content-end">
            <Button onClick={() => handleClose()} variant="danger">
                Close
            </Button>
            </div>
      </Alert>
    </Modal>
    </>
  );
};

export default ErrorModal; 