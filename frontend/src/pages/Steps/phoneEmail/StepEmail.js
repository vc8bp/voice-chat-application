import { useState } from 'react'
import styles from './PhoneEmail.module.css'
import Button from '../../../comonents/button/Button'
import Phone from './Phone/Phone';
import Email from './Email/Email';
import Card from '../../../comonents/Card/Card';
import phoneIcon from '../../../assets/images/phone.png'
import emailIcon from '../../../assets/images/email.png'
import phoneLight from '../../../assets/images/phoneLight.svg';
import emailLight from '../../../assets/images/emailLight.svg';


const data = {
  phone : {
    comp: Phone,
    title: "Enter your Phone number",
    img: phoneIcon
  },
  email : {
    comp: Email,
    title: "Enter your Email ID",
    img: emailIcon
  }
}

function StepEmail({onNext}) {
  const [type, setType] = useState("phone");
  const Comp = data[type].comp;

  const [values, setValues] = useState({
    data: "",
    type: ""
  });

  const handleClick = () => {
    console.log(values);
    // onNext();
  }

  return (

    <>
      <div className={`${styles.cardWrapper}`}>
        <div className={`${styles.buttonWrapper}`}>
          <button onClick={() => setType("phone")}  className={`${type === "phone" && styles.active}`}>
            <img className={`${styles.icons }`} src={phoneLight} alt="Phone" />
          </button>
          <button onClick={() => setType("email")}  className={`${type === "email" && styles.active} `}>
            <img className={`${styles.icons}`} src={emailLight} alt="Email"/>
          </button>
        </div>

        <Card img={data[type].img} title={data[type].title}> 
          <Comp update={setValues}>StepEmail</Comp>
          <p>by entering your Email or Number you are agreeing our terms or services and privacy policy.</p>
          <Button text="Next" onClick={handleClick}></Button>
          
        </Card>
      </div>
      
    </>
  )
}

export default StepEmail