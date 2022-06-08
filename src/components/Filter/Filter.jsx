import PropTypes from 'prop-types';

import styles from './filter.module.css';

const Filter=({ onChange, filter })=> {
  return (
    <>
      <label className={styles.filter} htmlFor="filter">
        {' '}
        Find by Name
      </label>
      <input
        type="text"
        value={filter}
        name="filter"
        id="filter"
        placeholder="Find Contact by Name"
        className={styles.filterInput}
        onChange={onChange}
        
      />
    </>
  );
}

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default Filter;