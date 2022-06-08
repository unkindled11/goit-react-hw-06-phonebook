import { useState, useCallback } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import Form from './Form';
import ContactList from './ContactList/ContactList';
import Filter from './Filter';

import { getContacts } from 'redux/contacts/selector';
import { actions } from 'redux/contacts/slice';

import styles from './myNumbers.module.css';

const MyNumbers = () => {
  const contacts = useSelector(getContacts, shallowEqual);

  const dispatch = useDispatch();

  const [filter, setFilter] = useState('');

  const addContacts = useCallback(
    data => {
      const isDuplicated = contacts.find(item => item.name === data.name);
      if (isDuplicated) {
        alert(`${data.name} is already in your Phonebook`);
        return;
      }

      //? add new  contact logic

      return dispatch(actions.add(data));
    },
    [contacts, dispatch]
  );

  const changeFilter = useCallback(
    e => {
      setFilter(e.target.value);
    },
    [setFilter]
  );

  const deleteNumber = useCallback(
    id => {
      return dispatch(actions.remove(id));
    },
    [dispatch]
  );

  const getFilteredContacts = () => {
    if (!filter) {
      return contacts;
    }
    const filterRequest = filter.toLowerCase();
    const filteredContacts = contacts.filter(({ name }) => {
      const res = name.toLowerCase().includes(filterRequest);
      return res;
    });

    return filteredContacts;
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Phonebook</h1>
      <Form onSubmit={addContacts} />

      <h2 className={styles.title}>Contacts</h2>

      <Filter onChange={changeFilter} filter={filter} />

      <ContactList
        contacts={getFilteredContacts()}
        deleteNumber={deleteNumber}
      />
    </div>
  );
};

export default MyNumbers;
