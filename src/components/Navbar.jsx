import React,{useState} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';



const NavbarWrapper = styled.div`
  background: #F2DB09;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  color: white;
  font-size: 24px;
  font-weight: bold;
`;

const NavItems = styled.div`
  display: flex;
`;

const NavItem = styled.div`
  margin-right: 20px;

  a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease;

    &:hover {
      color: #1a5276;c
    }
  }
`;

export default function Navbar () {
  return (
    <NavbarWrapper>
      <Logo>D-Centies</Logo>
      <NavItems>
        <NavItem><Link to="/">Home</Link></NavItem>
        
        <NavItem><Link to="/About">About</Link></NavItem>
        <NavItem><Link to="/Contact">Contact</Link></NavItem>
        <NavItem><Link to="/connect">connect to metamask</Link></NavItem>
        
      </NavItems>
    </NavbarWrapper>
  );
};
