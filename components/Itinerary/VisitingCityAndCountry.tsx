import { flexbox } from '@/styles/mixin';
import React from 'react';
import styled from 'styled-components';

const VisitingCityAndCountry = () => {
  return (
    <Wrapper>
      <p>Tokyo, Incheon, Seoul</p>
      <span>Japan, Korea</span>
    </Wrapper>
  );
};

export default VisitingCityAndCountry;

const Wrapper = styled.div`
  ${flexbox('column', 'center', 'flex-start')}
  background: ${({ theme }) => theme.mainGreen};
  padding: 8px 24px;
  margin-bottom: 24px;

  & p {
    font-weight: 600;
  }

  & span {
    font-size: 13px;
  }
`;
