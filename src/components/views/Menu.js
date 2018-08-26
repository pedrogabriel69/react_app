import React from 'react';
import NavLink from '../NavLink';

import { Nav, Navbar, NavbarBrand, NavItem } from 'reactstrap';

import { rootPath } from '../../helpers/routes';
import { contactPath } from '../../helpers/routes';
import { aboutPath } from '../../helpers/routes';

const Menu = () => {
  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">SuperStore</NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink to={contactPath()} className="nav-link" activeClassName="active">Contact</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to={aboutPath()} className="nav-link" activeClassName="active">About Us</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  )
}

export default Menu;
