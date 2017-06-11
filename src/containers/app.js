import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import Home from './home';
import Comics from './comics';
import Comic from './comic';
import About from './about';
import Header from '../components/header';
import Footer from '../components/footer';
import NoMatch from '../components/no-match';

import './app.css';

class App extends React.Component {
  render() {
    return (
      <Container>
        <Header/>
        <Container>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/comics" component={Comics}/>
            <Route path="/comics/:id" component={Comic}/>
            <Route exact path="/about" component={About}/>
            <Route component={NoMatch}/>
          </Switch>
        </Container>
        <Footer/>
      </Container>
    );
  }
}

export default App;
