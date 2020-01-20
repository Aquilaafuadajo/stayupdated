import React from 'react';

import Async from 'react-async';

const api = (category) => `https://newsapi.org/v2/top-headlines?country=ng&category=${category}&apiKey=8a8c2162bdf243d48e6e87b8215df996`;

const categories = ['Business', 'Entertainment', 'General', 'Health', 'Science', 'Sports', 'Technology'];

const categoriesApi = categories.map((category) => api(category))
                                .map((categoryApi) => 
                                () => (fetch(categoryApi)
                                        .then(res => (res.ok ? res : Promise.reject(res)))
                                        .then(res => res.json())))

export const General = () => {
  return ( 
            <div className='homepage'>
              {
                <Async promiseFn={categoriesApi[0]}>
                    {
                      ({ data, err, isLoading }) => {
                        if (isLoading) return (<p>Loading...</p>)
                        if (err) return <h1>{`Something went wrong: ${err.message}`}</h1>

                        if (data) return(
                          data.articles.map(({urlToImage, author, description, content }, i) => {
                            if (urlToImage)
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
                }
              </div>
    );
}

export const Entertainment = () => {
  return ( 
    <div className='homepage'>
    {
      <Async promiseFn={categoriesApi[1]}>
          {
            ({ data, err, isLoading }) => {
              if (isLoading) return (<p>Loading...</p>)
              if (err) return <h1>{`Something went wrong: ${err.message}`}</h1>

              if (data) return(
                data.articles.map(({urlToImage, author, description, content }, i) => {
                  if (urlToImage)
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
      }
    </div>
    );
}

export const Business = () => {
  return ( 
    <div className='homepage'>
    {
      <Async promiseFn={categoriesApi[2]}>
          {
            ({ data, err, isLoading }) => {
              if (isLoading) return (<p>Loading...</p>)
              if (err) return <h1>{`Something went wrong: ${err.message}`}</h1>

              if (data) return(
                data.articles.map(({urlToImage, author, description, content }, i) => {
                  if (urlToImage)
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
      }
    </div>
    );
}

export const Health = () => {
  return ( 
    <div className='homepage'>
    {
      <Async promiseFn={categoriesApi[3]}>
          {
            ({ data, err, isLoading }) => {
              if (isLoading) return (<p>Loading...</p>)
              if (err) return <h1>{`Something went wrong: ${err.message}`}</h1>

              if (data) return(
                data.articles.map(({urlToImage, author, description, content }, i) => {
                  if (urlToImage)
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
      }
    </div>
    );
}

export const Science = () => {
  return ( 
    <div className='homepage'>
    {
      <Async promiseFn={categoriesApi[4]}>
          {
            ({ data, err, isLoading }) => {
              if (isLoading) return (<p>Loading...</p>)
              if (err) return <h1>{`Something went wrong: ${err.message}`}</h1>

              if (data) return(
                data.articles.map(({urlToImage, author, description, content }, i) => {
                  if (urlToImage)
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
      }
    </div>
    );
}

export const Sport = () => {
  return ( 
    <div className='homepage'>
    {
      <Async promiseFn={categoriesApi[5]}>
          {
            ({ data, err, isLoading }) => {
              if (isLoading) return (<p>Loading...</p>)
              if (err) return <h1>{`Something went wrong: ${err.message}`}</h1>

              if (data) return(
                data.articles.map(({urlToImage, author, description, content }, i) => {
                  if (urlToImage)
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
      }
    </div>
    );
}

export const Technology = () => {
  return ( 
    <div className='homepage'>
    {
      <Async promiseFn={categoriesApi[6]}>
          {
            ({ data, err, isLoading }) => {
              if (isLoading) return (<p>Loading...</p>)
              if (err) return <h1>{`Something went wrong: ${err.message}`}</h1>

              if (data) return(
                data.articles.map(({urlToImage, author, description, content }, i) => {
                  if (urlToImage)
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
      }
    </div>
    );
}

