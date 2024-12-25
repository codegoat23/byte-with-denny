import React, { useState }  from 'react'
import { TRIAL_POSTS } from './constants'
import FeaturedPostItem from './FeaturedPostItem'
const FEATURED_POST = TRIAL_POSTS[TRIAL_POSTS.length -1]
function FeaturedPost() {
    const[featuredposts, setFeaturedposts] =  useState(FEATURED_POST);
    const featureArray = [featuredposts]
    return (
      <section className='featured-post'>
        { featureArray.length > 0 ?
 <div className="featured-posts-container">
 {
featureArray.map(({id, thumbnail, category, title, desc, authorID})=>
<FeaturedPostItem key={id} postID={id}thumbnail={thumbnail} category={category} title={title} desc={desc} authorID={authorID}/>)
}
 </div>
 :<h1 className='info-post'>No Post Found</h1>
        }
       
      
      </section>
     
    )
}

export default FeaturedPost