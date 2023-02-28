import React from 'react';
import styled from 'styled-components';
import ModalHeader from './ModalHeader';
import ModalButtons from './ModalButtons';
// import ModalMakeItinerary from './ModalMakeItinerary';
import ModalEditItinerary from './ModalEditItinerary';

const ModalContainer = () => {
  return (
    <Container>
      <ModalHeader />
      {/* <ModalMakeItinerary /> */}
      <ModalEditItinerary />
      <ModalButtons />
    </Container>
  );
};

export default ModalContainer;

const Container = styled.section`
  margin: 120px auto;
  background: ${({ theme }) => theme.white};
  width: 500px;
  padding: 0 0 36px;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.gray500};
  box-shadow: ${({ theme }) => theme.shadow};
`;
