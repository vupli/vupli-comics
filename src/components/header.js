import React from 'react';
import { withRouter } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

import './header.css';

class Header extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      activeItem: props.location.pathname
    };

    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(e, { name }) {
    this.setState({
      activeItem: name
    });

    this.props.history.push(name);
  }

  render() {
    return (
      <Menu stackable size="large">

        <Menu.Item>
          <b>Vupli Comics</b>
        </Menu.Item>

        <Menu.Item
          name='/'
          active={this.state.activeItem === '/'}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>

        <Menu.Item
          name='/comics'
          active={this.state.activeItem === '/comics'}
          onClick={this.handleItemClick}
        >
          Comics
        </Menu.Item>

        <Menu.Item
          name='/about'
          active={this.state.activeItem === '/about'}
          onClick={this.handleItemClick}
        >
          About
        </Menu.Item>

      </Menu>
    );
  };
}

export default withRouter(Header);


