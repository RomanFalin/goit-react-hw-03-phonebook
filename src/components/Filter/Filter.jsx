import PropTypes from 'prop-types';
import { InputPlace } from './Filter.styled';

const Filter = ({ filterValue, handleInputChange }) => {
  return (
    <label>
      <h3>Find contacts by name</h3>
      <InputPlace
        type="text"
        name="filter"
        onChange={handleInputChange}
        value={filterValue}
      />
    </label>
  );
};

Filter.propTypes = {
  filterValue: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

export default Filter;
