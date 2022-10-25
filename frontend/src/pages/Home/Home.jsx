import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../comonents/Card/Card'
import styles from './Home.module.css'


function Home() {
  return (
    <div className={`container flexCenter ${styles.main}`}>
        <Card title="welcom to chatApp">
            <div className={`${styles.contentWrapper}`}>
                <p>Voice chat apps allow you to communicate through audio messages, make app-to-app calls and send automated voice alerts just with an internet connection. It helps connect people across the globe from any device without the labor of typing text messages and emails.</p>
                <button className={`${styles.btn}`}>Get Your Username</button>
                <div className={`flex ${styles.signinContainer}`} >
                    <p>already have Account</p>
                    <Link>Sign In</Link>
                </div>
            </div> 
        </Card>
    </div>
  )
}

export default Home