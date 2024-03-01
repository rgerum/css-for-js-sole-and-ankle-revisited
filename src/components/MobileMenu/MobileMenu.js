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
            <Side />
            <NavList>
                <Item style={{"--color": "var(--secondary)"}} href="/sale">Sale</Item>
                <Item href="/new">New&nbsp;Releases</Item>
                <Item href="/men">Men</Item>
                <Item href="/women">Women</Item>
                <Item href="/kids">Kids</Item>
                <Item href="/collections">Collections</Item>
            </NavList>
            <Footer>
                <FooterLink href="/terms">Terms and Conditions</FooterLink>
                <FooterLink href="/privacy">Privacy Policy</FooterLink>
                <FooterLink href="/contact">Contact Us</FooterLink>
            </Footer>
        </MyDialogContent>
    </MyDialogOverlay>
  );
};

const MyDialogOverlay = styled(DialogOverlay)`
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
`

const MyDialogContent = styled(DialogContent)`
    position: absolute;
    right: 0;
    display: flex;
    background: var(--white);
    flex-direction: column;
    padding: 32px;
    width: 300px;
    height: 100%;
`

const Close = styled(UnstyledButton)`
    position: absolute;
    right: 8px;
    top: 16px;
    padding: 8px;
`

const Side = styled.div`
    flex: 1;
    `

const NavList = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 24px;
`

const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    margin-top: auto;
    justify-content: flex-end;
    gap: 14px;
    margin-top: 32px;
    flex: 1;
`

const FooterLink = styled.a`
    font-size: ${14 / 16}rem;
    line-height: ${16.44 / 16}rem;
    color: var(--gray-700);
    text-decoration: none;
`

const Item = styled.a`
    text-decoration: none;
    display: block;
    text-decoration: none;
    font-weight: 600;
    color: var(--color, var(--gray-900));
    font-size: ${18 / 16}rem;
    line-height: ${21.13 / 16}rem;
    text-transform: uppercase;
`

export default MobileMenu;
