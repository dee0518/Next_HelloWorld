import styled from 'styled-components';

// 조건문으로 Sign in/ Sign up 변경
const Title = () => <SignupTitle>Sign Up</SignupTitle>;

export default Title;

const SignupTitle = styled.h1`
  font-size: 64px;
  text-align: center;
`;
