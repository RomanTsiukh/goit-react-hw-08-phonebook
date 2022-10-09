import { Formik, Form, ErrorMessage, Field } from 'formik';
import {
  useGetContactsQuery,
  useAddContactMutation,
} from 'redux/contactsSlice';
import { toast } from 'react-toastify';
import Loader from 'components/Loader';
import { nameError, numberError, schema } from 'constants';
import { Error, ButtonAddContact } from './ContactForm.styled';
import { Box } from '@mui/system';

const ContactForm = () => {
  const { data: contacts } = useGetContactsQuery();
  const [addContact, { isLoading }] = useAddContactMutation();

  const handleSubmit = async e => {
    try {
      e.preventDefault();
      const form = e.currentTarget.elements;
      const name = form.name.value;
      const number = form.number.value;

      const matcheContactName = contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      );
      const newContact = {
        name,
        number,
      };

      if (matcheContactName) {
        toast.warn(`Sorry, ${name} is already in your contacts!`);
        return;
      } else {
        await addContact(newContact);
        toast.success('The contact is added to the list');
        e.target.reset();
      }
    } catch (error) {
      toast.error('Something is wrong. Try again!');
    }
  };

  return (
    <Formik
      initialValues={{
        name: '',
        phone: '',
      }}
      validationSchema={schema}
    >
      <Form onSubmit={handleSubmit}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={3}
        >
          <h3>Name</h3>
          <Field
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Box>
        <ErrorMessage name="name" render={msg => <Error>{nameError}</Error>} />
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <h3>Number</h3>
          <Field
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Box>
        <ErrorMessage
          name="number"
          render={msg => <Error>{numberError}</Error>}
        />
        <ButtonAddContact type="submit">
          {isLoading ? <Loader /> : 'Add contact'}
        </ButtonAddContact>
      </Form>
    </Formik>
  );
};

export default ContactForm;
