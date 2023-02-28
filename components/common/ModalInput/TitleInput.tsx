import styled from 'styled-components';

type TProps = {
  placeholder: string;
};

const TitleInput = (props: TProps) => {
  const { placeholder } = props;
  return (
    <Container>
      <Input placeholder={placeholder} />
    </Container>
  );
};

export default TitleInput;

const Container = styled.div``;
const Input = styled.input`
  width: 100%;
  heigth: 100px;
  padding: 10px;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.gray200};
  padding: ;
  &::placeholder {
    color: ${({ theme }) => theme.gray200};
  }
`;
