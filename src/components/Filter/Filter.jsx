import React from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Filter = ({ query, onChange }) => (
  <Form>
    <Form.Control value={query} type="text" placeholder="Search" onChange={onChange} />
  </Form>
);

Filter.propTypes = {
  query: PropTypes.string,
  onChange: PropTypes.func,
};

Filter.defaultProps = {
  query: '',
  onChange: () => {},
};

export default Filter;
