import styled from 'styled-components';

const PlaceBadge = () => {
  return <Container>기차역</Container>;
};

export default PlaceBadge;

const Container = styled.div`
  width: 40px;
  height: 16px;
  padding: 3px 6px;
  border-radius: 4px;
  font-size: 10px;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.gray900};
`;
