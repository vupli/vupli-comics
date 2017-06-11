import React from 'react';
import { connect } from 'react-redux';

import './comic.css';

class Comic extends React.Component {
  render() {
    return (
      <div>
        <p>Comic {this.props.match.params.id}</p>
      </div>
    );
  }
}

export default connect()(Comic);
