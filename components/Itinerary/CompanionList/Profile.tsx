import Image, { StaticImageData } from 'next/image';
import React from 'react';
import styled from 'styled-components';

type TProps = {
  src: StaticImageData | string;
  alt: string;
};

const Profile = ({ src, alt }: TProps) => {
  return (
    <Wrapper>
      <Image src={src} alt={alt} width={60} height={60} />
    </Wrapper>
  );
};

export default Profile;

const Wrapper = styled.div`
  border-radius: 50%;
`;
