import React from 'react'
import "./styles/Header.css"
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div className="header-container">
        <nav>
           
            <div className='links-cont'>
                <ul>
                    <li><Link to="/posts/categories/Custom ROMs">Custom ROMs</Link></li>
                    <li><Link to="/posts/categories/Reviews">Reviews</Link></li>
                    <li><Link to="/posts/categories/Modules">Modules</Link></li>
                    <li><Link to="/posts/categories/Customization">Customization</Link></li>
                    <li><Link to="/posts/categories/Android">Android</Link></li>
                    <li><Link to="/posts/categories/Windows">Windows</Link></li>
                    <li><Link to="/posts/categories/MacOs">MacOs</Link></li>
                    <li><Link to="/posts/categories/Software">Software</Link></li>
                    
                </ul>
            </div>
           
        </nav>
    </div>
  )
}

export default Header