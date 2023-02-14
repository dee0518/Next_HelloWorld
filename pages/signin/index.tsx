import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import Title from '@/components/layout/Title';
import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import { flexbox } from '@/styles/mixin';
import { EMAIL_REG, PASSWORD_REG } from '@/constants/RegularExpression';

const SignIn = () => {
  const [signIn, setSignIn] = useState({
    email: '',
    password: '',
  });

  const onChange = (e: ChangeEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    setSignIn(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Form>
      <Title />
      <p id="error" />
      <Input
        id="email"
        label="이메일"
        name="email"
        type="text"
        value={signIn.email}
        onChange={onChange}
        isValid={EMAIL_REG.test(signIn.email)}
        validationMsg="아이디 형식에 맞게 입력해주세요."
      />
      <Input
        id="password"
        label="비밀번호"
        name="password"
        type="password"
        value={signIn.password}
        onChange={onChange}
        isValid={PASSWORD_REG.test(signIn.password)}
        validationMsg="비밀번호 형식에 맞게 입력해주세요."
      />
      <Button />
    </Form>
  );
};

export default SignIn;

const Form = styled.form`
  ${flexbox('column')}
  gap: 30px;
  width: 500px;
  margin: 80px auto;
`;
