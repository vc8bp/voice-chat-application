import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'


function NavBar() {
 
  return (
    <nav className={`${styles.navbar}`}>
      <div className={`container`}>    
        <Link className='aReset' to="/">
          <h3 className='logo'>ChatApp</h3>
        </Link>
      </div>
    </nav>
  )
}

export default NavBar