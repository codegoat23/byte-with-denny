import React from 'react'
import Header from './Header'
import Footer from './Footer'
import {Outlet, outlet} from 'react-router-dom'
import Loader from './Loader'
function Layout() {
  return (
    
    <>
    <Loader/>
    <Header/>
        <Outlet/>
        
    <Footer/>
    </>
  )
}

export default Layout