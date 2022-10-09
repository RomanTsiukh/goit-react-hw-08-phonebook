import { useEffect } from 'react';
import { Box } from 'components/Box';
import ContactForm from 'components/ContactForm';
import Section from 'components/Section';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import { useAuth } from 'hooks';
import { Title } from './Contacts.styled';
import { useGetContactsQuery } from 'redux/contactsSlice';
import Loader from 'components/Loader';

const Contacts = () => {
  const { isLoggedIn } = useAuth();
  const { data: contacts, refetch } = useGetContactsQuery();

  useEffect(() => {
    if (isLoggedIn) {
      refetch();
    }
  }, [isLoggedIn, refetch]);

  return contacts ? (
    <Box
      m="auto"
      mt={5}
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
      <Title>Phonebook</Title>
      <Section>
        <ContactForm />
      </Section>

      <Section title="Contacts">
        {contacts.length > 0 && <Filter />}
        <ContactList />
      </Section>
    </Box>
  ) : (
    <Loader />
  );
};

export default Contacts;
