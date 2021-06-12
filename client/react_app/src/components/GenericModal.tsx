import { useContext, useState } from 'react';
import {MyContext} from '../state_management/context';
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

interface Props {
    variant: string,
    alert_heading: string,
    alert_text: string
}

const GenericModal = ({ variant, alert_heading, alert_text }: Props) => {
  
  const { dispatch } = useContext(MyContext);

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
        <Alert variant={variant} onClose={() => handleClose()} dismissible>
            <Alert.Heading>
                {alert_heading}
                <p />
            </Alert.Heading>
            <p>
                {alert_text}
            </p>
            <p />
            <hr />
            <div className="d-flex justify-content-end">
            <Button onClick={() => handleClose()} variant={variant}>
                Close
            </Button>
            </div>
      </Alert>
    </Modal>
    </>
  );
};

export default GenericModal; 