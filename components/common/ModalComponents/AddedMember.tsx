import { HTMLAttributes } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

type TIcon = {
  src: string;
  user: string;
  width: number;
  height: number;
  alt: string;
};

interface IProps extends HTMLAttributes<HTMLDivElement> {
  icon: TIcon;
}

const AddedMember = (props: IProps) => {
  const { icon } = props;
  return (
    <Container>
      <ImgContainer>
        <Image src={icon.src} width={`${icon.width}`} height={`${icon.height}`} alt={icon.alt} />
      </ImgContainer>

      <UserName>{icon.user}</UserName>
      {/* <UserName>Dan</UserName> */}
    </Container>
  );
};

export default AddedMember;

const Container = styled.div``;
const ImgContainer = styled.div``;
const UserName = styled.div``;
