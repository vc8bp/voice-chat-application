import React, { useState } from 'react'
import Button from '../../../comonents/button/Button'
import styles from './Otp.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { verifyOtp } from '../../../http'
import { setAuth } from '../../../store/authSlice'

function StepOtp({ onNext }) {
  const hash = useSelector((s) => s.auth.otp);
  const dispatch = useDispatch()
  const [otp, setOtp] = useState("");

  const onSubmit = async () => {
    try{
      const { data } = await verifyOtp({...hash, otp})
      dispatch(setAuth(data))
    }catch(err){
      console.log(err.response.data.message);
    }

    onNext();
    
  }

  return (
    <>
        <input className={`${styles.inp}`} onChange={(e) => setOtp(e.target.value)}></input>
        <div className={`${styles.linkWrapper}`}>
          <span>Didn't recived?</span><span>Tap to Resend</span>
        </div>
        <Button text="Next" onClick={onSubmit}></Button>
    </>
  )
}

export default StepOtp