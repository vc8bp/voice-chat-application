import React from 'react'
import styles from './Phone.module.css'
import phone from '../../../../assets/images/phone.png'
function Phone({update}) {
  return (
    <>
    <div className={`${styles.inputs}`}>
        <img src={phone} alt="" />
        <input name='tel' type="tel" onChange={e => update(v => ({...v, data: e.target.value, type: "phone"}))}></input>
    </div>
    </>
    
  )
}

export default Phone