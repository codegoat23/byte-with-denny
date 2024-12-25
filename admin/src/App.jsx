import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import AddIcon from './assets/addicon.png'
import Tool from './components/Tool'
import Navbar from './components/Navbar'
import Loader from '../../client/src/pages/components/Loader'
import Post from './components/Post'
function App() {
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

const post =  posts.map((items)=>
  <Post 
          key={items.id} 
          postID={items.id}
          thumbnail={items.thumbnails} 
         category={items.category} 
         title={items.title} 
         desc={items.desc} 
        authorID={items.authorID}
         />)
  return (
    <>
      
      <div className="header-cont">
        <Header/>
      </div>
      <div className="main-container">
        <div className="left-container">
          <div className="left-upper-container">
            <Navbar/>
          </div>
          <div className="left-lower-container">
            {post}
          </div>
        </div>
        <div className="right-container">
          <div className="right-upper-container">
            <Tool/>
          </div>
          <div className="right-lower-container">
            <button>
              <img src={AddIcon} alt="" />  
            </button>
          </div>
        </div>

      </div>
     
    </>
  )
}

export default App
