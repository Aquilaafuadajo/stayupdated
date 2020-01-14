import React, {Component} from 'react';

import Async from 'react-async';

import logo from './logo.svg';
import './App.css';

const news = () =>
  fetch("https://newsapi.org/v2/top-headlines?language=en&country=us&category=entertainment&apiKey=8a8c2162bdf243d48e6e87b8215df996")
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json())

fetch("https://newsapi.org/v2/top-headlines?language=en&country=us&category=entertainment&apiKey=8a8c2162bdf243d48e6e87b8215df996").then(response => response.json()).then(response => console.log(response))
news().then(res => console.table(res.articles))
class App extends Component {

  render(){
  return(
    <div className="App">
    <Async promiseFn={news}>
        {({ data, err, isLoading }) => {
          if (isLoading) return (<img src={logo} className="App-logo" alt="logo" />)
          if (err) return <h1>{`Something went wrong: ${err.message}`}</h1>

          if(data) return (
            <div className='content'>
              {
                data.articles.map(({source: {id, name} }, i) => {
                  if(i<5) {
                    return(<h1 className='box1' key={i}>{`${id}   ${name}`}</h1>)
                  }
                  if(i>5){
                    return(<h1 className='box' key={i}>{`${id}   ${name}`}</h1>)
                  }
                  return console.log(i>5)
                })
              }
            </div>
          )}
        }
      </Async>
    </div>
  )}
}

export default App;

