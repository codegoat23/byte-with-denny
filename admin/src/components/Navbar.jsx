import React from 'react'
import { FaFile } from 'react-icons/fa6'
import { IoCloudUpload } from "react-icons/io5";
import { IoColorPalette } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function Navbar({showpopup}) {
  return (
    <div className='navbar'>
        <button className='main-menu'><FaFile size={50}/><span>Drafts</span></button>
        <button className='main-menu' ><Link to='/asset' onClick={showpopup}><IoCloudUpload  size={50}/><span>Assets</span></Link></button>
        <button className='main-menu' onClick={showpopup}><IoColorPalette  size={50}/><span>Themes</span></button>
        <div className="small-menu">
            <button className='small-menu-btn'>
              <FaEnvelope size={25}/>
            </button>
            <button className='small-menu-btn'>
            <IoMdSettings size={25}/>
            </button>
        </div>
    </div>
  )
}

export default Navbar