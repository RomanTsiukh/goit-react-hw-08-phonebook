import { Formik, ErrorMessage, Form, Field } from 'formik';
import { object, string } from 'yup';
import { Notify } from 'notiflix';
import PropTypes from 'prop-types';
import { ButtonAddContact, Error } from './ContactForm.styled';
import { Box } from '../Box';

export const NAME_MATCH =
  "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";

export const nameError = 'Invalid name';
export const nameNumber = 'Invalid number';
export const requiredError = 'This field is required';
export const SignupSchema = object().shape({
  name: string()
    .required(requiredError)
    .matches(
      "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
      nameError
    ),
  phone: string()
    .required(requiredError)
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      nameNumber
    ),
});

export const FormError = ({ name }) => {
  return (
    <ErrorMessage name={name} render={message => Notify.failure(message)} />
  );
};

const ContactForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        phone: '',
      }}
      validationSchema={SignupSchema}
    >
      <Form onSubmit={onSubmit}>
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
          render={msg => <Error>{nameNumber}</Error>}
        />
        <ButtonAddContact type="submit">Add contact</ButtonAddContact>
      </Form>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isPosting: PropTypes.bool,
};

export default ContactForm;
