import React, {Component} from 'react';

import {Route, Switch} from 'react-router-dom';


import Header from './components/Header/header.component';
import {Business, Entertainment, General, Health, Science, Sport, Technology} from './pages/all-pages/all-pages.component';
import SignInAndSignUpPage from './pages/signin-and-signup-page/signin-and-signup.component'

import './App.css';
import Hompage from './pages/homepage/homepage.component';


class App extends Component {
  state = { 
      currentUser: null
    }

  render() { 
    return (
      <div >
        <Header />
        <Switch>
          <Route exact path='/' component={Hompage}></Route> 
          <Route exact path='/business' component={Business}></Route> 
          <Route exact path='/entertainment' component={Entertainment}></Route>
          <Route exact path='/general' component={General}></Route>
          <Route exact path='/health' component={Health}></Route>
          <Route exact path='/science' component={Science}></Route>
          <Route exact path='/sport' component={Sport}></Route>
          <Route exact path='/technology' component={Technology}></Route>
          <Route exact path='/signin' component={SignInAndSignUpPage}></Route>
        </Switch>
      </div>
      );
  }
}

export default App;

