import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

type TICon = {
  width: number;
  height: number;
  src: string;
};

interface TProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: TICon;
  color: string;
}

const Header = (props: TProps) => {
  // const { width, height, src } = props;
  const { icon, color } = props;
  return (
    <Container style={{ backgroundColor: color }}>
      <Logo width={`${icon.width}px`} height={icon.height} src={icon.src} alt="logo" />
      <DashBoard width={`${icon.width}px`} height={icon.height} src={icon.src} />
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 70px;
  height: 837px;
  background-color: ${({ theme }) => theme.navy500};
  padding: 10px;
`;
const Logo = styled.img``;
const DashBoard = styled.img``;
