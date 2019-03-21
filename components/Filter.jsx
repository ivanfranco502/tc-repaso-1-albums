import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ query, onChange, ...props }) => (
  <input
    type="text"
    value={query}
    placeholder="Search"
    onChange={e => onChange(e.target.value)}
    {...props}
    />
);

Filter.propTypes = {
  query: PropTypes.string,
  onChange: PropTypes.func
};

Filter.defaultProps = {
  query: '',
  onChange: () => {}
};

export default Filter;