import React from 'react'
import { Link } from 'react-router-dom'
import PostAuthor from './PostAuthor'

function FeaturedPostItem({postID, category, title, desc, authorID, thumbnail}) {
  return (
    <>
    <div className="featured-post">
        <div className="featured-details">
           
            <div className="featured-decs">
                <div className="decs-cont">
                <Link className='category-btn' to={`/posts/categories/${category}`}>{category}</Link>
            <Link to={`/posts/${postID}`}>
                <h1>{title}</h1>
            </Link>
            <PostAuthor/>
                </div>
            
            </div>
        </div>
        <div className="featured-thumbnail">
        <img src={thumbnail} alt={title} />
        </div>
    </div>
   

    </>
  )
}

export default FeaturedPostItem