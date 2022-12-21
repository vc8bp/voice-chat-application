import React, { useState } from 'react'
import Button from '../../../comonents/button/Button'
import styles from "./StepAvatar.module.css"
import defaultGIF from '../../../assets/images/defaultGIF.js'
import { activateAccount } from '../../../http/index'
import { useSelector, useDispatch } from 'react-redux'
import { setAuth } from '../../../store/authSlice'
import { useNavigate } from 'react-router-dom'

function StepAvatar({onNext}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {name} = useSelector(s => s.activate)
  const [image, setImage] = useState(defaultGIF);
  const [type, setType] = useState('gif');

  const handleInput = async (e) => {
    setType(e.target.value.split('.')[1])
    const file = e.target.files[0] || image;
    const filereader = new FileReader();
    filereader.readAsDataURL(file);
    filereader.onload = () => {  
      setImage(filereader.result)
    }
  }

  const handleSubmit = async () => {
    try {
      const {data} = await activateAccount({name, image, type})   
      console.log(data) 
      if(data.auth === true){
        dispatch(setAuth(data.user)) 
      } 
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <p className={styles.subHeading}>How's your Photo?</p>
      <div className={styles.avatarWrapper}>
        <img className={styles.image} src={image} alt="" />
        <label htmlFor='input'>Choose Diferent image</label>
        <input required={true} id='input' className={styles.inp} type="file" onChange={handleInput} />
      </div>
      <Button text="Next" onClick={handleSubmit}></Button>
    </>
  )
}

export default StepAvatar