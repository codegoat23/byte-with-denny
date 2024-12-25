import React from 'react'
import ErrorImg from './images/404error.png'
import './components/styles/ErrorPage.css'
import { Link } from 'react-router-dom'
function ErrorPage() {
  return (
    <>
        <div className='error-container'>
            <div className='error'>
            <img src={ErrorImg} alt='error' />
            <Link to='/'className='go-btn'>go to home</Link>
            <h2>Page not found</h2>
            </div>
           
        </div>
    </>
    
  )
}

export default ErrorPage