import styles from "./Register.module.css"
import {useState} from 'react'
import StepEmail from "../Steps/phoneEmail/StepEmail"
import StepOtp from "../Steps/Otp/Otp"
import StepName from "../Steps/Name/StepName"
import StepAvatar from "../Steps/Avatar/StepAvatar"
import StepUsername from "../Steps/Username/StepUsername"
import Card from "../../comonents/Card/Card"


const steps = {
    1: StepEmail,
    2: StepOtp,
    3: StepName,
    4: StepAvatar,
    5: StepUsername
}
const stepsTitle = {
    1: "Enter your Number or Email",
    2: "Enter the Code we just texted you",
    3: "Enter your Full name",
    4: "Upload yoour avatar",
    5: "Pick a Username"
}

function Register() {
  const [step, setstep] = useState(1)
  const Comp = steps[step]

  const onNext = () => {
    if (step >= 5) return
    setstep(e => e + 1)
  }
  
  return (
    <div  className={`container flexCenter ${styles.main}`}>
      <Card title={stepsTitle[step]}>
        <Comp onNext={onNext}/>
      </Card>   
    </div>
  )
}

export default Register