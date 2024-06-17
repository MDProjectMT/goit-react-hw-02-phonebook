import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

const Filter = ({ filter, onChange }) => {
  const searchId = nanoid();
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '340px',
          padding: '15px 0 0 0',
          marginLeft: '30px',
          gap: '10px',
        }}
      >
        <label htmlFor={searchId}>Find contacts by name</label>
        <input
          id={searchId}
          value={filter}
          type="text"
          name="filter"
          placeholder="write name"
          onChange={onChange}
        />
      </div>
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
