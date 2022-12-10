import React, { useState } from 'react'
import Button from '../../../comonents/button/Button'
import styles from './Otp.module.css'

function StepOtp({ onNext}) {
  const [data, setData] = useState({otp: ""});

  const onSubmit = () => {
    console.log(data);
    onNext();
  }

  return (
    <>
        <input className={`${styles.inp}`} onChange={(e) => setData(f => ({...f, otp: e.target.value}))}></input>
        <div className={`${styles.linkWrapper}`}>
          <span>Didn't recived?</span><span>Tap to Resend</span>
        </div>
        <Button text="Next" onClick={onSubmit}></Button>
    </>
  )
}

export default StepOtp