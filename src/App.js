import React, {Component} from 'react';

import {Route, Switch} from 'react-router-dom';


import Header from './components/Header/header.component';
import {Business, Entertainment, General, Health, Science, Sport} from './pages/all-pages/all-pages.component'

import './App.css';
import Hompage from './pages/homepage/homepage.component';


class App extends Component {
  state = { 
      url: `https://newsapi.org/v2/top-headlines?language=en&category=entertainment&apiKey=8a8c2162bdf243d48e6e87b8215df996`
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
        </Switch>
      </div>
      );
  }
}

export default App;

