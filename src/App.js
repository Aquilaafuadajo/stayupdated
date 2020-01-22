import React, {Component} from 'react';

import {Route, Switch} from 'react-router-dom';


import Header from './components/Header/header.component';
import {Business, Entertainment, General, Health, Science, Sport, Technology} from './pages/all-pages/all-pages.component';
import SignInAndSignUpPage from './pages/signin-and-signup-page/signin-and-signup.component';

import {auth} from './firebase/firebase.utils';

import './App.css';
import Hompage from './pages/homepage/homepage.component';


class App extends Component {
  state = { 
      currentUser: null
    }

  unSubscribeFromAuth = null; //to close subcriptions when the component unmounts, because we don't want any memory leaks in our javascript application

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({
        currentUser: user
      })
      console.log(this.state.currentUser)
    })
  }

  componentWillUnmount() { //this closes the subscription
    this.unSubscribeFromAuth()
  }

  render() { 
    return (
      <div >
        <Header currentUser={this.state.currentUser}/>
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

