import { ReactNode } from 'react';
import styled from 'styled-components';

type EventHandler = (e: any) => void;

type TProps = {
  id: string;
  label: string;
  type: string;
  value: string;
  uiType: string;
  [key: string]: string | undefined | ReactNode | EventHandler;
};

const InputForm = (props: TProps) => {
  const { id, type, label, value, uiType, ...rest } = props;
  const { children, isValid, error, ...inputAttribute } = rest;

  return (
    <InputWrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} type={type} value={value} uiType={uiType} {...inputAttribute} />
      {children as ReactNode}
      {isValid !== undefined && !isValid && <Error>{error as string}</Error>}
    </InputWrapper>
  );
};

export default InputForm;

const Label = styled.label`
  display: none;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Input = styled.input<{ uiType: string; paddingRight?: string }>`
  width: 100%;
  height: 50px;
  padding: 16px 0;
  font-size: 16px;
  border: 0;
  color: ${({ theme }) => theme.black};
  background: ${({ theme }) => theme.white};

  &::placeholder {
    color: ${({ theme }) => theme.gray200};
  }

  ${({ theme, uiType }) => {
    if (uiType === 'whiteLine')
      return `
      color: ${theme.white};
      border-bottom: 1px solid ${theme.white}; 
      background: transparent;
    `;
    if (uiType === 'chat')
      return `
      padding: 16px 14px;
      border: 1px solid ${theme.navy200};
      border-radius: 8px;

      &::placeholder {
        color: ${theme.navy200};
      }
    `;
    if (uiType === 'search')
      return `
      padding: 16px 14px;
      border-radius: 8px;
      box-shadow: 0 4px 10px 0 rgba(0,0,0,.25);
    `;
    return `
      border-bottom: 1px solid ${theme.gray300};
    `;
  }}
  ${({ paddingRight }) => paddingRight && `padding-right: ${paddingRight}`}
`;

const Error = styled.p`
  margin-top: 8px;
  color: ${({ theme }) => theme.red};
  font-size: 14px;
`;
