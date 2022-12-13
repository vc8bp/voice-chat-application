import React, { useState } from 'react'
import Button from '../../../comonents/button/Button'
import styles from "./StepAvatar.module.css"
import defaultGIF from '../../../assets/images/defaultGIF.gif'

function StepAvatar({onNext}) {
  const [image, setImage] = useState(defaultGIF);

  const handleInput = (e) => {
    const file = e.target.files[0];
    const filereader = new FileReader();
    filereader.readAsDataURL(file);
    filereader.onload = () => {
      console.log(filereader.result)
      setImage(filereader.result)
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
      <Button text="Next" onClick={onNext}></Button>
    </>
  )
}

export default StepAvatar