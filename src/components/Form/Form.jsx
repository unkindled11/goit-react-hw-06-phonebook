import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './form.module.css';

const Form = ({ onSubmit }) => {
  const [state, setState] = useState({
    name: '',
    number: '',
  });

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
    setState({ name: '', number: '' });
  };

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    setState({
      ...state,
      [name]: value,
    });
  };

  const { name, number } = state;

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label} htmlFor="name">
        Name
      </label>
      <input
        value={name}
        type="text"
        name="name"
        id="name"
        placeholder="Enter Name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleChange}
        className={styles.input}
      />
      <br />
      <label className={styles.label} htmlFor="tel">
        Number
      </label>
      <input
        value={number}
        type="tel"
        name="number"
        id="tel"
        placeholder="Enter Number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleChange}
        className={styles.input}
      />
      <br />
      <button className={styles.btn} type="submit">
        Add Contact
      </button>
    </form>
  );
};

export default Form;

Form.defaultProps = {
  onSubmit: function () {},
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
