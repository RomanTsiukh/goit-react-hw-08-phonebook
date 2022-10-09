import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contactsSlice';
import Loader from 'components/Loader';
import { Text, Container, ButtonDelet } from './Contact.styled';

const Contact = ({ id, name, number }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  const handleDelete = async () => {
    try {
      await deleteContact(id);
      toast.success('Contact deleted successfully!');
    } catch (error) {
      toast.error('Something is wrong. Try again!');
    }
  };

  return (
    <Container>
      <Text>
        {name}: {number}
      </Text>
      <ButtonDelet type="button" onClick={handleDelete} disabled={isDeleting}>
        {isDeleting ? <Loader /> : 'Delete contact'}
      </ButtonDelet>
    </Container>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default Contact;
