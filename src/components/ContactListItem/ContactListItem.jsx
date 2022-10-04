import { toast } from 'react-toastify';
import { Container, Text } from './ContactListItem.styled';
import { useDeleteContactMutation } from 'redux/contactsSlice';
import Loader from 'components/Loader';
import Button from 'components/Button';
import PropTypes from 'prop-types';

const ContactListItem = ({ name, phone, id }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  const handleDelete = async () => {
    try {
      await deleteContact(id);
      toast.success('Contact deleted successfully!');
    } catch (error) {
      toast.error('Something went wrong. Try again.');
    }
  };

  return (
    <>
      <Container>
        <Text>
          {name}: <span>{phone}</span>
        </Text>

        <Button click={handleDelete} isDeleting={isDeleting}>
          {isDeleting ? <Loader /> : 'Delete'}
        </Button>
      </Container>
    </>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContactListItem;
