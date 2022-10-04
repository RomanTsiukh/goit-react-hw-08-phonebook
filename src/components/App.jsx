import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { Slide, toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import { CenteredLoader } from './App.styled';
import Section from 'components/Section';
import { filterChange, getFilterValue } from 'redux/filterSlice';
import {
  useGetContactsQuery,
  useAddContactMutation,
} from 'redux/contactsSlice';
import Loader from './Loader';
import { Box } from './Box';
import styled from 'styled-components';

const Title = styled.h1`
  text-align: center;
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
  margin-top: ${p => p.theme.space[0]}px;
  margin-bottom: ${p => p.theme.space[0]}px;
`;

export const App = () => {
  const filter = useSelector(getFilterValue);
  const dispatch = useDispatch();
  const [addContact, { isLoading: isPosting }] = useAddContactMutation();
  const { data: contacts } = useGetContactsQuery();

  const handleSubmit = async e => {
    try {
      e.preventDefault();
      const name = e.target.name.value;
      const phone = e.target.number.value;
      const contactsNames = contacts.find(contact => contact.name === name);
      const contact = { id: nanoid(), name, phone };

      if (contactsNames) {
        alert(`Sorry, ${name} is already in your contacts`);
        return;
      }

      await addContact(contact);
      toast.success('Contact added successfully!');
      e.target.reset();
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong. Try again.');
    }
  };

  const handleChangeFilter = e => {
    const inputValue = e.target.value;
    dispatch(filterChange(inputValue));
  };

  const createFilter = () => {
    const normalizedFilterValue = filter.toLocaleLowerCase();
    if (contacts) {
      const filteredContacts = contacts.filter(
        contact =>
          contact.name.toLocaleLowerCase().includes(normalizedFilterValue) ||
          contact.phone.toString().includes(normalizedFilterValue)
      );
      return filteredContacts;
    }
  };

  const filteredContacts = createFilter();

  return contacts ? (
    <Box
      bg="firstBgColor"
      color="mainTextColor"
      p={4}
      pl={5}
      pr={5}
      width="400px"
      fontFamily="Ubuntu"
      fontSize={16}
      border="2px solid"
      borderRadius={16}
    >
      <Section>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          theme={'colored'}
          transition={Slide}
          closeOnClick
        />

        <Title>Phonebook</Title>
        <Section>
          <ContactForm onSubmit={handleSubmit} isPosting={isPosting} />
        </Section>

        <Section title="Contacts">
          <Filter handleChangeFilter={handleChangeFilter} filter={filter} />
          <ContactList filter={filteredContacts} />
        </Section>
      </Section>
    </Box>
  ) : (
    <CenteredLoader>
      <Loader size={50} />
    </CenteredLoader>
  );
};
