import React from 'react';
import Navbar from './Navbar';
import styled, { createGlobalStyle } from 'styled-components';

interface Props {}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Main>
      <GlobalStyle />
      <Navbar brand="Saint Jo." />

      <div className="content">{children}</div>

      <footer>this is the footer component</footer>
    </Main>
  );
};

const GlobalStyle = createGlobalStyle`
  body,
  html {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`;

const Main = styled.main`
  padding: 0;
  margin: 0;

  .content {
    min-height: 100vh;
  }

  footer {
    width: 100%;
    background: pink;
  }
`;

export default Layout;
