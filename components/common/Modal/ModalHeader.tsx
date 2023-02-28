import React from 'react';
import styled from 'styled-components';

const ModalHeader = () => {
  return (
    <TitleContainer>
      <Title>새 여행 계획 만들기</Title>
    </TitleContainer>
  );
};

export default ModalHeader;

const TitleContainer = styled.div`
  witdh: 500px;
  height: 78px;
  border-bottom: 1px solid ${({ theme }) => theme.gray200};
  border-radius: 20px 20px 0 0;
  padding: 28px 0 28px 25px;
`;
const Title = styled.h3``;
