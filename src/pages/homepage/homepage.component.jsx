import React from 'react';

import Async from 'react-async';
import spinner from '../../assets/Spinner.svg';

import './homepage.styles.scss';

const api = (category) => `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=8a8c2162bdf243d48e6e87b8215df996`;

fetch("https://newsapi.org/v2/top-headlines?language=en&country=us&category=entertainment&apiKey=8a8c2162bdf243d48e6e87b8215df996").then(response => response.json()).then(response => console.log(response.articles))

const categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];

const categoriesApi = categories.map((category) => api(category))
                                .map((categoryApi) => 
                                () => (fetch(categoryApi)
                                        .then(res => (res.ok ? res : Promise.reject(res)))
                                        .then(res => res.json())))

const Hompage = () => {
  return ( 
      <div className='homepage'>
        {
          categoriesApi.map((category, i) => (
            <Async key={i} promiseFn={category}>
              {
                ({ data, err, isLoading }) => {
                  if (isLoading) return (<img src={spinner} className="App-logo" alt="logo" />)
                  if (err) return <h1>{`Something went wrong: ${err.message}`}</h1>

                  if (data) return(
                    data.articles.map(({urlToImage, author, description, content }, i) => {
                      if (i<5 && urlToImage)
                      return (
                        <details key={i}>
                          <summary className='news-card'>
                            <img src={urlToImage} alt="img" />
                            <p>By: {author}</p>
                            <p>{description}</p>
                          </summary>
                          <div>
                            <img src={urlToImage} alt="img" />
                            <p>{content? content: 'no content to show'}</p>
                            <p>{content}</p>
                            <p>{content}</p>
                            <p>{content}</p><p>{content}</p><p>{content}</p>
                          </div>
                        </details>
                      )
                      return ''
                      }
                    )
                  )
                }
              }
            </Async>
          ))
        }
      </div>
    );
}

export default Hompage;











// <Async promiseFn={news}>
//         {({ data, err, isLoading }) => {
//           if (isLoading) return (<img src={logo} className="App-logo" alt="logo" />)
//           if (err) return <h1>{`Something went wrong: ${err.message}`}</h1>

//           if(data) return (
//             <div className='content'>
//               {
//                 data.articles.map(({source: {id, name} }, i) => {
//                   if(i<5) {
//                     return(<h1 className='box1' key={i}>{`${id}   ${name}`}</h1>)
//                   }
//                   if(i>5){
//                     return(<h1 className='box' key={i}>{`${id}   ${name}`}</h1>)
//                   }
//                   return console.log(i>5)
//                 })
//               }
//             </div>
//           )}
//         }
//       </Async>

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