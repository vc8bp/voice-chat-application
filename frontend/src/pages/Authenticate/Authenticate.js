import styles from "./Authenticate.module.css"
import {useState} from 'react'
import StepEmail from "../Steps/phoneEmail/StepEmail"
import StepOtp from "../Steps/Otp/Otp"
import Card from "../../comonents/Card/Card"
import {authenticateStepsTitle} from '../../assets/stepsData'


const steps = {
    1: StepEmail,
    2: StepOtp,

}

function Authenticate() {
  const [step, setstep] = useState(1)
  const Comp = steps[step]

  const onNext = () => {
    if (step >= 2) return
    setstep(e => e + 1)
  }
  
  return (
    <div  className={`container flexCenter ${styles.main}`}>
      {/* this is because i dont wont card component on emailPhone */}
      {
      step === 1 ? <Comp onNext={onNext}/>
      :
      <Card title={authenticateStepsTitle[step]}>
        <Comp onNext={onNext}/>
      </Card>  
      }
       
    </div>
  )
}

export default Authenticate