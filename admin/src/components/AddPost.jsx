import React from 'react'
import { IoClose } from 'react-icons/io5'
function AddPost() {
  return (
    <div>
        <div className="popup-header">
    <span>Add Post</span>
    <button onClick={()=> setShowPopup(false)}><IoClose size={20}/></button> 

</div>
<div className="popup-content">
  <form action="">
    <div className="textareas">
      <label htmlFor="">Title*</label>
      <input type="text" className='txt-input'/>
    </div>
    <div className="textareas">
      <label htmlFor="">Slug</label>
      <input type="text" className='txt-input'/>
    </div>
  
  </form>
</div>
<div className="popup-footer"></div>

    </div>
  )
}

export default AddPost