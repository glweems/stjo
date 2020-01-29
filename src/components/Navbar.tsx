import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

interface Props {
  brand: string;
}

const Navbar: React.FC<Props> = ({ brand }) => {
  return (
    <Nav>
      <Link to="/">{brand}</Link>

      <a href="/">Anchor</a>
    </Nav>
  );
};

const Nav = styled.nav`
  width: 100%;
  background-color: pink;
`;

export default Navbar;
