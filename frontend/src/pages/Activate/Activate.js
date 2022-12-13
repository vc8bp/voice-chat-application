import styles from "./Activate.module.css"
import {useState} from 'react'
import StepName from "../Steps/Name/StepName"
import StepAvatar from "../Steps/Avatar/StepAvatar"
import Card from "../../comonents/Card/Card"
import {activateStepsTitle} from '../../assets/stepsData'
import { useSelector } from 'react-redux'


const steps = {
    1: StepName,
    2: StepAvatar,
}



function Activate() {
  const UserName = useSelector(s => s.activate.name)
  const [step, setstep] = useState(1)
  const Comp = steps[step]

  const onNext = () => {
    if (step >= 2) return
    setstep(e => e + 1)
  }
  
  return (
    <div  className={`container flexCenter ${styles.main}`}>
      <Card title={step == 1 ? activateStepsTitle[step] : (activateStepsTitle[step] + UserName )}>
        <Comp onNext={onNext}/>
      </Card>   
    </div>
  )
}

export default Activate