import React from 'react'
import { Link } from 'react-router-dom'
import PostAuthor from './PostAuthor'
function PostItems(props) {
    const shortDesc = props.desc.length >250 ? props.desc.substr(0,250)+ '...........' : props.desc;
    const PostTitle = props.title.length >30 ? props.desc.substr(0,30)+ '............' : props.title;
  return (
    <article className="post">
         <div className="post-thumbnail">
            <img src={props.thumbnail} alt={props.title} />
         </div>
         <div className="post-content">
            <Link to={`/posts/${props.postID}`}>
                <h3>{PostTitle}</h3>
            </Link>
            <p>{shortDesc }</p>
            <div className="post-footer">
                <PostAuthor/>
                <Link className='category-btn' to={`/posts/categories/${props.category}`}>{props.category}</Link>
            </div>
         </div>
    </article>
  )
}

export default PostItems