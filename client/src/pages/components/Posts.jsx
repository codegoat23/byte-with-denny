import React, { useState,useEffect } from 'react'
import PostItems from './PostItems'
import { TRIAL_POSTS } from './constants'
import axios from 'axios';

function Posts() {
  const [posts, setPosts] = useState([]); // State to store fetched data
  const [loading, setLoading] = useState(true); // State to manage loading status
  const [error, setError] = useState(""); // State for error handling

  useEffect(() => {
    // URL of your deployed Google Apps Script Web App
    const url = 'https://script.google.com/macros/s/AKfycbxv_EiYLhlBIZTTx6wbzUcN2vtCoPvY_ioAo0qU2C_WILW4rNoEE845EILzhVo13qMLtQ/exec'; // Replace with your Google Apps Script Web App URL

    // Fetch data from the Google Apps Script
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Parse JSON response
      })
      .then((data) => {
        setPosts(data); // Set the fetched data to the posts state
        setLoading(false); // Set loading to false when data is loaded
      })
      .catch((error) => {
        setError(error.message); // Set error message if there's an issue
        setLoading(false); // Set loading to false even if there's an error
      });
  }, []); // Empty dependency array to run once when the component mounts
console.log(posts)
// POSTS FETCHED FROM GOOGLE SHEETS

  const Post =  posts.map((items)=>
    <PostItems 
            key={items.id} 
            postID={items.id}
            thumbnail={items.thumbnails} 
           category={items.category} 
           title={items.title} 
           desc={items.desc} 
          authorID={items.authorID}
           />)
  return (
    <section className='posts'>
      
       {posts.length > 0 ?
        <div className="container posts-container">
            {Post}
        </div>
        :<h1></h1>
      } 
    
    </section>
   
  )
}

export default Posts