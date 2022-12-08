import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../comonents/button/Button'
import Card from '../../comonents/Card/Card'
import styles from './Home.module.css'


function Home() {


  const linkStyle = {
    color: "rgb(50, 50, 160)",
    textDecoration: "none",

  }
  const navigate = useNavigate();
  const handleButton = () => {
    navigate("/authenticate")
    console.log("button Clicked")
  }

  return (
    <div className={`container flexCenter ${styles.main}`}>
        <Card title="welcom to chatApp">
            <div className={`${styles.contentWrapper}`}>
                <p>Voice chat apps allow you to communicate through audio messages, make app-to-app calls and send automated voice alerts just with an internet connection. It helps connect people across the globe from any device without the labor of typing text messages and emails.</p>
                {/* <button className={`${styles.btn}`}>Get Your Username</button> */}
                <Button onClick={handleButton} text="Get your Username"/>
                <div className={`flex ${styles.signinContainer}`} >
                    <p>Have an Invite?</p>
                    <Link to="/" style={linkStyle}>Sign In</Link>
                </div>
            </div> 
        </Card>
    </div>
  )
}

export default Home