import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './home';
import Comics from './comics';
import Comic from './comic';
import Header from '../components/header';
import Footer from '../components/footer';
import NoMatch from '../components/no-match';
import './app.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/comics" component={Comics}/>
          <Route path="/comics/:id" component={Comic}/>
          <Route component={NoMatch}/>
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;
