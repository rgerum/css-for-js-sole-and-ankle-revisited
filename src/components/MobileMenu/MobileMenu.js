/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import {COLORS} from "../../constants";

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <MyDialogOverlay isOpen={isOpen} onDismiss={onDismiss}>
        <MyDialogContent>
      <Close onClick={onDismiss}>
          <Icon id="close" strokeWidth={1} />
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
      </Close>
      <NavList>
        <Item href="/sale">Sale</Item>
        <Item href="/new">New&nbsp;Releases</Item>
        <Item href="/men">Men</Item>
        <Item href="/women">Women</Item>
        <Item href="/kids">Kids</Item>
        <Item href="/collections">Collections</Item>
      </NavList>
      <Footer>
        <a href="/terms">Terms and Conditions</a>
        <a href="/privacy">Privacy Policy</a>
        <a href="/contact">Contact Us</a>
      </Footer>
        </MyDialogContent>
    </MyDialogOverlay>
  );
};

const MyDialogOverlay = styled(DialogOverlay)`
    position: absolute;
    background: var(--white);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`

const MyDialogContent = styled(DialogContent)`
    display: flex;
    flex-direction: column;
    padding: 16px;
    height: 100%;    
`

const Close = styled(UnstyledButton)`
    position: absolute;
    right: 0;
    top: 0;
    padding: 8px;
`

const NavList = styled.nav`
    display: flex;
    flex-direction: column;
`

const Footer = styled.footer`
    display: flex;
    margin-top: auto;
    justify-content: space-around;
`

const Item = styled.a`
    text-decoration: none;
    display: block;
    text-decoration: none;
    font-weight: 600;
    color: hsl(220deg 3% 20%);
    line-height: 2;
`

export default MobileMenu;
