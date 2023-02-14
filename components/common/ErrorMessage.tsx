import { ReactNode } from 'react';
import styled from 'styled-components';

type TProps = {
  children: ReactNode;
};

const ErrorMessage = ({ children }: TProps) => {
  return <Wrapper>{children}</Wrapper>;
};

export default ErrorMessage;

const Wrapper = styled.div`
  margin-top: 4px;
  color: #ec5664;

  & p {
    font-size: 14px;
  }
`;
