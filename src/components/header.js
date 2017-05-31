import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header = (props) => {
  return (
    <header>
      Header
      <Link to="/comics">Comics</Link>
    </header>
  );
};

export default Header;
