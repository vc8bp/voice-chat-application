import React, {useState} from 'react'
import styles from './StepName.module.css'
import Button from '../../../comonents/button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { setName } from "../../../store/activateSlice"


function StepName({onNext}) {
  const dispatch = useDispatch()

  const [name, setStateName] = useState(useSelector(s => s.activate.name))
  console.log(name)
  

  const handleClick = () => {
    console.log("me clicked")
    if(!name) return 
    dispatch(setName(name))
    onNext()
  }
  return (
    <>
      <input className={styles.inp} type="text" placeholder='name' value={name} onChange = {e => (setStateName(e.target.value))} required={true} />
      <p>Please Enter your real name</p>
      <Button text="Next" onClick={handleClick}></Button>
    </>
  )
}

export default StepName 