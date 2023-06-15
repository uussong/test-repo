import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TextInput from '../Input/TextInput';
import Button from '../Button/Button';
import { baseInstance } from '../../api/instance/baseInstance';

const Form = styled.form`
  & > div:first-child {
    margin-bottom: 16px;
  }

  & > div:nth-child(2) {
    margin-bottom: 30px;
  }

  & > button {
    display: block;
    margin: 0 auto;
  }
`;
export default function SignUpForm({
  handleClickButton,
  inputs: { email, password },
  handleChange,
}) {
  const [error, setError] = useState({
    emailError: 'initial',
    passwordError: 'initial',
  });
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);
  // const handleEmailInput = (e) => {
  //   setEmail(e.target.value);
  // };

  // const handlePasswordInput = (e) => {
  //   setPassword(e.target.value);
  // };

  const emailValidate = async () => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (!emailRegex.test(email)) {
      setError({ ...error, emailError: '올바르지 않은 이메일 형식입니다.' });
      return;
    } else {
      setError({ ...error, emailError: '' });
    }

    try {
      const res = await baseInstance.post('/user/emailvalid', {
        user: { email },
      });

      const {
        status,
        data: { message },
      } = res;
      if (status !== 200) throw new Error('잘못된 접근입니다.');
      if (message === '사용 가능한 이메일 입니다.')
        setError({ ...error, emailError: '' });
      else setError({ ...error, emailError: message });
    } catch (err) {
      console.log(err);
    }
  };

  const passwordValidate = () => {
    if (password.length < 6) {
      setError({
        ...error,
        passwordError: '비밀번호는 6자 이상이어야 합니다.',
      });
    } else {
      setError({ ...error, passwordError: '' });
    }
  };

  useEffect(() => {
    if (email && password) {
      const { emailError, passwordError } = error;
      if (emailError === '' && passwordError === '') {
        setDisabled(false);
      }
    }
  }, [error.emailError, error.passwordError]);

  return (
    <Form>
      <TextInput
        id="email"
        type="email"
        placeholder="이메일 주소를 입력해주세요"
        validate={emailValidate}
        value={email}
        onChange={handleChange}
        error={error.emailError === 'initial' ? null : error.emailError}
      >
        이메일
      </TextInput>
      <TextInput
        id="password"
        type="password"
        placeholder="비밀번호를 설정해주세요"
        validate={passwordValidate}
        value={password}
        onChange={handleChange}
        error={error.passwordError === 'initial' ? null : error.passwordError}
      >
        비밀번호
      </TextInput>
      <Button
        type="button"
        className="lg"
        onClick={handleClickButton}
        disabled={disabled}
      >
        다음
      </Button>
    </Form>
  );
}
