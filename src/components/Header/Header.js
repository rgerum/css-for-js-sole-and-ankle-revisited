import React from 'react';
import styled from 'styled-components/macro';

import {COLORS, QUERIES, WEIGHTS} from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from "../Icon";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side />
          <NavIcons>
              <Icon id="shopping-bag" strokeWidth={1}></Icon>
              <Icon id="search" strokeWidth={1}></Icon>
              <Button  onClick={() => setShowMobileMenu(true)}>
              <Icon id="menu" strokeWidth={1}></Icon>
              </Button>
          </NavIcons>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid var(--gray-300);
    overflow-y: auto;
    
    @media ${QUERIES.tabletAndBelow} {
        border-top: 5px solid ${COLORS.black};
    }
`;

const Nav = styled.nav`
  display: flex;
  gap: min(10vw - 48px, 64px);
  margin: 0px 48px;
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--gray-900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--secondary);
  }

    @media ${QUERIES.tabletAndBelow} {
        display: none;
    }
`;

const NavIcons = styled.div`
    display: none;

    @media ${QUERIES.tabletAndBelow} {
        display: flex;
        gap: 16px;
    }
    `

const Button = styled.button`
    background: none;
    border: none;
    cursor: pointer;
`

export default Header;
