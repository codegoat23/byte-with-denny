import React from 'react'
import { FaFile } from "react-icons/fa6";
import { SlOptionsVertical } from "react-icons/sl";

function Post(prop) {
  return (
    <div className='post-cont'>
        
        <div className="post-title"><FaFile size={20}/><span>{prop.title}</span></div>
        <button><SlOptionsVertical /></button>
    </div>
  )
}

export default Post