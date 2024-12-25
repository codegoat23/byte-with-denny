import React from 'react'
import Posts from './components/Posts';
import FeaturedPost from './components/FeaturedPost';

function Home() {
  return (
    <>
     <FeaturedPost/>
     <Posts/>
    </>
   
  )
}

export default Home;