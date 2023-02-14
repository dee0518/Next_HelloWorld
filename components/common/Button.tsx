// import { CSSProperties } from 'react';
import styled from 'styled-components';
// import theme from '@/styles/theme';

const Button = () => {
  return (
    <Wrapper>
      <SubmitButton type="button">제출</SubmitButton>
      <BackButton type="button">취소</BackButton>
    </Wrapper>
  );
};

export default Button;

const Wrapper = styled.div`
  width: 500px;
  height: 100px;
  display: flex;
  flex-flow: wrap;
  gap: 10px;
`;
const SubmitButton = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.primaryPurple};
  border: none;
  border-radius: 5px;
  color: ${({ theme }) => theme.white};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.lightPurple};
  }
`;

const BackButton = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.primaryGray};
  border: none;
  border-radius: 5px;
  color: ${({ theme }) => theme.white};
  cursor: pointer;
`;
