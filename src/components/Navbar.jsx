import React,{useState} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Web3 from 'web3';


const connectToMetamask = async () => {
    try {
        // Check if MetaMask is installed
    if (window.ethereum) {
          // Enable Ethereum provider
          await window.ethereum.enable();
          const web3Instance = new Web3(window.ethereum);
  
          // Get the current accounts
          const accounts = await web3Instance.eth.getAccounts();

          alert( accounts)
        } else {
          console.error('MetaMask not detected! Please install MetaMask extension.');
        }
      } catch (error) {
        console.error('Error connecting to MetaMask:', error);
      }
    };

const NavbarWrapper = styled.div`
  background: #2980b9;
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
        <NavItem><a href="/">Contact</a></NavItem>
        <NavItem><Link to="/" onClick={connectToMetamask}>connect to metamask</Link></NavItem>
        
      </NavItems>
    </NavbarWrapper>
  );
};
