import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'
import './header.css';

class Header extends React.Component {
  state = { activeItem: '' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item />
          <Link to="/"><Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} /></Link>
          <Link to="/comics"><Menu.Item name='comics' active={activeItem === 'comics'} onClick={this.handleItemClick} /></Link>
          <Link to="/about"><Menu.Item name='about me' active={activeItem === 'about me'} onClick={this.handleItemClick} /></Link>
        </Menu>
      </div>
        );
};}

export default Header;


