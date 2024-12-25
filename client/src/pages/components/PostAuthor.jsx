import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../images/5.png'
function PostAuthor() {
  return (
    <>
      <Link to={`/posts/user/denny`} className='post-author'>
      <div className="author-img">
      <img src={Avatar} alt="" />
      </div>
         <div className="authors-detail">
          <h5>Denis Shija</h5>
          <small>Just Now</small>
         </div>
      </Link>
    </>
  )
}

export default PostAuthor