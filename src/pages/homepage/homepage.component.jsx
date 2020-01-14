import React from 'react';

import Async from 'react-async';

const api = (category) => `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=8a8c2162bdf243d48e6e87b8215df996`;

fetch("https://newsapi.org/v2/top-headlines?language=en&country=us&category=entertainment&apiKey=8a8c2162bdf243d48e6e87b8215df996").then(response => response.json()).then(response => console.table(response.articles))

const categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];

const categoriesApi = categories.map((category) => api(category))
                                .map((categoryApi) => 
                                () => (fetch(categoryApi)
                                  .then(res => (res.ok ? res : Promise.reject(res)))
                                  .then(res => res.json())))


// const news = () =>
//   fetch("https://newsapi.org/v2/top-headlines?country=ng&category=entertainment&apiKey=8a8c2162bdf243d48e6e87b8215df996")
//     .then(res => (res.ok ? res : Promise.reject(res)))
//     .then(res => res.json())

// news().then(res => console.log(res.articles))

// const categoryArray = categories.map((category) => api(category))

// const actualNews = categoryArray.map((actual) => () => (fetch(actual).then(res => (res.ok ? res : Promise.reject(res)))
// .then(res => res.json())))

// console.log(actualNews[1].then(res => console.log(res.articles)))

// console.log(categoryArray)



const Hompage = () => {
  return ( 
      <div className='homepage'>
        <Async promiseFn={categoriesApi[0]}>
        {({ data, err, isLoading }) => {
          if(isLoading) return ('loading...')
          if(err) return (<h1>{`Something went wrong: ${err.message}`}</h1>)

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
          )
        }}
        </Async>
      </div>
    );
}

export default Hompage;