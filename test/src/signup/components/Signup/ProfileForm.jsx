import React from 'react';
import styled from 'styled-components';
import ProfileInputContainer from '../ProfileInputContainer/ProfileInputContainer';
import Button from '../Button/Button';

const Form = styled.form`
  & > div:not(:last-child) {
    margin-bottom: 16px;
  }

  & > button {
    display: block;
    margin: 30px auto 0;
  }
`;

export default function ProfileForm({ inputs, handleChange }) {
  return (
    <Form>
      <ProfileInputContainer inputs={inputs} handleChange={handleChange} />
      <Button className="lg">Focal 시작하기</Button>
    </Form>
  );
}
