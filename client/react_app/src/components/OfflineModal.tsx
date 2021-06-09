import GenericModal from './GenericModal'

interface Props {}

const OfflineModal = ({}: Props) => {

  return (
    <GenericModal variant="warning" alert_heading="Ops! You're in offline mode!" alert_text="This functionality requires network connection to work"/>
  );
};

export default OfflineModal; 