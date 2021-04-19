import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

import { Container, Form } from 'react-bootstrap';
import UsersList from './components/UsersList/UsersList';
import Filter from './components/Filter/Filter';

// import testData from './data/hsCardBacks.json';

const StyledContainer = styled(Container)`
  background-color: #1a1b20;
`;

const App = () => {
  const [data, setData] = useState([]);
  const [displayData, setDisplayData] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(
          'http://python-test-project-api.eastus.azurecontainer.io:5000/api/users/profiles'
        );
        setData(result.data);
        setDisplayData(result.data);
      } catch (err) {
        setData([]);
        setDisplayData([]);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const term = query.toLowerCase();
    const filteredData = term
      ? data.filter((item) => item.slug.toLowerCase().includes(term))
      : data;
    setDisplayData(filteredData);
  }, [query]);

  return (
    <StyledContainer>
      <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Items</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Items Per Worker</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Search Filter</Form.Label>
          <Form.Control as="select">
            <option>None</option>
            <option>Odd</option>
            <option>Even</option>
          </Form.Control>
        </Form.Group>
      </Form>
      <Filter query={query} onChange={(e) => setQuery(e.target.value)} />
      <UsersList users={displayData} />
    </StyledContainer>
  );
};

// App.propTypes = {};

export default App;
