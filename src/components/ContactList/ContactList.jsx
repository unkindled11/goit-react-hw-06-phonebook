import PropTypes from 'prop-types';

import ContactItem from './ContactItem';

import styles from './contactList.module.css';

const ContactList = ({ contacts, deleteNumber }) => {
  const elements = contacts.map(({ id, name, number }) => (
    <ContactItem
      key={id}
      options={[name, number, id]}
      deleteNumber={deleteNumber}
    />
  ));

  return <ul className={styles.list}>{elements}</ul>;
};

export default ContactList;

ContactList.defaultProps = {
  contacts: [],
};

ContactList.propTypes = {
  deleteNumber: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
