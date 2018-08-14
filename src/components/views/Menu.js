import React from 'react';
import NavLink from '../NavLink';

import { rootPath } from '../../helpers/routes';
import { contactPath } from '../../helpers/routes';
import { aboutPath } from '../../helpers/routes';

const Menu = () => {
  return (
    <ul>
      <li>
        <NavLink to={rootPath()} className="nav-link" activeClassName="active">Home</NavLink>
      </li>
      <li>
        <NavLink to={contactPath()} className="nav-link" activeClassName="active">Contact</NavLink>
      </li>
      <li>
        <NavLink to={aboutPath()} className="nav-link" activeClassName="active">About Us</NavLink>
      </li>
    </ul>
  )
}

export default Menu;
