import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import logo from '@/assets/common/logo_hello-world.svg';
import { flexbox } from '@/styles/mixin';

// interface HeaderItem {
//   type: string;

// }

// interface HeaderLinkItem extends HeaderItem {
// href: string;
// content: string;
// }

// interface HeaderButtonItem extends HeaderItem{
// onClick: (e)=>{}
// content: string;
// }

// interface HeaderProfileItem extends HeaderItem{
// innerComponent: ReactElement
// }

const Header = () => {
  // const navList = [
  //   {
  //       component: ,
  //       link:,
  //       content: ,
  //   },

  // ]

  return (
    <Wrapper>
      <Container>
        <Title>
          <Logo href="/">
            <LogoImg src={logo} width={130} height={30} alt="로고" />
          </Logo>
        </Title>
        <NavList>
          <NavItem>
            <NavLink href="/main">여행일지</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/signin">로그인</NavLink>
          </NavItem>
        </NavList>
      </Container>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 10;
  min-width: 1280px;
  box-shadow: ${({ theme }) => theme.shadow};
  padding: 16px 0px;
`;

const Container = styled.nav`
  ${flexbox('row', 'space-between', 'center')}
  display: flex;
  flex-flow: row nowrap;
  width: 1280px;
  margin: 0 auto;
`;

const Title = styled.div``;

const Logo = styled(Link)``;

const LogoImg = styled(Image)``;

const NavList = styled.ul`
  ${flexbox('row', 'space-between', 'center')}
  gap: 8px;
`;

const NavItem = styled.li`
  display: flex;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
