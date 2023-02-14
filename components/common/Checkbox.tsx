import styled from 'styled-components';
import { flexbox } from '@/styles/mixin';

type TProps = {
  id: string;
  label: string;
};

const Checkbox = ({ id, label }: TProps) => {
  return (
    <Wrapper>
      <InputWrapper>
        <Input type="checkbox" id={id} />
        <Label htmlFor={id}>{label}</Label>
      </InputWrapper>
      <Button type="button">보기</Button>
    </Wrapper>
  );
};

export default Checkbox;

const Wrapper = styled.div`
  ${flexbox('row', 'nowrap', 'space-between', 'center')}
`;

const InputWrapper = styled.div`
  ${flexbox('row', 'nowrap')}
  gap: 10px;
`;

const Input = styled.input`
  width: 20px;
  height: 20px;
`;

const Label = styled.label`
  font-size: 16px;
  line-height: 20px;
`;

const Button = styled.button`
  padding: 0;
  border: 0;
  background: none;
  color: #21bcff;
`;
