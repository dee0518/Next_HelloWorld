import { ChangeEvent } from 'react';
import styled from 'styled-components';
import ErrorMessage from './ErrorMessage';

type TProp = {
  id: string;
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: ChangeEvent) => void;
  isValid?: boolean;
  validationMsg?: string;
};

const Input = ({ id, label, name, type, value, onChange, isValid, validationMsg }: TProp) => {
  return (
    <Wrapper>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={name} type={type} value={value} onChange={onChange} />
      {!isValid && (
        <Validation>
          <ErrorMessage>
            <p>{validationMsg}</p>
          </ErrorMessage>
        </Validation>
      )}
    </Wrapper>
  );
};

export default Input;
Input.defaultProps = {
  type: 'text',
  isValid: true,
  validationMsg: '',
};

const Wrapper = styled.div`
  position: relative;
  max-width: 674px;
  display: flex;
  flex-direction: column;
  font-size: 18px;
  padding-bottom: 24px;

  & label {
    color: #6a6a6a;
    margin-bottom: 8px;
  }

  & input {
    width: 100%;
    min-height: 48px;
    padding: 12px 16px;
    border: 2px solid ${({ theme }) => theme.lightPurple};
    border-radius: 8px;
  }
`;

const Validation = styled.div`
  position: absolute;
  bottom: 0;
`;
