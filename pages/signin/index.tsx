import { ChangeEvent, useState } from 'react';
// import Header from '@/components/common/Header/Header';
import Title from '@/components/layout/Title';
import Wrapper from '@/components/common/Wrapper/Wrapper';
import Input from '@/components/common/Input/Input';
import Button from '@/components/common/Button/Button';
import styled from 'styled-components';
import { flexbox } from '@/styles/mixin';
import theme from '@/styles/theme';
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
    <SignInWrapper uiType="container" width="600px" height="800px" background={theme.dimmedWhite} hasBoxShadow={false}>
      {/* <Header /> */}
      <Title />
      <Form>
        <Input
          id="email"
          name="email"
          type="text"
          label="이메일"
          value={signIn.email}
          onChange={onChange}
          uiType="default"
          placeholder="이메일"
          isValid={EMAIL_REG.test(signIn.email)}
          error="아이디 형식에 맞게 입력해주세요."
        />
        <Input
          id="password"
          name="password"
          type="password"
          label="비밀번호"
          value={signIn.password}
          onChange={onChange}
          uiType="default"
          placeholder="비밀번호"
          isValid={PASSWORD_REG.test(signIn.password)}
          error="비밀번호 형식에 맞게 입력해주세요."
        />
      </Form>

      <Button
        background="#464B68"
        color="#ffffff"
        onClick={() => {
          alert('로그인 성공');
        }}
      >
        로그인
      </Button>
    </SignInWrapper>
  );
};

export default SignIn;

const SignInWrapper = styled(Wrapper)`
  ${flexbox('column', 'nowrap', 'center')}
  gap: 80px;
  margin: 100px auto;
  padding: 50px 80px;
`;

const Form = styled.form`
  ${flexbox('column', 'nowrap')}
  gap: 15px;
  width: 100%;
`;
