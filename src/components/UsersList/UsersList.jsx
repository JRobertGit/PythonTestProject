import React from 'react';
import styled from 'styled-components';
import { ListGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';

import UserCard from '../UserCard/UserCard';

const StyledListGroup = styled(ListGroup)`
  max-height: 900px;
  overflow: scroll;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const StyledUserListItem = styled(ListGroup.Item)`
  background: transparent;
  border: none;
`;

const UsersList = ({ users }) => (
  <StyledListGroup horizontal>
    {users.map((user) => (
      <StyledUserListItem key={user.id}>
        <UserCard user={user} />
      </StyledUserListItem>
    ))}
  </StyledListGroup>
);

UsersList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

UsersList.defaultProps = {
  users: [],
};

export default UsersList;
