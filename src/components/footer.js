import React from 'react';
import { Container, Segment } from 'semantic-ui-react';

import './footer.css';

const Footer = (props) => {
  return (
    <Segment>
      <Container textAlign="center">
        Vupli Comics © 2017
      </Container>
    </Segment>
  );
};

export default Footer;
