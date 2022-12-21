import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../comonents/button/Button'
import Card from '../../comonents/Card/Card'
import styles from './Home.module.css'


function Home() {
  
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
                <Button onClick={handleButton} text="Let's Start"/>
            </div> 
        </Card>
    </div>
  )
}

export default Home