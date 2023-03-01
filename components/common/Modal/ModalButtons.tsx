import React from 'react';
import styled from 'styled-components';
import Button from '@/components/common/Button/Button';
import { flexbox } from '@/styles/mixin';

const ModalButtons = () => {
  return (
    <ButtonContainer>
      <Button onClick={() => {}} background="#D9D9D9" width="213px" height="54px" radius="10px">
        취소
      </Button>
      <Button onClick={() => {}} background="#C5FB6D" width="213px" height="54px" radius="10px">
        새 일정 만들기
      </Button>
    </ButtonContainer>
  );
};

export default ModalButtons;

const ButtonContainer = styled.div`
  background: transparent;
  ${flexbox('row', 'center', 'center')};
  gap: 23px;
  margin: 0 auto;
`;
