import React from 'react';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

const StyledCard = styled(Card)`
  border-color: #148eff;
  width: 202px;
`;

const StyledCardHeader = styled(Card.Header)`
  background-color: #0074e0;
  padding: 8px 12px;
`;

const StyledCardImage = styled(Card.Img)`
  margin: 8px auto;
  width: 100px;
`;

const ProfileLink = styled.a`
  color: #fff;
  font-size: 18px;
`;

const UserCard = ({ user }) => (
  <StyledCard key={user.id}>
    <StyledCardHeader>
      <ProfileLink href={user.profile_url} />
      {user.id} - {user.username}
    </StyledCardHeader>
    <StyledCardImage src={user.image_url} />
  </StyledCard>
);

UserCard.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    profile_url: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserCard;
