import React, { useState } from 'react'
import { TRIAL_POSTS } from './components/constants'
import { Link } from 'react-router-dom'
function Dashboard() {
  const[posts,setPosts] = useState(TRIAL_POSTS)
  const PostItems = posts.map(item =>{
    return <article key={item.id} className='dashboard-post'>
      <div className="dashboard-post-info">
        <div className="dashboard-post-thumbnail">
          <img src={item.thumbnail} alt="" />
        </div>
        <div className="dashboard-post-title">
          <h5>{item.title}</h5>
        </div>
        <div className="dashboard-post-action">
        <Link to={`posts/${item.id}/edit`} className='action-btn edit'>Edit</Link>
        <Link to={`posts/${item.id}/view`} className='action-btn'>View</Link>
        <Link to={`posts/${item.id}/delete`} className='action-btn red delete'>Delete</Link>
        </div>
      </div>
    </article>
  })
  return (

    <section className="dashboard">
      {
        posts.length ? <div className="dashboard-cont">
          <div className="post-scrollable">
          {PostItems}
          </div>
         

        </div> : <h1>No posts Found</h1>
      }

    </section>
  )
}

export default Dashboard