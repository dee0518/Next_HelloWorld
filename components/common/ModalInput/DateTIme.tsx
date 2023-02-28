import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { flexbox } from '@/styles/mixin';

type TIcon = {
  src: string;
  alt: string;
  width: number;
  height: number;
  color: string;
};

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  icon: TIcon;
  placeholder: string;
}

const DateTIme = (props: IProps) => {
  const { placeholder, onClick, icon } = props;
  return (
    <DateTimeConatiner>
      <DateInput placeholder={placeholder} />
      <ImgContainer>
        <Image onClick={onClick} src={icon.src} alt={icon.alt} width={`${icon.width}`} height={`${icon.height}`} />
      </ImgContainer>
    </DateTimeConatiner>
  );
};

export default DateTIme;

const DateTimeConatiner = styled.div`
  width: 210px;
  border-bottom: 1px solid ${({ theme }) => theme.gray200};
  margin: 20px 0;
  ${flexbox('row')}
`;
const DateInput = styled.input`
  width: 170px;
  margin: 10px 0 0;
  border: none;
  padding: 10px;
  &::placeholder {
    color: ${({ theme }) => theme.gray200};
  }
`;
const ImgContainer = styled.button`
  background-color: transparent;
  border: none;
  padding: 10px;
`;
