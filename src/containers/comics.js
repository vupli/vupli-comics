import React from 'react';
import { connect } from 'react-redux';

import './comics.css';

class Comics extends React.Component {
  render() {
    return (
      <div>
        <p>Comics</p>
      </div>
    );
  }
}

export default connect()(Comics);
