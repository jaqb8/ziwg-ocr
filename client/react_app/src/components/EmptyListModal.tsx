import GenericModal from './GenericModal';

interface Props {}

const EmptyListModal = (props: Props) => {
  return (
    <GenericModal
      variant='primary'
      alert_heading='There is nothing here...'
      alert_text='It seems like no e-additives was recognized in your photo.'
    />
  );
};

export default EmptyListModal;
