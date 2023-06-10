import React from 'react';
import styled from 'styled-components';
import UserContainer from './container/UserContainer';
import ProductsContainer from './container/ProductsContainer';
import PostContainer from './container/PostContainer';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f2f2f2;
  min-width: 390px;
  gap: 6px;
`;

const ProfilePage = () => {
  return (
    <Container>
      <UserContainer />
      <ProductsContainer />
      <PostContainer />
    </Container>
  );
};

export default ProfilePage;
