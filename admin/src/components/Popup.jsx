import React ,{useRef}from 'react'
import { IoClose } from 'react-icons/io5'
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Asset from './Asset'
import AddPost from './AddPost';
import Theme from './Theme'
function Popup({onClose}) {
    const popupref =useRef();

    const closePopup = (e) =>{
        if(popupref.current === e.target){
            onClose();
        }
    }
  return (
    <div ref={popupref} onClick={closePopup} className='popup-screen'>
        <div className="popup">
        <Routes>
          <Route path="/asset" element={<Asset/>} />
          <Route path="/add-post" element={<AddPost />} />
          <Route path="/theme" element={<Theme/>} />
        </Routes>
        </div>
    </div>
  )
}

export default Popup