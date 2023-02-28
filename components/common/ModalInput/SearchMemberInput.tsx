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

const SearchMemberInput = (props: IProps) => {
  const { placeholder, icon, onClick } = props;
  return (
    <SearchContainer>
      <SearchInput type="text" placeholder={placeholder} />
      <ImgContainer onClick={onClick}>
        <Image src={icon.src} alt={icon.alt} width={`${icon.width}`} height={`${icon.height}`} />
      </ImgContainer>
    </SearchContainer>
  );
};

export default SearchMemberInput;

const SearchContainer = styled.div`
  ${flexbox('row')}

  border-bottom: 1px solid ${({ theme }) => theme.gray200};
`;
const SearchInput = styled.input`
  width: 100%;
  padding: 5px 0 0 10px;
  border: none;
  &::placeholder {
    color: ${({ theme }) => theme.gray200};
  }
`;
const ImgContainer = styled.button`
  background-color: transparent;
  border: none;
  padding: 10px;
`;
