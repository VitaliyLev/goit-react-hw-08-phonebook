import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsLoading, selectError } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/ContactsFilter/Filter';
import { Box } from './ContactsPage.styled';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <main>
      <Box>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <div>
          <Filter />
          {isLoading && !error && <b>Request in progress...</b>}
          <ContactList />
        </div>
      </Box>
    </main>
  );
};

export default ContactsPage;
