import React, {Component} from 'react';

import Header from './components/Header/header.component'

import './App.css';
import Hompage from './pages/homepage/homepage.component';

class App extends Component {
  state = { 
      url: `https://newsapi.org/v2/top-headlines?language=en&category=entertainment&apiKey=8a8c2162bdf243d48e6e87b8215df996`
    }

  render() { 
    return (
      <div className='App'>
        <Header />
        <Hompage />
      </div>
      );
  }
}

export default App;